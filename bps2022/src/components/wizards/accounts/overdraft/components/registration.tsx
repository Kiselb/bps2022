import React, { FC, useState, useEffect, CSSProperties } from 'react';

import { Input, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { Dayjs } from 'dayjs';

import { isDecimal } from '../../../../../domain/utilities';
import { WizardCommonProps, WizardStateProps, AccountOwner, } from '../../../../../domain/transactions/types';

import styles from './registration.module.css';
import { mock } from '../../../transaction/components/bankaccount/mock';

export type Props = Record<string, unknown>;
export type State = {
    type: "REGOVERDRAFT",
    accountid: number,
    limit: string,
    expired: Dayjs | null,
    search: string,
};

const validate = (state: State) => {
    return (
        true
        && state.accountid > 0
        && isDecimal(state.limit)
        && (+state.limit) > 0
        && state.expired !== null
    );
};

export const Registration: FC<Props & WizardCommonProps & WizardStateProps> = ({ savedstate, onReady, onDirty }: (Props & WizardCommonProps & WizardStateProps)) => {
    const [state, setState] = useState<State>(
        (savedstate as State | null) === null?
        {
            type: "REGOVERDRAFT",
            accountid: 0,
            limit: "",
            expired: null,
            search: "",
        }
        : { ...(savedstate as State) }
    );

    const onAccount = (accountid: number) => {
        setState(state => ({ ...state, accountid }));
    };
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, accountid: 0, search: event.target.value }));
    };
    const onLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isDecimal(event.target.value)) {
            setState(state => ({ ...state, limit: event.target.value }));
        } else {
            setState(state => ({ ...state }))
        }
    };
    const onExpired = (expired: Dayjs | null, dateString: string) => {
        setState(state => ({ ...state, expired }));
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, false): onDirty({ ...state });
    }, [state]);

    const stylesearch: CSSProperties = { width: '100%', fontFamily: "Roboto", fontSize: "1rem", height: "2.25rem", textAlign: "left" };
    const stylelimit: CSSProperties = { width: '21rem', fontFamily: "Roboto", fontSize: "1rem", height: "2.25rem", textAlign: "right" };
    const styleexpired: CSSProperties = { height: "auto", width: '21rem', fontFamily: "Roboto", fontSize: "1rem" };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { "Регистрация овердрафта" }
            </div>
            <div className={styles["overdrafts-list-search"]}>
                <Input
                    style={stylesearch}
                    prefix={<SearchOutlined style={{ fontSize: "1.25rem", paddingRight: "0.5rem"}}/>}
                    placeholder="Введите цифры для поиска по номеру счёта или буквы для поиска организации"
                    onChange={onSearch}
                    value={state.search}
                />
            </div>
            <ul className={styles["overdrafts-list"]}>
            {
                mock
                    .filter(item => !item.external)
                    .filter(item => (state.search.length > 3 && (item.account.includes(state.search) || item.organization.toUpperCase().includes(state.search.toUpperCase()))))
                    .sort((a, b) => (a.organization < b.organization)? -1: 1)
                    .map(item =>
                        <li
                            className={[styles["overdrafts-item"], state.accountid === item.id? styles["overdrafts-item-current"]: ""].join(" ")}
                            key={item.id}
                            value={item.id}
                            onClick={() => onAccount(item.id)}
                        >
                            <div>
                                {item.id}
                            </div>
                            <div>
                                {item.account}
                            </div>
                            <div>
                                {item.organization}
                            </div>
                        </li>)
            }
            </ul>
            <div className={styles["overdrafts-limit"]}>
                <Input style={stylelimit} placeholder="Введите лимит овердрафта" onChange={onLimit} value={state.limit}/>
            </div>
            <div className={styles["overdrafts-expired"]}>
                <DatePicker size={"large"} style={styleexpired} placeholder="Введите дату окончания овердрафта" onChange={onExpired} value={state.expired}/>
            </div>
        </div>
    );
};
