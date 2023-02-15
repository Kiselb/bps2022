import React, { FC, useState, useEffect } from 'react';

import { TransactionTypesIdentity } from '../../../../../domain/automaton/automaton';

import styles from './confirmation.module.css';

type Props = {
    transaction: TransactionTypesIdentity | null,
    onReady: (state: State, registration: boolean) => void,
};
export type State = {
    type: "CONFIRMATION",
    confirmed: boolean,
};

export const Confirmation: FC<Props> = ({ onReady }) => {
    const [state, setState] = useState<State>({
        type: "CONFIRMATION",
        confirmed: false,
    });
    const onUserConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({...state, confirmed: event.target.checked }));
    };

    useEffect(() => {
        onReady({ ...state }, false);
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                Подтверждение параметров транзакции
            </div>
            <div className={styles.parameters}>
            </div>
            <div className={styles.confirmation}>
                <input type="checkbox" onChange={onUserConfirm}></input>
                <div>Корректность параметров транзакции подтверждаю</div>
            </div>
        </div>
    );
}
