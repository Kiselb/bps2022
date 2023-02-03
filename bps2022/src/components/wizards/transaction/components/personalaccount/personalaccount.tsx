import React, { FC, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import styles from './personalaccount.module.css';
import { mock } from './mock';

type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    direction: -1 | 1,
    primary: boolean,
    onAccount: (id: number) => void,
};
export const PersonalAccount: FC<Props> = ({ subtype, direction, onAccount }: Props) => {
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
                { (direction === 1? "Начисление: ": "Списание: ") + (subtype === "INTERNAL"? "Лицевые счета организации": "Лицевые счета клиентов") }
            </div>
            <div className={styles.search}>
                <input type="text" placeholder='Поиск'></input>
                <div><SearchOutlined/></div>
            </div>
            <ul className={styles["accounts-list"]}>
                {
                    mock
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .map(item =>
                            <li className={[styles["accounts-item"], currency === item.id? styles["accounts-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onCurrency(item.id)}>
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
