import React, { FC, useState, useEffect } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import styles from './personalaccount.module.css';
import { mock_clients, mock_accounts } from '../../../clients/mock';

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
    type: "PERSONALACCOUNT",
    clientid: number | null,
    accountid: number | null,
    clientsnotinlist: boolean,
    accountsnotinlist: boolean,
    accountname: string,
    search: string,
};
const validate = (state: State): boolean => {
    return (
        (state.clientsnotinlist)
            || (!state.clientsnotinlist && state.clientid !== null && state.accountsnotinlist)
            || (!state.clientsnotinlist && state.clientid !== null && !state.accountsnotinlist && state.accountid !== null)
        );
};

export const PersonalAccount: FC<Props> = ({ subtype, direction, regallowed, savedstate, onReady, onDirty }: Props) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "PERSONALACCOUNT",
            clientid: null,
            accountid: null,
            clientsnotinlist: false,
            accountsnotinlist: false,
            accountname: "",
            search: "",
        }
        : { ...savedstate }
    );

    const onClients = (clientid: number) => {
        setState(state => ({ ...state, clientid }));
    };
    const onAccounts = (accountid: number) => {
        setState(state => ({ ...state, accountid }));
    };
    const onChangeClientsNotInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => (
            {
                ...state,
                clientsnotinlist: event.target.checked,
                accountsnotinlist: event.target.checked? true: state.accountsnotinlist,
            }));
    };
    const onChangeAccountsNotInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        !state.clientsnotinlist && setState(state => (
            {
                ...state,
                accountsnotinlist: event.target.checked,
            }));
    };
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, clientid: null, accountid: null, search: event.target.value }));
    };
    const onChangeAccountName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, accountname: event.target.value }));
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, state.clientsnotinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (direction === 1? "Начисление: ": "Списание: ") + (subtype === "INTERNAL"? "Лицевые счета организации": "Лицевые счета клиентов") }
            </div>
            <div className={styles.search}>
                <Input prefix={<SearchOutlined style={{ fontSize: "1.25rem", paddingRight: "0.5rem"}}/>} placeholder="Введите текста для выбора клиента" allowClear onChange={onChangeSearch} style={{ fontSize: "1rem", width: '100%' }} />
            </div>
            <ul className={[styles["clients-list"], state.clientsnotinlist? styles["list-disabled"]: ""].join(" ")}>
                {
                    mock_clients
                        .filter(item => state.search.length !== 0 && item.name.includes(state.search))
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .map(item =>
                            <li className={[styles["clients-item"], state.clientid === item.id? styles["clients-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onClients(item.id)}>
                                <div>
                                    {item.name}
                                </div>
                            </li>)
                }
            </ul>
            {
                regallowed?
                    <div className={styles["clients-not-in-list"]}>
                        <input type="checkbox" checked={state.clientsnotinlist} onChange={onChangeClientsNotInList}></input>
                        <div>Клиент в списке отсутствует</div>
                    </div>
                    : null
            }
            <ul className={[styles["accounts-list"], state.accountsnotinlist? styles["list-disabled"]: ""].join(" ")}>
                {
                    mock_accounts
                        .filter(item => item.clientid === state.clientid)
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .map(item =>
                            <li className={[styles["accounts-item"], state.accountid === item.id? styles["accounts-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onAccounts(item.id)}>
                                <div>
                                    {item.name}
                                </div>
                            </li>)
                }
            </ul>
            {
                regallowed?
                    <div className={styles["accounts-not-in-list"]}>
                        <input type="checkbox" checked={state.accountsnotinlist} onChange={onChangeAccountsNotInList}></input>
                        <div>Счёт в списке отсутствует</div>
                    </div>
                    : null
            }
            <div className={styles["accounts-name"]}>
                {
                    (!state.clientsnotinlist && state.accountsnotinlist)?
                        <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} placeholder="Введите сюда название нового счёта" onChange={onChangeAccountName} value={state.accountname}/>
                        : null
                }
            </div>
        </div>
    );
};
