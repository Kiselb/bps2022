import React, { FC, useState } from 'react';

import styles from './narrowing.module.css';
import { TransactionTypesIdentity, TransactionGroupSelector, automaton } from '../../../../../domain/automaton/automaton';

type Props = {
    origin: TransactionGroupSelector | null,
    target: TransactionGroupSelector | null,
    transaction: TransactionTypesIdentity | null,
    onTransaction: (id: TransactionTypesIdentity) => void,
};
export const Narrowing: FC<Props> = ({ origin, target, transaction, onTransaction }: Props) => {
    const [currency, setCurrency] = useState<TransactionTypesIdentity | null>(transaction);
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
                        .map(item => item[1]? automaton.filter(base => base[0] === item[1])[0]: item)
                        .map((item, index) =>
                            <div className={styles["transactions-item-box"]} key={item[0]}>
                                <div className={[styles["transaction-item-marker"], currency === item[0]? styles["transactions-item-current"]: ""].join(' ')} onClick={() => onCurrency(item[0])}>
                                    <div>{index + 1}</div>
                                </div>
                                <li className={[styles["transactions-item"], currency === item[0]? styles["transactions-item-current"]: ""].join(" ")} value={item[4]} onClick={() => onCurrency(item[0])}>
                                    <div>
                                        {item[4]}
                                    </div>
                                </li>
                            </div>)
                }
            </ul>
        </div>
    );
};
