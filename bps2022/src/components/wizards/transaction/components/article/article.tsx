import React, { FC, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import styles from './article.module.css';
import { mock } from './mock';

type Props = {
    subtype: "INCOME" | "EXPENSES",
    onAccount: (id: number) => void,
};
export const Article: FC<Props> = ({ subtype, onAccount }: Props) => {
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
                { (subtype === "EXPENSES"? "Расходы: ": "Доходы: ") }
            </div>
            <div className={styles.search}>
                <input type="text" placeholder='Поиск'></input>
                <div><SearchOutlined/></div>
            </div>
            <ul className={styles["articles-list"]}>
                {
                    mock
                        .filter(item => (subtype === "INCOME" && item.type === "INCOME") || (subtype === "EXPENSES" && item.type === "EXPENSES"))
                        .sort((a, b) => (a.article < b.article)? -1: 1)
                        .map(item =>
                            <li className={[styles["articles-item"], currency === item.id? styles["articles-item-current"]: ""].join(" ")} key={item.id} value={item.id} onClick={() => onCurrency(item.id)}>
                                <div>
                                    {item.article}
                                </div>
                            </li>)
                }
            </ul>
            <div className={styles["articles-not-in-list"]}>
                <input type="checkbox" onChange={onChangeInList}></input>
                <div>Статья в списке отсутствует</div>
            </div>
        </div>
    );
};
