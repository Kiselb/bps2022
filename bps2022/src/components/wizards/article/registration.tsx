import React, { FC, useState, useEffect } from 'react';

import { Input } from 'antd';

import { WizardCommonProps, WizardStateProps, AccountOwner, } from '../../../domain/transactions/types';

import styles from './registration.module.css';

export type Props = {
    subtype: "INCOME" | "EXPENSES",
};

export type State = {
    type: "REGARTICLE",
    name: string,
};

const validate = (state: State, subtype: "INCOME" | "EXPENSES") => {
    if (subtype === "INCOME") return ( true && state.name.length > 0 );
    if (subtype === "EXPENSES") return ( true && state.name.length > 0 );
};

export const Registration: FC<Props & WizardCommonProps & WizardStateProps> = ({ subtype, savedstate, onReady, onDirty }: (Props & WizardCommonProps & WizardStateProps)) => {
    const [state, setStae] = useState<State>(
        (savedstate as State | null) === null?
        {
            type: "REGARTICLE",
            name: "",
        }
        : { ...(savedstate as State) }
    );

    const onName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStae(state => ({ ...state, name: event.target.value }));
    };

    useEffect(() => {
        validate(state, subtype)? onReady({ ...state }, false): onDirty({ ...state });
    }, [state])

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (subtype === "INCOME"? "Регистрация статьи доходов": "Регистрация статьи расходов")}
            </div>
            <div className={styles["name-label"]}>
                <label>Название:</label>
            </div>
            <div className={styles.name}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onName} defaultValue="" value={state.name}/>
            </div>
        </div>);
}
