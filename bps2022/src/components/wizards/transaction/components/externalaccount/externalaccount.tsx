import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { WizardCommonProps, WizardStateProps, AccountOwner, WizardStageCharges } from '../../../../../domain/transactions/types';

import styles from './externalaccount.module.css';
import { mock_owners, mock_accounts } from './mock';
import { Settings } from '../../../../../domain/settings/settings';

export type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    balance: "WITHDRAWAL" | "ACCRUAL" | "NONE",
    position: "PRIMARY" | "SECONDARY" | "NONE",
    suspense: boolean,
    owner: AccountOwner,
    charge: WizardStageCharges,
};

export type State = {
    type: "EXTERNALACCOUNT",
    clientid: number | null,
    accountid: number | null,
    notinlist: boolean,
    search: string,
};
const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist && (state.clientid !== null) && (state.accountid !== null)));
}
export const ExternalAccount: FC<Props & WizardCommonProps & WizardStateProps> = ({ subtype, balance, suspense, savedstate, owner, onReady, onDirty, onNexty, getParam }: (Props & WizardCommonProps & WizardStateProps)) => {
    const [state, setState] = useState<State>(
        (savedstate as State | null) === null?
        {
            type: "EXTERNALACCOUNT",
            clientid: null,
            accountid: null,
            notinlist: false,
            search: "",
        }
        : { ...(savedstate as State) }
    );
    const clientid = ((balance === "WITHDRAWAL"? getParam("ORIGINCLIENTID"): (balance === "ACCRUAL"? getParam("TARGETCLIENTID"): getParam("CLIENTID")))) as number | null;
    const clicks = useRef(1);

    const onCurrencyOwner = (clientid: number) => {
        setState((state) => ({ ...state, clientid }))
    };
    const onCurrencyAccount = (accountid: number) => {
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
        setState(state => ({ ...state, clientid: null, accountid: null, search: event.target.value }));
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                {`${balance === "ACCRUAL"? "Приём:": (balance === "WITHDRAWAL"? "Отправка:": "")} ${subtype === "INTERNAL"? "Внешние счета организации": "Внешние счета клиентов"}`}
            </div>
            {
                clientid === null?
                    <div className={styles.search}>
                        <Input
                            prefix={<SearchOutlined style={{ fontSize: "1.25rem", paddingRight: "0.5rem"}}/>}
                            style={{ fontFamily: 'Roboto', fontSize: "1rem", width: '100%' }}
                            placeholder="Введите текст для выбора развивающего по названию (имени)"
                            allowClear
                            value={state.search}
                            onChange={onChangeSearch}
                        />
                    </div>
                    : null
            }
            {
                clientid === null?
                    <ul className={styles["owners-list"]}>
                        {
                            mock_owners
                                .filter(item => state.search.length > 0 && item.name.toUpperCase().includes(state.search.toUpperCase()))
                                .sort((a, b) => (a.name < b.name)? -1: 1)
                                .map(item =>
                                    <li
                                        className={[styles["owners-item"], state.clientid === item.id? styles["owners-item-current"]: ""].join(" ")}
                                        key={item.id}
                                        value={item.name}
                                        onClick={() => onCurrencyOwner(item.id)}
                                    >
                                        <div>
                                            {item.name}
                                        </div>
                                    </li>)
                        }
                    </ul>:
                    <div className={styles["owner"]}>
                        {`Развивающий: ${clientid}`}
                    </div>
            }
            <ul className={[styles["accounts-list"], clientid === null? styles["accounts-list"]: ""].join(" ")}>
                {
                    mock_accounts
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .filter(item => state.clientid === item.owner_id)
                        .map(item =>
                            <li className={[styles["accounts-item"], state.accountid === item.id? styles["accounts-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onCurrencyAccount(item.id)}>
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
