import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import styles from './cashaccount.module.css';
import { mock } from './mock';
import { Settings } from '../../../../../domain/settings/settings';

type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    direction: -1 | 1,
    primary: boolean,
    regallowed: boolean,
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
    onNext: () => void,
};
export type State = {
    type: "CASHACCOUNT",
    accountid: number,
    notinlist: boolean,
    search: string,
};
const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist &&  state.accountid > 0));
};

export const CashAccount: FC<Props> = ({ subtype, direction, savedstate, regallowed, onReady, onDirty, onNext }: Props) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "CASHACCOUNT",
            accountid: 0,
            notinlist: false,
            search: "",
        }
        : { ...savedstate }
    );
    const clicks = useRef(1);

    const onCurrency = (accountid: number) => {
        if (!state.notinlist) {
            if (accountid === state.accountid) {
                clicks.current += 1;
            } else {
                clicks.current = 1;
            }
            if (clicks.current > Settings.clicksOnNext) {
                clicks.current = 1;
                onNext();
                return;
            }
            setState(state => ({ ...state, accountid }));
        }
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked }));
    };
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, accountid: 0, search: event.target.value }));
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (direction === 1? "Приём: ": "Отправка: ") + (subtype === "INTERNAL"? "Кассовые счета организации": "Кассовые счета внешние") }
            </div>
            <div className={styles.search}>
                <Input
                    prefix={<SearchOutlined style={{ fontSize: "1.25rem", paddingRight: "0.5rem"}}/>}
                    style={{ fontFamily: 'Roboto', fontSize: "1rem", width: '100%' }}
                    placeholder="Введите текст для выбора кассы по названию"
                    allowClear
                    value={state.search}
                    onChange={onChangeSearch}
                />
            </div>
            <ul className={styles["accounts-list"]}>
                {
                    mock
                        .filter(item => state.search.length === 0 || item.name.toUpperCase().includes(state.search.toUpperCase()))
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .map(item =>
                            <li className={[styles["accounts-item"], state.accountid === item.id? styles["accounts-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onCurrency(item.id)}>
                                <div>
                                    {item.name}
                                </div>
                            </li>)
                }
            </ul>
            {
                regallowed?
                    <div className={styles["accounts-not-in-list"]}>
                        <input type="checkbox" checked={state.notinlist} onChange={onChangeInList}></input>
                        <div>Счёт в списке отсутствует</div>
                    </div>
                    : null
            }
        </div>
    );
};
