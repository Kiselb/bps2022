import React, { FC, useState, useEffect } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import styles from './externalaccount.module.css';
import { mock_owners, mock_accounts } from './mock';

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
    type: "EXTERNALACCOUNT",
    ownerid: number,
    accountid: number,
    notinlist: boolean,
};
const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist && (state.ownerid > 0) && (state.accountid > 0)));
}
export const ExternalAccount: FC<Props> = ({ subtype, direction, regallowed, savedstate, onReady, onDirty }: Props) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "EXTERNALACCOUNT",
            ownerid: -1,
            accountid: -1,
            notinlist: false,
        }
        : { ...savedstate }
    );

    const onCurrencyOwner = (ownerid: number) => {
        setState((state) => ({ ...state, ownerid }))
    };
    const onCurrencyAccount = (accountid: number) => {
        setState((state) => ({ ...state, accountid }))
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
                { (direction === 1? "Приём: ": "Отправка: ") + (subtype === "INTERNAL"? "Внешние счета организации": "Внешние счета клиентов") }
            </div>
            <div className={styles.search}>
                <input type="text" placeholder='Поиск'></input>
                <div><SearchOutlined/></div>
            </div>
            <ul className={styles["owners-list"]}>
                {
                    mock_owners
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .map(item =>
                            <li className={[styles["owners-item"], state.ownerid === item.id? styles["owners-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onCurrencyOwner(item.id)}>
                                <div>
                                    {item.name}
                                </div>
                            </li>)
                }
            </ul>
            <ul className={styles["accounts-list"]}>
                {
                    mock_accounts
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .filter(item => item.owner_id === state.ownerid)
                        .map(item =>
                            <li className={[styles["accounts-item"], state.accountid === item.id? styles["accounts-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onCurrencyAccount(item.id)}>
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
