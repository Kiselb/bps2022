import React, { FC, useState, useEffect, CSSProperties } from 'react';

import { Input, Select } from 'antd';

import { mock as currencymock } from '../../../transaction/components/sums/mock';
import { mock as organizationsmock } from '../../../organization/mock';

import styles from './registration.module.css';

export type Props = {
    context: "SENDER" | "RECEIVER" | "NONE",
    subtype: "INTERNAL" | "EXTERNAL",
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
};
export type State = {
    type: "REGBANKACCOUNT",
    primaryno: string,
    secondaryno: string,
    bankname: string,
    bik: string,
    city: string,
    currency: string,
    organizationid: number,
    notinlist: boolean,
    search: string,
};

const validate = (state: State) => {
    return (
        true
        && state.primaryno.length > 0
        && state.secondaryno.length > 0
        && state.bankname.length > 0
        && state.bik.length > 0
        && state.city.length > 0
        && state.currency.length > 0
        && (state.notinlist || (!state.notinlist && state.organizationid > 0))
    );
};

export const Registration: FC<Props> = ({ context, subtype, savedstate, onReady, onDirty }) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "REGBANKACCOUNT",
            primaryno: "",
            secondaryno: "",
            bankname: "",
            bik: "",
            city: "",
            currency: "RUB",
            organizationid: 0,
            notinlist: false,
            search: "",
        }
        : { ...savedstate }
    );
    const onPrimaryNo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, primaryno: event.target.value}));
    }
    const onSecondaryNo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, secondaryno: event.target.value}));
    }
    const onBankName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, bankname: event.target.value}));
    }
    const onBIK = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, bik: event.target.value}));
    }
    const onCity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, city: event.target.value}));
    }
    const onCurrency = (value: string) => {
        setState(state => ({ ...state, primaryno: value}));
    }
    const onInlist = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked}));
    }
    const onOrganization = (id: number) => {
        setState(state => ({ ...state, organizationid: id}));
    }
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, search: event.target.value }));
    }

    useEffect(() => {
        validate(state)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    const styleinput: CSSProperties = { width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (context === "SENDER"? "Отправитель: ": (context === "RECEIVER"? "Получатель: ": "")) + (subtype === "INTERNAL"? "Регистрация расчётного счёта организации": "Регистрация расчётного счёта внешнего")}
            </div>
            <div className={styles["primaryno-label"]}>
                <label>Расчётный счёт:</label>
            </div>
            <div className={styles.primaryno}>
                <Input style={styleinput} onChange={onPrimaryNo} defaultValue="" value={state.primaryno}/>
            </div>
            <div className={styles["secondaryno-label"]}>
                <label>Корреспондирующий:</label>
            </div>
            <div className={styles.secondaryno}>
                <Input style={styleinput} onChange={onSecondaryNo} defaultValue="" value={state.secondaryno}/>
            </div>
            <div className={styles["bankname-label"]}>
                <label>Название банка:</label>
            </div>
            <div className={styles.bankname}>
                <Input style={styleinput} onChange={onBankName} defaultValue="" value={state.bankname}/>
            </div>
            <div className={styles["bik-label"]}>
                <label>БИК:</label>
            </div>
            <div className={styles.bik}>
                <Input style={styleinput} onChange={onBIK} defaultValue="" value={state.bik}/>
            </div>
            <div className={styles["city-label"]}>
                <label>Город:</label>
            </div>
            <div className={styles.city}>
                <Input style={styleinput} onChange={onCity} defaultValue="" value={state.city}/>
            </div>
            <div className={styles["currency-label"]}>
                <label>Валюта:</label>
            </div>
            <div className={styles.currency}>
                <Select
                    style={{ width: '100%', fontFamily: "'Roboto'", height: "2.5rem", padding: '0' }}
                    size="large"
                    bordered={true}
                    defaultValue="RUB"
                    onChange={onCurrency}
                    options={currencymock.map(item => ({ value: item, label: item}))}
                />
            </div>
            <div className={styles["organizations-list-label"]}>
                <label>Организация:</label>
            </div>
            <div className={styles["organizations-list-search"]}>
                <Input style={styleinput} placeholder="Введите цифры для поиска по ИНН" onChange={onSearch} value={state.search}/>
            </div>
            <ul className={styles["organizations-list"]}>
            {
                organizationsmock
                    .filter(item => (subtype === "EXTERNAL" && item.external === true) || (subtype === "INTERNAL" && item.external === false))
                    .filter(item => (state.search.length > 3 && item.inn.includes(state.search)))
                    .sort((a, b) => (a.organization < b.organization)? -1: 1)
                    .map(item =>
                        <li className={[styles["organizations-item"], state.organizationid === item.id? (state.notinlist? "": styles["organizations-item-current"]): "", state.notinlist? styles["organizations-disabled"]: ""].join(" ")} key={item.id} value={item.id} onClick={() => onOrganization(item.id)}>
                            <div>
                                {item.inn}
                            </div>
                            <div>
                                {item.organization}
                            </div>
                        </li>)
            }
            </ul>
            <div className={styles["organizations-not-in-list"]}>
                <input type="checkbox" onChange={onInlist} checked={state.notinlist}/>
                <div>Организация в списке отсутствует</div>
            </div>
        </div>
    );
};
