import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Settings } from '../../../../../domain/settings/settings';
import { WizardControlProps, WizardContextProps, AccountOwner } from '../../../../../domain/transactions/types';

import styles from './overdraft.module.css';
import { mock } from './mock';

export type Props = {
    balance: "WITHDRAWAL" | "ACCRUAL",
    position: "PRIMARY" | "SECONDARY",
    suspense: boolean,
};

export type State = {
    type: "OVERDRAFT",
    overdraftid: number,
    regularaccount: string | null,
    overdraftaccount: string | null,
    notinlist: boolean,
    search: string,
};
const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist && state.overdraftid > 0));
};

export const Overdraft: FC<Props & WizardControlProps & WizardContextProps> = ({ balance, savedstate, suspense, onReady, onDirty, onNexty }: (Props & WizardControlProps & WizardContextProps)) => {
    const [state, setState] = useState<State>(
        (savedstate as State | null) === null?
        {
            type: "OVERDRAFT",
            overdraftid: 0,
            regularaccount: null,
            overdraftaccount: null,
            notinlist: false,
            search: "",
        }
        : { ...(savedstate as State) }
    );
    const clicks = useRef(1);

    const onCurrency = (overdraftid: number, regularaccount: string, overdraftaccount: string) => {
        if (!state.notinlist) {
            if (overdraftid === state.overdraftid) {
                clicks.current += 1;
            } else {
                clicks.current = 1;
            }
            if (clicks.current > Settings.clicksOnNext) {
                clicks.current = 1;
                onNexty();
                return;
            }
            setState(state => ({ ...state, overdraftid, regularaccount, overdraftaccount }));
        }
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked }));
    };
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, overdraftid: 0, search: event.target.value }));
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                {"Выбор Овердрафта " + (balance === "WITHDRAWAL"? "для погашения": "для заимствования")}
            </div>
            <div className={styles.search}>
                <Input
                    prefix={<SearchOutlined style={{ fontSize: "1.25rem", paddingRight: "0.5rem"}}/>}
                    style={{ fontFamily: 'Roboto', fontSize: "1rem", width: '100%' }}
                    placeholder="Введите текст для выбора овердафта по номеру счёта или названию организации"
                    allowClear
                    value={state.search}
                    onChange={onChangeSearch}
                />
            </div>
            <ul className={styles["overdrafts-list"]}>
                {
                    mock
                        .filter(item => state.search.length !== 0 && (item.account.toUpperCase().includes(state.search.toUpperCase()) || item.organization.toUpperCase().includes(state.search.toUpperCase())))
                        .sort((a, b) => (a.organization < b.organization)? -1: 1)
                        .map(item =>
                            <li
                                className={[styles["overdrafts-item"], state.overdraftid === item.id? styles["overdrafts-item-current"]: ""].join(" ")}
                                key={item.id}
                                value={item.id}
                                onClick={() => onCurrency(item.id, item.account, item.overdraft)}
                            >
                                <div className={styles["overdrafts-item-id"]}>
                                    {item.id}
                                </div>
                                <div className={styles["overdrafts-item-limit"]}>
                                    {(new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })).format(item.limit)}
                                </div>
                                <div className={styles["overdrafts-item-accounts"]}>
                                    <div className={styles["overdrafts-item-accounts-primary"]}>
                                        {item.account}
                                    </div>
                                    <div className={styles["overdrafts-item-accounts-secondary"]}>
                                        {item.overdraft}
                                    </div>
                                </div>
                                <div className={styles["overdrafts-item-organization"]}>
                                    {item.organization}
                                </div>
                            </li>)
                }
            </ul>
            {
                suspense?
                    <div className={styles["overdrafts-not-in-list"]}>
                        <input type="checkbox" checked={state.notinlist} onChange={onChangeInList}></input>
                        <div>Овердрафт в списке отсутствует</div>
                    </div>
                    : null
            }
        </div>
    );
};
