import React, { FC, useState, useEffect, CSSProperties } from 'react';

import { Input } from 'antd';

import { mock_clients } from '../../clients/mock';
import styles from './registration.module.css';

export type Props = {
    context: "SENDER" | "RECEIVER" | "NONE",
    subtype: "INTERNAL" | "EXTERNAL",
    client: boolean,
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
};
export type State = {
    type: "REGORGANIZATION",
    name: string,
    inn: string,
    kpp: string,
    ogrn: string,
    notbelongs: boolean,
    clientid: number,
    search: string,
};

const validate = (state: State, client: boolean, subtype: "INTERNAL" | "EXTERNAL") => {
    console.log(`${subtype} ${client} ${state.notbelongs} ${state.clientid}`);
    return (
        true
        && state.name.length > 0
        && state.inn.length > 0
        && state.kpp.length > 0
        && state.ogrn.length > 0
        && (
            subtype === "INTERNAL" && state.clientid === 0
            || subtype === "EXTERNAL" && client && state.clientid > 0
            || subtype === "EXTERNAL" && !client && !state.notbelongs && state.clientid > 0
            || subtype === "EXTERNAL" && !client && state.notbelongs && state.clientid === 0
        )
    );
};

export const Registration: FC<Props> = ({ context, subtype, client, savedstate, onReady, onDirty }) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "REGORGANIZATION",
            name: "",
            inn: "",
            kpp: "",
            ogrn: "",
            notbelongs: false,
            clientid: 0,
            search: "",
        }
        : { ...savedstate }
    );
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
        setState(state => ({ ...state, search: event.target.value }));
    };
    const onChangeBelongsClient = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notbelongs: event.target.checked, clientid: 0 }));
    };

    useEffect(() => {
        console.log(validate(state, client, subtype));
        validate(state, client, subtype)? onReady({ ...state }, false): onDirty({ ...state });
    }, [state]);

    const styleinput: CSSProperties = { width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (context === "SENDER"? "Отправитель: ": (context === "RECEIVER"? "Получатель: ": "")) + (subtype === "INTERNAL"? "Регистрация внутренней организации": "Регистрация внешней организации")}
            </div>
            <div className={styles["name-label"]}>
                <label>Название:</label>
            </div>
            <div className={styles.name}>
                <Input style={styleinput} onChange={onName} defaultValue="" value={state.name}/>
            </div>
            <div className={styles["inn-label"]}>
                <label>ИНН:</label>
            </div>
            <div className={styles.inn}>
                <Input style={styleinput} onChange={onINN} defaultValue="" value={state.inn}/>
            </div>
            <div className={styles["kpp-label"]}>
                <label>КПП:</label>
            </div>
            <div className={styles.kpp}>
                <Input style={styleinput} onChange={onKPP} defaultValue="" value={state.kpp}/>
            </div>
            <div className={styles["ogrn-label"]}>
                <label>ОГРН:</label>
            </div>
            <div className={styles.ogrn}>
                <Input style={styleinput} onChange={onOGRN} defaultValue="" value={state.ogrn}/>
            </div>
            {
                subtype === "EXTERNAL" && !client?
                    <div className={styles["organizations-belongs-client"]}>
                        <input type="checkbox" onChange={onChangeBelongsClient} checked={state.notbelongs}></input>
                        <div>Организация никому не принадлежит</div>
                    </div>
                    : null
            }
            {
                subtype === "EXTERNAL" && (!state.notbelongs || client)?
                    <>
                        <div className={styles["clients-list-label"]}>
                            <label>Клиент:</label>
                        </div>
                        <div className={styles["clients-list-search"]}>
                            <Input style={styleinput} placeholder="Введите подстроку поиска" onChange={onSearch} value={state.search}/>
                        </div>
                        <ul className={styles["clients-list"]}>
                            {
                                mock_clients
                                    .filter(item => state.search.length > 0 && item.name.toUpperCase().includes(state.search.toUpperCase()))
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
