import React, { FC, useState, useEffect } from 'react';

import {
    Button,
    Checkbox,
    Input,
    Select,
} from 'antd';

import { mock } from '../../clients/mock';
import styles from './registration.module.css';

export type Props = {
    context: "SENDER" | "RECEIVER" | "NONE",
    subtype: "INTERNAL" | "EXTERNAL",
    onReady: (params: Params) => void,
};
export type Params = {
    name: string,
    inn: string,
    kpp: string,
    clientid: number,
};

const validate = (params: Params, subtype: "INTERNAL" | "EXTERNAL") => {
    return (
        true
        && params.name.length > 0
        && params.inn.length > 0
        && params.kpp.length > 0
        && (subtype === "INTERNAL" && params.clientid === 0 || subtype === "EXTERNAL" && params.clientid > 0)
    );
};

export const Registration: FC<Props> = ({ context, subtype, onReady }) => {
    const [params, setParams] = useState<Params>({
        name: "",
        inn: "",
        kpp: "",
        clientid: 0,
    });
    const [search, setSearch] = useState<string>("");

    const onName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams(params => ({ ...params, name: event.target.value }));
    }
    const onINN = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams(params => ({ ...params, inn: event.target.value }));
    }
    const onKPP = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams(params => ({ ...params, kpp: event.target.value }));
    }
    const onClient = (clientid: number) => {
        setParams(params => ({ ...params, clientid }))
    }
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        validate(params, subtype) && onReady(params)
    }, [params])

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (context === "SENDER"? "Отправитель: ": (context === "RECEIVER"? "Получатель: ": "")) + (subtype === "INTERNAL"? "Регистрация внутренней организации": "Регистрация внешней организации")}
            </div>
            <div className={styles["name-label"]}>
                <label>Название:</label>
            </div>
            <div className={styles.name}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onName} defaultValue="" value={params.name}/>
            </div>
            <div className={styles["inn-label"]}>
                <label>ИНН:</label>
            </div>
            <div className={styles.inn}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onINN} defaultValue="" value={params.inn}/>
            </div>
            <div className={styles["kpp-label"]}>
                <label>КПП:</label>
            </div>
            <div className={styles.kpp}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onKPP} defaultValue="" value={params.kpp}/>
            </div>
            {
                subtype === "EXTERNAL"?
                    <>
                        <div className={styles["clients-list-label"]}>
                            <label>Клиент:</label>
                        </div>
                        <div className={styles["clients-list-search"]}>
                            <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} placeholder="Введите подстроку поиска" onChange={onSearch}/>
                        </div>
                        <ul className={styles["clients-list"]}>
                            {
                                mock
                                    .filter(item => search.length > 0 && item.name.toUpperCase().includes(search.toUpperCase()))
                                    .sort((a, b) => (a.name < b.name)? -1: 1)
                                    .map(item =>
                                        <li className={[styles["clients-item"], params.clientid === item.id? styles["clients-item-current"]: ""].join(" ")} key={item.id} value={item.id} onClick={() => onClient(item.id)}>
                                            <div style={{ width: '13rem' }}>
                                                {item.name}
                                            </div>
                                            <div>
                                                {item.groups.reduce((accumulator, item) => accumulator + ', ' + item, '').slice(1)}
                                            </div>
                                        </li>)
                            }
                        </ul>
                    </>
                : null
            }
        </div>
    );
}
