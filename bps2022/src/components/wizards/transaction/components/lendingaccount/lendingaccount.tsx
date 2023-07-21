import React, { FC, useState, useEffect, useRef } from 'react';

import { Settings } from '../../../../../domain/settings/settings';
import { WizardControlProps, WizardContextProps, AccountOwner } from '../../../../../domain/transactions/types';

import styles from './lendingaccount.module.css';
import { mock } from './mock';

export type Props = {
    balance: "WITHDRAWAL" | "ACCRUAL",
    position: "PRIMARY" | "SECONDARY",
    suspense: boolean,
    owner: AccountOwner
};

export type State = {
    type: "LENDINGACCOUNT",
    accountid: number,
    notinlist: boolean,
};

const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist && state.accountid > 0));
};

export const LendingAccount: FC<Props & WizardControlProps & WizardContextProps> = ({ owner, balance, suspense, savedstate, onReady, onDirty, onNexty }: (Props & WizardControlProps & WizardContextProps)) => {
    const clientid: number | null = null;
    const [state, setState] = useState<State>(
        (savedstate as State | null) === null?
        {
            type: "LENDINGACCOUNT",
            accountid: -1,
            notinlist: (clientid === null || clientid <= 0)? true: false,
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
        if (mock.filter(item => item.clientid === clientid).length > 0) {
            setState(state => ({ ...state, notinlist: event.target.checked }));
        }
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { "Ссудный счёт: " + (balance === "ACCRUAL"? "Погашение": "Выдача") }
            </div>
            <ul className={styles["accounts-list"]}>
                {
                    mock
                        .filter(item => item.clientid === clientid)
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
