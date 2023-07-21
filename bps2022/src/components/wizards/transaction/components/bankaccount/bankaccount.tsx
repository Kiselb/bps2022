import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Settings } from '../../../../../domain/settings/settings';
import { WizardControlProps, WizardContextProps, AccountOwner, } from '../../../../../domain/transactions/types';

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
    ownerid: number | null,
    accountid: number | null,
    notinlist: boolean,
    search: string,
    error: boolean,
};
const validate = (state: State, subtype: "INTERNAL" | "EXTERNAL", balance: "WITHDRAWAL" | "ACCRUAL", owner: AccountOwner, getParam: (param: string) => string | number | boolean | null): boolean => {
    const ownerid = (balance === "ACCRUAL"? getParam("originownerid"): null) as number | null;
    console.log(state);
    return (
        state.notinlist
        || (subtype === "INTERNAL" && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && balance === "WITHDRAWAL" && owner === "NOTREQUIRED" && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && balance === "WITHDRAWAL" && owner === "REQUIREDANY" && state.ownerid !== null && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && balance === "WITHDRAWAL" && owner === "ORIGINNOTSAME" && state.ownerid !== ownerid && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && balance === "WITHDRAWAL" && owner === "ORIGINSAME" && state.ownerid === ownerid && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && balance === "ACCRUAL" && owner === "NOTREQUIRED" && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && balance === "ACCRUAL" && owner === "REQUIREDANY" && state.ownerid !== null && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && balance === "ACCRUAL" && owner === "ORIGINNOTSAME" && state.ownerid !== ownerid && !state.notinlist && state.accountid !== null)
        || (subtype === "EXTERNAL" && balance === "ACCRUAL" && owner === "ORIGINSAME" && state.ownerid === ownerid && !state.notinlist && state.accountid !== null)
    );
};

export const BankAccount: FC<Props & WizardControlProps & WizardContextProps> = ({ subtype, balance, savedstate, suspense, owner, onReady, onDirty, onNexty, getParam, setParam }: (Props & WizardControlProps & WizardContextProps)) => {
    const [state, setState] = useState<State>(
        (savedstate as (State | null)) === null?
        {
            type: "BANKACCOUNT",
            ownerid: null,
            accountid: null,
            notinlist: false,
            search: "",
            error: false,
        }
        : { ...(savedstate as State) }
    );
    const clicks = useRef(1);

    const onCurrency = (accountid: number, ownerid: number | null) => {
        if (!state.notinlist) {
            if (accountid === state.accountid) {
                clicks.current += 1;
            } else {
                clicks.current = 1;
            }
            if (clicks.current > Settings.clicksOnNext) {
                onNexty();
            } else {
                setState(state => ({ ...state, accountid, ownerid }));
            }
        }
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked }));
    };
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, accountid: null, search: event.target.value }));
    };
    const header = (balance: "WITHDRAWAL" | "ACCRUAL", subtype: "INTERNAL" | "EXTERNAL", owner: AccountOwner) => {
        const header = (balance === "ACCRUAL"? "Приём: ": "Отправка: ") + (subtype === "INTERNAL"? "Расчётные счета организации": "Рассчётные счета внешние") + " Клиент: ";        
        const ownerid = getParam(balance === "ACCRUAL"? "originownerid": "targetownerid") as number;
        switch(owner) {
            case "NOTREQUIRED":
                return (header + "не обязателен");
            case "REQUIREDANY":
                return (header + "обязателен");
            case "ORIGINNOTSAME":
                return (header + "обязателен кроме " + ownerid);
            case "ORIGINSAME":
                return (header + "обязателен совпадает с " + ownerid);
        }
        setState(state => ({ ...state, error: true }))
        return "";
    };
    const ownerfilter = (balance: "WITHDRAWAL" | "ACCRUAL", currentownerid: number | null, getParam: (param: string) => string | number | boolean | null) => {
        const ownerid = getParam(balance === "ACCRUAL"? "originownerid": "targetownerid") as number;
        switch(owner) {
            case "NOTREQUIRED":
                return true;
            case "REQUIREDANY":
                return currentownerid !== null;
            case "ORIGINNOTSAME":
                return (ownerid !== currentownerid && currentownerid !== null);
            case "ORIGINSAME":
                return (ownerid === currentownerid);
        }
        setState(state => ({ ...state, error: true }))
        return false;
    };

    useEffect(() => {
        setParam((balance === "ACCRUAL"? "targetownerid": "originownerid"), state.ownerid)
        validate(state, subtype, balance, owner, getParam)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            {
                state.error
                    ? <div>Internal Error</div>
                    : <>
                        <div className={styles.header}>
                            {
                                header(balance, subtype, owner)
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
                                    .filter(item => (ownerfilter(balance, item.clientid, getParam)))
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
                </>
            }
        </div>
    );
};
