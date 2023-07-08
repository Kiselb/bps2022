import React, { FC, useState, useEffect } from 'react';

import { WizardCommonProps, WizardStateProps, } from '../../../../../domain/transactions/types';
import { TransactionTypesIdentity } from '../../../../../domain/transactions/automaton';

import styles from './confirmation.module.css';

export type Props = {
    transaction: TransactionTypesIdentity | null,
    autocomplete: boolean,
};

export type State = {
    type: "CONFIRMATION",
    confirmed: boolean,
    autocomplete: boolean,
};

export const Confirmation: FC<Props & WizardCommonProps & WizardStateProps> = ({ autocomplete, onReady }: (Props & WizardCommonProps & WizardStateProps)) => {
    const [state, setState] = useState<State>({
        type: "CONFIRMATION",
        confirmed: false,
        autocomplete
    });
    const onUserConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({...state, confirmed: event.target.checked }));
    };
    const onAutocomplete = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({...state, autocomplete: event.target.checked }));
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
                <input type="checkbox" onChange={onUserConfirm} checked={state.confirmed}></input>
                <div>Корректность транзакции подтверждаю</div>
            </div>
            {
                autocomplete?
                    <div className={styles.autocomplete}>
                        <input type="checkbox" onChange={onAutocomplete} checked={state.autocomplete}></input>
                        <div>Автоматическое выполнение</div>
                    </div>
                    : null
            }
        </div>
    );
}
