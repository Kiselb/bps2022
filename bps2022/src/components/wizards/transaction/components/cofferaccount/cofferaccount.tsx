import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Settings } from '../../../../../domain/settings/settings';
import { WizardControlProps, WizardContextProps, AccountOwner } from '../../../../../domain/transactions/types';

import styles from './cofferaccount.module.css';
import { mock } from './mock';


export type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    balance: "WITHDRAWAL" | "ACCRUAL",
    position: "PRIMARY" | "SECONDARY",
    suspense: boolean,
};

export type State = {
    type: "COFFERACCOUNT",
    accountid: number,
    notinlist: boolean,
    search: string,
};
const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist && state.accountid > 0));
};

export const CofferAccount: FC<Props & WizardControlProps & WizardContextProps> = ({ balance, suspense, savedstate, onReady, onDirty, onNexty }: (Props & WizardControlProps & WizardContextProps)) => {
    const [state, setState] = useState<State>(
        (savedstate as State | null) === null?
        {
            type: "COFFERACCOUNT",
            accountid: 0,
            notinlist: false,
            search: "",
        }
        : { ...(savedstate as State) }
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
                onNexty();
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
                { (balance === "ACCRUAL"? "Приём: ": "Отправка: ") + "Ячейка организации"}
            </div>
            <div className={styles.search}>
                <Input
                    prefix={<SearchOutlined style={{ fontSize: "1.25rem", paddingRight: "0.5rem"}}/>}
                    style={{ fontFamily: 'Roboto', fontSize: "1rem", width: '100%' }}
                    placeholder="Введите текста для выбора ячейки"
                    allowClear
                    value={state.search}
                    onChange={onChangeSearch}
                />
            </div>
            <ul className={styles["coffers-list"]}>
                {
                    mock
                        .filter(item => state.search.length !== 0 && item.name.toUpperCase().includes(state.search.toUpperCase()))
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .map(item =>
                            <li className={[styles["coffers-item"], state.accountid === item.id? styles["coffers-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onCurrency(item.id)}>
                                <div>
                                    {item.name}
                                </div>
                            </li>)
                }
            </ul>
            {
                suspense?
                    <div className={styles["coffers-not-in-list"]}>
                        <input type="checkbox" checked={state.notinlist} onChange={onChangeInList}></input>
                        <div>Ячейка в списке отсутствует</div>
                    </div>
                    : null
            }
        </div>
    );
};
