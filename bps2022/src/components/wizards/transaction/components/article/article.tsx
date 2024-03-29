import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Settings } from '../../../../../domain/settings/settings';
import { WizardControlProps, WizardContextProps, } from '../../../../../domain/transactions/types';

import styles from './article.module.css';
import { mock } from './mock';

export type Props = {
    subtype: "INCOME" | "EXPENSES",
    suspense: boolean,
};

export type State = {
    type: "ARTICLE",
    articleid: number,
    notinlist: boolean,
    search: string,
};

const validate = (state: State) => {
    return (
        true
        && (state.notinlist || state.articleid > 0)
    );
};

export const Article: FC<Props & WizardControlProps & WizardContextProps> = ({ subtype, savedstate, suspense, onReady, onDirty, onNexty }: (Props & WizardControlProps & WizardContextProps)) => {
    const [state, setState] = useState<State>(
        (savedstate as State | null) === null?
        {
            type: "ARTICLE",
            articleid: -1,
            notinlist: false,
            search: "",
        }
        : { ...(savedstate as State) }
    );
    const clicks = useRef(1);

    const onCurrency = (articleid: number) => {
        if (!state.notinlist) {
            if (articleid === state.articleid) {
                clicks.current += 1;
            } else {
                clicks.current = 1;
            }
            if (clicks.current > Settings.clicksOnNext) {
                clicks.current = 1;
                onNexty();
                return;
            }
            setState(state => ({ ...state, articleid }));
        }
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked }));
    };
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, accountid: 0, search: event.target.value }));
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (subtype === "EXPENSES"? "Расходы: ": "Доходы: ") }
            </div>
            <div className={styles.search}>
                <Input
                    prefix={<SearchOutlined style={{ fontSize: "1.25rem", paddingRight: "0.5rem"}}/>}
                    style={{ fontFamily: 'Roboto', fontSize: "1rem", width: '100%' }}
                    placeholder="Введите текст для выбора счёта по номеру счёта или названию организации"
                    allowClear
                    value={state.search}
                    onChange={onChangeSearch}
                />
            </div>
            <ul className={styles["articles-list"]}>
                {
                    mock
                        .filter(item => (subtype === "INCOME" && item.type === "INCOME") || (subtype === "EXPENSES" && item.type === "EXPENSES"))
                        .filter(item => state.search.length === 0 || item.article.toUpperCase().includes(state.search.toUpperCase()))
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
                suspense?
                    <div className={styles["articles-not-in-list"]}>
                        <input type="checkbox" checked={state.notinlist} onChange={onChangeInList}></input>
                        <div>Статья в списке отсутствует</div>
                    </div>
                    : null
            }
        </div>
    );
};
