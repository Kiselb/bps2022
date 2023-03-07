import React, { FC, useState, useEffect } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import styles from './article.module.css';
import { mock } from './mock';

type Props = {
    subtype: "INCOME" | "EXPENSES",
    savedstate: State | null,
    regallowed: boolean,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
};
export type State = {
    type: "ARTICLE",
    articleid: number,
    notinlist: boolean,
};

const validate = (state: State) => {
    return (
        true
        && (state.notinlist || state.articleid > 0)
    );
};

export const Article: FC<Props> = ({ subtype, savedstate, regallowed, onReady, onDirty }: Props) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "ARTICLE",
            articleid: -1,
            notinlist: false,
        }
        : { ...savedstate }
    );

    const onCurrency = (articleid: number) => {
        setState(state => ({ ...state, articleid }));
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked }));
    }

    useEffect(() => {
        validate(state)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

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
                            <li className={[styles["articles-item"], state.articleid === item.id? styles["articles-item-current"]: ""].join(" ")} key={item.id} value={item.id} onClick={() => onCurrency(item.id)}>
                                <div>
                                    {item.article}
                                </div>
                            </li>)
                }
            </ul>
            {
                regallowed?
                    <div className={styles["articles-not-in-list"]}>
                        <input type="checkbox" checked={state.notinlist} onChange={onChangeInList}></input>
                        <div>Статья в списке отсутствует</div>
                    </div>
                    : null
            }
        </div>
    );
};
