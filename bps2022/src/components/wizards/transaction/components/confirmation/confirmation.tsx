import React, { FC } from 'react';

import { TransactionTypesIdentity } from '../../../../../domain/automaton/automaton';

import styles from './confirmation.module.css';

type Props = {
    transaction: TransactionTypesIdentity | null,
    onConfirm: (confirmed: boolean) => void,
};

export const Confirmation: FC<Props> = ({ onConfirm }) => {
    const onUserConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        onConfirm((event.target.checked));
    }
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
