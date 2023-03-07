import React, { FC, useState, useEffect } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import styles from './cashaccount.module.css';
import { mock } from './mock';

type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    direction: -1 | 1,
    primary: boolean,
    regallowed: boolean,
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
};
export type State = {
    type: "CASHACCOUNT",
    accountid: number,
    notinlist: boolean,
};
const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist &&  state.accountid > 0));
};

export const CashAccount: FC<Props> = ({ subtype, direction, savedstate, regallowed, onReady, onDirty }: Props) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "CASHACCOUNT",
            accountid: -1,
            notinlist: false,
        }
        : { ...savedstate }
    );

    const onCurrency = (accountid: number) => {
        setState(state => ({ ...state, accountid }));
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked }));
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
                <input type="text" placeholder='Поиск'></input>
                <div><SearchOutlined/></div>
            </div>
            <ul className={styles["accounts-list"]}>
                {
                    mock
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
