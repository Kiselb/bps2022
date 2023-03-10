import React, { FC, useState, useEffect, useRef } from 'react';

import { mock } from './mock';
import styles from './lendingaccount.module.css';

export type Props = {
    clientid: number | null,
    direction: -1 | 1,
    primary: boolean,
    regallowed: boolean,
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
    onNext: () => void,
};
export type State = {
    type: "LENDINGACCOUNT",
    accountid: number,
    notinlist: boolean,
};

const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist && state.accountid > 0));
};

export const LendingAccount: FC<Props> = ({ clientid, direction, regallowed, savedstate, onReady, onDirty, onNext }) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "LENDINGACCOUNT",
            accountid: -1,
            notinlist: (clientid === null || clientid <= 0)? true: false,
        }
        : { ...savedstate }
    );
    const clicks = useRef(1);

    const onCurrency = (accountid: number) => {
        if (!state.notinlist) {
            if (accountid === state.accountid) {
                clicks.current += 1;
            } else {
                clicks.current = 1;
            }
            if (clicks.current > 2) {
                clicks.current = 1;
                onNext();
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
                { "Ссудный счёт: " + (direction === 1? "Погашение": "Выдача") }
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
