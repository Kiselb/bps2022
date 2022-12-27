import React, { FC, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import { TransactionAccountsInfoHolder, TransactionAccountsInfoSubType } from '../../../../../domain/automaton/automaton';
import styles from './externalaccount.module.css';
import { mock_owners, mock_accounts } from './mock';

type Props = {
    holder: TransactionAccountsInfoHolder,
    subtype: TransactionAccountsInfoSubType,
    direction: boolean,
    onAccount: (id: number) => void,
};
export const ExternalAccount: FC<Props> = ({ holder, direction, onAccount }: Props) => {
    const [currencyOwner, setCurrencyOwner] = useState(-1);
    const [currencyAccount, setCurrencyAccount] = useState(-1);
    const onCurrencyOwner = (id: number) => {
        setCurrencyOwner(id);
        setCurrencyAccount(-1);
        onAccount(0);
    };
    const onCurrencyAccount = (id: number) => {
        setCurrencyAccount(id);
        onAccount(id);
    }
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        onAccount((event.target.checked)? 0: currencyAccount);
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (direction? "Отправка: ": "Приём: ") + (holder === "N"? "Внешние счета клиентов": "Внешние счета организации") }
            </div>
            <div className={styles.search}>
                <input type="text" placeholder='Поиск'></input>
                <div><SearchOutlined/></div>
            </div>
            <ul className={styles["owners-list"]}>
                {
                    mock_owners
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .map(item =>
                            <li className={[styles["owners-item"], currencyOwner === item.id? styles["owners-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onCurrencyOwner(item.id)}>
                                <div>
                                    {item.name}
                                </div>
                            </li>)
                }
            </ul>
            <ul className={styles["accounts-list"]}>
                {
                    mock_accounts
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .filter(item => item.owner_id === currencyOwner)
                        .map(item =>
                            <li className={[styles["accounts-item"], currencyAccount === item.id? styles["accounts-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onCurrencyAccount(item.id)}>
                                <div>
                                    {item.name}
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
