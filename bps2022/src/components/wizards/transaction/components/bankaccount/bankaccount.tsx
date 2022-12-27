import React, { FC, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import { TransactionAccountsInfoHolder, TransactionAccountsInfoSubType } from '../../../../../domain/automaton/automaton';
import styles from './bankaccount.module.css';
import { mock } from './mock';

type Props = {
    holder: TransactionAccountsInfoHolder,
    subtype: TransactionAccountsInfoSubType,
    direction: boolean,
    onAccount: (id: number) => void,
};
export const BankAccount: FC<Props> = ({ holder, direction, onAccount }: Props) => {
    const [currency, setCurrency] = useState(-1);
    const onCurrency = (id: number) => {
        setCurrency(id);
        onAccount(id);
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        onAccount((event.target.checked)? 0: currency);
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (direction? "Отправка: ": "Приём: ") + (holder === "N"? "Расчётные счета внешние": "Расчётные счета организации")}
            </div>
            <div className={styles.search}>
                <input type="text" placeholder='Поиск'></input>
                <div><SearchOutlined/></div>
            </div>
            <ul className={styles["accounts-list"]}>
                {
                    mock
                        .filter(item => (holder === "N" && item.external === true) || (holder === "Y" && item.external === false))
                        .sort((a, b) => (a.organization < b.organization)? -1: 1)
                        .map(item =>
                            <li className={[styles["accounts-item"], currency === item.id? styles["accounts-item-current"]: ""].join(" ")} key={item.id} value={item.account} onClick={() => onCurrency(item.id)}>
                                <div>
                                    {item.account}
                                </div>
                                <div>
                                    {item.organization}
                                </div>
                            </li>)
                }
            </ul>
            <div className={styles["accounts-not-in-list"]}>
                <input type="checkbox" onChange={onChangeInList}></input>
                <div>Счёт в списке отсутствует</div>
            </div>
        </div>
    );
}
