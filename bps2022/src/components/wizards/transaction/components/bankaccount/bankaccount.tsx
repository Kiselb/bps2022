import React, { FC, useState, useEffect } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import styles from './bankaccount.module.css';
import { mock } from './mock';

type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    direction: -1 | 1,
    primary: boolean,
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
};
export type State = {
    type: "BANKACCOUNT",
    accountid: number,
    notinlist: boolean,    
};
const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist && state.accountid > 0));
};

export const BankAccount: FC<Props> = ({ subtype, direction, savedstate, onReady }: Props) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "BANKACCOUNT",
            accountid: -1,
            notinlist: false
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
        validate(state) && onReady({ ...state }, state.notinlist);
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (direction === 1? "Приём: ": "Отправка: ") + (subtype === "INTERNAL"? "Расчётные счета организации": "Расчётные счета внешние")}
            </div>
            <div className={styles.search}>
                <input type="text" placeholder='Поиск'></input>
                <div><SearchOutlined/></div>
            </div>
            <ul className={styles["accounts-list"]}>
                {
                    mock
                        .filter(item => (subtype === "EXTERNAL" && item.external === true) || (subtype === "INTERNAL" && item.external === false))
                        .sort((a, b) => (a.organization < b.organization)? -1: 1)
                        .map(item =>
                            <li className={[styles["accounts-item"], state.accountid === item.id? styles["accounts-item-current"]: ""].join(" ")} key={item.id} value={item.account} onClick={() => onCurrency(item.id)}>
                                <div>
                                    {item.account}
                                </div>
                                <div>
                                    {item.organization}
                                </div>
                            </li>)
                }
            </ul>
            <div className={styles["accounts-not-in-list"]}>
                <input type="checkbox" checked={state.notinlist} onChange={onChangeInList}></input>
                <div>Счёт в списке отсутствует</div>
            </div>
        </div>
    );
};
