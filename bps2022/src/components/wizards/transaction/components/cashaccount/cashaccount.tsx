import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Settings } from '../../../../../domain/settings/settings';
import { WizardCommonProps, WizardStateProps, AccountOwner } from '../../../../../domain/transactions/types';

import styles from './cashaccount.module.css';
import { mock } from './mock';

export type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    balance: "WITHDRAWAL" | "ACCRUAL" | "NONE",
    position: "PRIMARY" | "SECONDARY" | "NONE",
    suspense: boolean,
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

export const CashAccount: FC<Props & WizardCommonProps & WizardStateProps> = ({ subtype, balance, savedstate, suspense, onReady, onDirty, onNexty }: (Props & WizardCommonProps & WizardStateProps)) => {
    const [state, setState] = useState<State>(
        (savedstate as State | null) === null?
        {
            type: "CASHACCOUNT",
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
                { (balance === "ACCRUAL"? "Приём: ": "Отправка: ") + (subtype === "INTERNAL"? "Кассовые счета организации": "Кассовые счета внешние") }
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
