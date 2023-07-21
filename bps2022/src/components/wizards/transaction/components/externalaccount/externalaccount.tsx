import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { WizardControlProps, WizardContextProps, AccountOwner, WizardStageCharges } from '../../../../../domain/transactions/types';

import styles from './externalaccount.module.css';
import { mock_owners, mock_accounts } from './mock';
import { Settings } from '../../../../../domain/settings/settings';

export type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    balance: "WITHDRAWAL" | "ACCRUAL",
    position: "PRIMARY" | "SECONDARY",
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
    error: boolean,
};
const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist && (state.clientid !== null) && (state.accountid !== null)));
}
const getownerid = (owner: AccountOwner, getParam: (param: string) => string | number | boolean | null): number | null => {
    switch(owner) {
        case "REQUIREDANY":
            return null;
        case "ORIGINNOTSAME":
            return (getParam("originownerid") as number);
        case "ORIGINSAME":
            return (getParam("originownerid") as number);
        case "TARGETNOTSAME":
            return (getParam("targetownerid") as number);
        case "TARGETSAME":
            return (getParam("targetownerid") as number);
        }
        return null;
}
export const ExternalAccount: FC<Props & WizardControlProps & WizardContextProps> = ({ subtype, balance, suspense, charge, savedstate, owner, onReady, onDirty, onNexty, getParam, setParam }: (Props & WizardControlProps & WizardContextProps)) => {
    const [state, setState] = useState<State>(
        (savedstate as State | null) === null?
        {
            type: "EXTERNALACCOUNT",
            clientid: getownerid(owner, getParam),
            accountid: null,
            notinlist: false,
            search: "",
            error: false,
        }
        : { ...(savedstate as State), clientid: getownerid(owner, getParam) }
    );
    const clicks = useRef(1);

    const ownerfilter = (ownerid: number | null, getParam: (param: string) => string | number | boolean | null) => {
        switch(owner) {
            case "REQUIREDANY":
                return ownerid !== null;
            case "ORIGINNOTSAME":
                return (getParam("originownerid") !== ownerid && ownerid !== null);
            case "ORIGINSAME":
                return (getParam("originownerid") === ownerid);
            case "TARGETNOTSAME":
                return (getParam("targetownerid") !== ownerid && ownerid !== null);
            case "TARGETSAME":
                return (getParam("targetownerid") === ownerid);
            }
        setState(state => ({ ...state, error: true }))
        return false;
    };
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
        setParam(charge, true);
        validate(state)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                {`${balance === "ACCRUAL"? "Приём:": (balance === "WITHDRAWAL"? "Отправка:": "")} ${subtype === "INTERNAL"? "Внешние счета организации": "Внешние счета клиентов"}`}
            </div>
            {
                state.clientid === null
                    ?
                    <>
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
                        <ul className={styles["owners-list"]}>
                            {
                                mock_owners
                                    .filter(item => ownerfilter(item.id, getParam))
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
                        </ul>
                    </>
                    :
                    <div className={styles["owner"]}>
                        {`Развивающий: ${state.clientid}`}
                    </div>
            }
            <ul className={styles["accounts-list"]}>
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
