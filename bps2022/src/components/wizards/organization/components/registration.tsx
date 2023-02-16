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
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
};
export type State = {
    type: "REGORGANIZATION",
    name: string,
    inn: string,
    kpp: string,
    ogrn: string,
    clientid: number,
};

const validate = (state: State, subtype: "INTERNAL" | "EXTERNAL") => {
    return (
        true
        && state.name.length > 0
        && state.inn.length > 0
        && state.kpp.length > 0
        && state.ogrn.length > 0
        && (subtype === "INTERNAL" && state.clientid === 0 || subtype === "EXTERNAL" && state.clientid > 0)
    );
};

export const Registration: FC<Props> = ({ context, subtype, savedstate, onReady }) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "REGORGANIZATION",
            name: "",
            inn: "",
            kpp: "",
            ogrn: "",
            clientid: 0,
        }
        : { ...savedstate }
    );
    const [search, setSearch] = useState<string>("");

    const onName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, name: event.target.value }));
    };
    const onINN = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, inn: event.target.value }));
    };
    const onKPP = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, kpp: event.target.value }));
    };
    const onOGRN = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, ogrn: event.target.value }));
    };
    const onClient = (clientid: number) => {
        setState(state => ({ ...state, clientid }));
    };
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        validate(state, subtype) && onReady({ ...state }, false);
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (context === "SENDER"? "Отправитель: ": (context === "RECEIVER"? "Получатель: ": "")) + (subtype === "INTERNAL"? "Регистрация внутренней организации": "Регистрация внешней организации")}
            </div>
            <div className={styles["name-label"]}>
                <label>Название:</label>
            </div>
            <div className={styles.name}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onName} defaultValue="" value={state.name}/>
            </div>
            <div className={styles["inn-label"]}>
                <label>ИНН:</label>
            </div>
            <div className={styles.inn}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onINN} defaultValue="" value={state.inn}/>
            </div>
            <div className={styles["kpp-label"]}>
                <label>КПП:</label>
            </div>
            <div className={styles.kpp}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onKPP} defaultValue="" value={state.kpp}/>
            </div>
            <div className={styles["ogrn-label"]}>
                <label>ОГРН:</label>
            </div>
            <div className={styles.ogrn}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onOGRN} defaultValue="" value={state.ogrn}/>
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
                                        <li className={[styles["clients-item"], state.clientid === item.id? styles["clients-item-current"]: ""].join(" ")} key={item.id} value={item.id} onClick={() => onClient(item.id)}>
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
