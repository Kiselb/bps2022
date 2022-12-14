import React, { FC, useState } from 'react';

import styles from './narrowing.module.css';
import { TransactionTypesIdentity, TransactionAccountsTypes, automaton } from '../../../../../domain/automaton/automaton';

type Props = {
    origin: TransactionAccountsTypes,
    target: TransactionAccountsTypes,
    onTransaction: (id: TransactionTypesIdentity | null) => void,
};
export const Narrowing: FC<Props> = ({ origin, target, onTransaction }: Props) => {
    const [currency, setCurrency] = useState<TransactionTypesIdentity | null>(null);
    const onCurrency = (id: TransactionTypesIdentity) => {
        setCurrency(id);
        onTransaction(id);
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                Выбор транзакции
            </div>
            <ul className={styles["transactions-list"]}>
                {
                    automaton
                        .filter(item => item[2][0] === origin && item[2][1] === target)
                        .map(item =>
                            <div className={styles["transactions-item-box"]} key={item[0]}>
                                <div className={[styles["transaction-item-marker"], currency === item[0]? styles["transactions-item-current"]: ""].join(' ')} onClick={() => onCurrency(item[0])}>
                                </div>
                                <li className={[styles["transactions-item"], currency === item[0]? styles["transactions-item-current"]: ""].join(" ")} value={item[6]} onClick={() => onCurrency(item[0])}>
                                    <div>
                                        {item[6]}
                                    </div>
                                </li>
                            </div>)
                }
            </ul>
        </div>
    );
}
