import React, { FC, useState, useEffect } from 'react';

import {
    Button,
    Checkbox,
    Input,
    Select,
} from 'antd';

import { mock as currencymock } from '../../../transaction/components/sums/mock';
import { mock as organizationmock } from '../../../organization/mock';

import styles from './registration.module.css';

export type Props = {
    context: "SENDER" | "RECEIVER" | "NONE",
    subtype: "INTERNAL" | "EXTERNAL",
    onReady: (params: Params) => void,
};
export type Params = {
    primaryno: string,
    secondaryno: string,
    bankname: string,
    bik: string,
    city: string,
    currency: string,
    organizationid: number,
    notinlist: boolean,
};

const validate = (params: Params) => {
    return (
        true
        && params.primaryno.length > 0
        && params.secondaryno.length > 0
        && params.bankname.length > 0
        && params.bik.length > 0
        && params.city.length > 0
        && params.currency.length > 0
        && (params.notinlist || (!params.notinlist && params.organizationid > 0))
    );
};

export const Registration: FC<Props> = ({ context, subtype, onReady }) => {
    const [params, setParams] = useState<Params>({
        primaryno: "",
        secondaryno: "",
        bankname: "",
        bik: "",
        city: "",
        currency: "RUB",
        organizationid: 0,
        notinlist: false,
    })
    const [search, setSearch] = useState<string>("");

    const onPrimaryNo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams(params => ({ ...params, primaryno: event.target.value}));
    }
    const onSecondaryNo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams(params => ({ ...params, secondaryno: event.target.value}));
    }
    const onBankName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams(params => ({ ...params, bankname: event.target.value}));
    }
    const onBIK = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams(params => ({ ...params, bik: event.target.value}));
    }
    const onCity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams(params => ({ ...params, city: event.target.value}));
    }
    const onCurrency = (value: string) => {
        setParams(params => ({ ...params, primaryno: value}));
    }
    const onInlist = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams(params => ({ ...params, notinlist: event.target.checked}));
    }
    const onOrganization = (id: number) => {
        setParams(params => ({ ...params, organizationid: id}));
    }
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        validate(params) && onReady(params);
    }, [params])

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (context === "SENDER"? "Отправитель: ": (context === "RECEIVER"? "Получатель: ": "")) + (subtype === "INTERNAL"? "Регистрация расчётного счёта организации": "Регистрация расчётного счёта внешнего")}
            </div>
            <div className={styles["primaryno-label"]}>
                <label>Расчётный счёт:</label>
            </div>
            <div className={styles.primaryno}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onPrimaryNo} defaultValue="" value={params.primaryno}/>
            </div>
            <div className={styles["secondaryno-label"]}>
                <label>Корреспондирующий:</label>
            </div>
            <div className={styles.secondaryno}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onSecondaryNo} defaultValue="" value={params.secondaryno}/>
            </div>
            <div className={styles["bankname-label"]}>
                <label>Название банка:</label>
            </div>
            <div className={styles.bankname}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onBankName} defaultValue="" value={params.bankname}/>
            </div>
            <div className={styles["bik-label"]}>
                <label>БИК:</label>
            </div>
            <div className={styles.bik}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onBIK} defaultValue="" value={params.bik}/>
            </div>
            <div className={styles["city-label"]}>
                <label>Город:</label>
            </div>
            <div className={styles.city}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onCity} defaultValue="" value={params.city}/>
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
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} placeholder="Введите цифры для поиска по посдедним цифрам) по ИНН" onChange={onSearch}/>
            </div>
            <ul className={styles["organizations-list"]}>
            {
                organizationmock
                    .filter(item => (subtype === "EXTERNAL" && item.external === true) || (subtype === "INTERNAL" && item.external === false))
                    .filter(item => (search.length > 0 && search === item.inn.slice(0 - search.length)))
                    .sort((a, b) => (a.organization < b.organization)? -1: 1)
                    .map(item =>
                        <li className={[styles["organizations-item"], params.organizationid === item.id? (params.notinlist? "": styles["organizations-item-current"]): "", params.notinlist? styles["organizations-not-inlist"]: ""].join(" ")} key={item.id} value={item.id} onClick={() => onOrganization(item.id)}>
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
                <input type="checkbox" onChange={onInlist}></input>
                <div>Организация в списке отсутствует</div>
            </div>
        </div>
    );
};
