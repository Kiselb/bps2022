import React, { FC, useState, useEffect } from 'react';

import { Input, Select } from 'antd';

import styles from './registration.module.css';

import { mock_groups } from '../mock';

type Props = {
    context: "SENDER" | "RECEIVER" | "NONE",
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
};

export type State = {
    type: "REGPERSONALACCOUNT",
    name: string,
    groups: string[],
    groupsnotinlist: boolean,
    groupname: string,
};

const validate = (state: State) => {
    return (
        true
        && state.name.length > 0
        && (
            state.groups.length > 0
            || (state.groups.length === 0 && state.groupname.length > 0)
        )
    );
};

export const Registration: FC<Props> = ({ context, savedstate, onReady, onDirty }) => {
    const [state, setState] = useState<State>(() => (
        savedstate === null?
            {
                type: "REGPERSONALACCOUNT",
                name: "",
                groups: [],
                groupsnotinlist: false,
                groupname: "",
            }
            : { ...savedstate }
    ));

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, name: event.target.value }))
    };
    const onChangeGroups = (groups: string[]) => {
        setState(state => ({ ...state, groups}));
    };
    const onChangeGroupsNotInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, groupsnotinlist: event.target.checked }));
    };
    const onChangeGroupName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, groupname: event.target.value }));
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, false): onDirty({ ...state });
    }, [state])

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { (context === "SENDER"? "Отправитель: ": (context === "RECEIVER"? "Получатель: ": "")) + "Регистрация клиента" }
            </div>
            <div className={styles["clients-name-label"]}>
                <label>Имя клиента в системе:</label>
            </div>
            <div className={styles["clients-name"]}>
                <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left" }} onChange={onChangeName} defaultValue="" value={state.name}/>
            </div>
            <div className={styles["groups-label"]}>
                <label>Группы клиента:</label>
            </div>
            <div className={styles["groups"]}>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", }}
                    placeholder="Выберите группы клиента - может быть несколько"
                    defaultValue={[]}
                    onChange={onChangeGroups}
                    options={mock_groups.map(item => ({ label: item.name, value: item.id }))}
                />                
            </div>
            <div className={styles["groups-not-in-list"]}>
                <input type="checkbox" checked={state.groupsnotinlist} onChange={onChangeGroupsNotInList}></input>
                <div>Группа в списке отсутствует</div>
            </div>
            <div className={styles["groups-name"]}>
                {
                    state.groupsnotinlist?
                        <Input style={{ width: '100%', fontFamily: "'Roboto'", fontSize: "1rem", height: "2.25rem", textAlign: "left", }} placeholder="Введите сюда название новой группы" onChange={onChangeGroupName} value={state.groupname}/>
                        : null
                }
            </div>
        </div>
    );
};
