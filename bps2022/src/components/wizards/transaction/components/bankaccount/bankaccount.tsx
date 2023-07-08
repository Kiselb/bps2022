import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Settings } from '../../../../../domain/settings/settings';
import { WizardCommonProps, WizardStateProps, AccountOwner, } from '../../../../../domain/transactions/types';

import styles from './bankaccount.module.css';
import { mock } from './mock';

export type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    balance: "WITHDRAWAL" | "ACCRUAL",
    position: "PRIMARY" | "SECONDARY",
    suspense: boolean,
    owner: AccountOwner,
};

export type State = {
    type: "BANKACCOUNT",
    clientid: number | null,
    accountid: number | null,
    notinlist: boolean,
    search: string,
};
const validate = (state: State, subtype: "INTERNAL" | "EXTERNAL" | "NONE", owner: AccountOwner): boolean => {
    return (
        state.notinlist
        || (subtype === "INTERNAL" && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && owner && state.clientid !== null && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && !owner && state.clientid === null && !state.notinlist && state.accountid !== null)
    );
};

export const BankAccount: FC<Props & WizardCommonProps & WizardStateProps> = ({ subtype, balance, savedstate, suspense, owner, onReady, onDirty, onNexty, getParam, setParam }: (Props & WizardCommonProps & WizardStateProps)) => {
    const [state, setState] = useState<State>(
        (savedstate as (State | null)) === null?
        {
            type: "BANKACCOUNT",
            clientid: null,
            accountid: null,
            notinlist: false,
            search: "",
        }
        : { ...(savedstate as State) }
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
                onNexty();
            } else {
                setState(state => ({ ...state, accountid, clientid: owner? clientid: null }));
            }
        }
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked }));
    };
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, accountid: null, search: event.target.value }));
    };
    const header = (direction: -1 | 1, subtype: "INTERNAL" | "EXTERNAL" | "NONE", owner: AccountOwner) => {
        return "";
    }

    useEffect(() => {
        validate(state, subtype, owner)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                {
                }
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
                        .filter(item => (!owner || owner && item.clientid !== null))
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
                suspense?
                    <div className={styles["accounts-not-in-list"]}>
                        <input type="checkbox" checked={state.notinlist} onChange={onChangeInList}></input>
                        <div>Счёт в списке отсутствует</div>
                    </div>
                    : null
            }
        </div>
    );
};
