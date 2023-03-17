import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Settings } from '../../../../../domain/settings/settings';

import styles from './bankaccount.module.css';
import { mock } from './mock';

type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    direction: -1 | 1,
    primary: boolean,
    regallowed: boolean,
    savedstate: State | null,
    client: boolean,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
    onNext: () => void,
};
export type State = {
    type: "BANKACCOUNT",
    clientid: number | null,
    accountid: number | null,
    notinlist: boolean,
    search: string,
};
const validate = (state: State, subtype: "INTERNAL" | "EXTERNAL", client: boolean): boolean => {
    return (
        state.notinlist
        || (subtype === "INTERNAL" && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && client && state.clientid !== null && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && !client && state.clientid === null && !state.notinlist && state.accountid !== null)
    );
};

export const BankAccount: FC<Props> = ({ subtype, direction, savedstate, regallowed, client, onReady, onDirty, onNext }: Props) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "BANKACCOUNT",
            clientid: null,
            accountid: null,
            notinlist: false,
            search: "",
        }
        : { ...savedstate }
    );
    const clicks = useRef(1);

    const onCurrency = (accountid: number, clientid: number | null) => {
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
            setState(state => ({ ...state, accountid, clientid: client? clientid: null }));
        }
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked }));
    };
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, accountid: null, search: event.target.value }));
    };

    useEffect(() => {
        validate(state, subtype, client)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (direction === 1? "Приём: ": "Отправка: ") + (subtype === "INTERNAL"? "Расчётные счета организации": "Расчётные счета внешние")}
            </div>
            <div className={styles.search}>
                <Input
                    prefix={<SearchOutlined style={{ fontSize: "1.25rem", paddingRight: "0.5rem"}}/>}
                    style={{ fontFamily: 'Roboto', fontSize: "1rem", width: '100%' }}
                    placeholder="Введите текст для выбора счёта по номеру счёта или названию организации"
                    allowClear
                    value={state.search}
                    onChange={onChangeSearch}
                />
            </div>
            <ul className={styles["accounts-list"]}>
                {
                    mock
                        .filter(item => (subtype === "EXTERNAL" && item.external === true) || (subtype === "INTERNAL" && item.external === false))
                        .filter(item => state.search.length > 0 && (item.account.includes(state.search) || item.organization.toUpperCase().includes(state.search.toUpperCase())))
                        .sort((a, b) => (a.organization < b.organization)? -1: 1)
                        .map(item =>
                            <li
                                className={[styles["accounts-item"], state.accountid === item.id? styles["accounts-item-current"]: ""].join(" ")}
                                key={item.id}
                                value={item.account}
                                onClick={() => onCurrency(item.id, item.clientid)}
                            >
                                <div className={styles["account-item-account"]}>
                                    {item.account}
                                </div>
                                <div className={styles["account-item-client"]}>
                                    {subtype === "EXTERNAL"? item.clientid : ""}
                                </div>
                                <div className={styles["account-item-organization"]}>
                                    {item.organization}
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
