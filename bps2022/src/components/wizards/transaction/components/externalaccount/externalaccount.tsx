import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import styles from './externalaccount.module.css';
import { mock_owners, mock_accounts } from './mock';
import { Settings } from '../../../../../domain/settings/settings';

type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    direction: -1 | 1,
    primary: boolean,
    regallowed: boolean,
    clientid: number | null,
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
    onNext: () => void,
};
export type State = {
    type: "EXTERNALACCOUNT",
    ownerid: number | null,
    accountid: number | null,
    notinlist: boolean,
    search: string,
};
const validate = (state: State): boolean => {
    return ((state.notinlist) || (!state.notinlist && (state.ownerid !== null) && (state.accountid !== null)));
}
export const ExternalAccount: FC<Props> = ({ subtype, direction, regallowed, savedstate, clientid, onReady, onDirty, onNext }: Props) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "EXTERNALACCOUNT",
            ownerid: clientid,
            accountid: null,
            notinlist: false,
            search: "",
        }
        : { ...savedstate }
    );
    const clicks = useRef(1);

    const onCurrencyOwner = (ownerid: number) => {
        setState((state) => ({ ...state, ownerid }))
    };
    const onCurrencyAccount = (accountid: number) => {
        if (!state.notinlist) {
            if (accountid === state.accountid) {
                clicks.current += 1;
            } else {
                clicks.current = 1;
            }
            if (clicks.current > Settings.clicksOnNext) {
                clicks.current = 1;
                onNext();
                return;
            }
            setState(state => ({ ...state, accountid }));
        }
    };
    const onChangeInList = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, notinlist: event.target.checked }));
    };
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, ownerid: null, accountid: null, search: event.target.value }));
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, state.notinlist): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                {`${direction === 1? "Приём:": "Отправка:"} ${subtype === "INTERNAL"? "Внешние счета организации": "Внешние счета клиентов"}`}
            </div>
            {
                clientid === null?
                    <div className={styles.search}>
                        <Input
                            prefix={<SearchOutlined style={{ fontSize: "1.25rem", paddingRight: "0.5rem"}}/>}
                            style={{ fontFamily: 'Roboto', fontSize: "1rem", width: '100%' }}
                            placeholder="Введите текст для выбора развивающего по названию (имени)"
                            allowClear
                            value={state.search}
                            onChange={onChangeSearch}
                        />
                    </div>
                    : null
            }
            {
                clientid === null?
                    <ul className={styles["owners-list"]}>
                        {
                            mock_owners
                                .filter(item => state.search.length > 0 && item.name.toUpperCase().includes(state.search.toUpperCase()))
                                .sort((a, b) => (a.name < b.name)? -1: 1)
                                .map(item =>
                                    <li
                                        className={[styles["owners-item"], state.ownerid === item.id? styles["owners-item-current"]: ""].join(" ")}
                                        key={item.id}
                                        value={item.name}
                                        onClick={() => onCurrencyOwner(item.id)}
                                    >
                                        <div>
                                            {item.name}
                                        </div>
                                    </li>)
                        }
                    </ul>:
                    <div className={styles["owner"]}>
                        {`Развивающий: ${clientid}`}
                    </div>
            }
            <ul className={[styles["accounts-list"], clientid === null? styles["accounts-list"]: ""].join(" ")}>
                {
                    mock_accounts
                        .sort((a, b) => (a.name < b.name)? -1: 1)
                        .filter(item => state.ownerid === item.owner_id)
                        .map(item =>
                            <li className={[styles["accounts-item"], state.accountid === item.id? styles["accounts-item-current"]: ""].join(" ")} key={item.id} value={item.name} onClick={() => onCurrencyAccount(item.id)}>
                                <div>
                                    {item.name}
                                </div>
                            </li>)
                }
            </ul>
            {
                regallowed?
                    <div className={styles["accounts-not-in-list"]}>
                        <input type="checkbox" checked={state.notinlist} onChange={onChangeInList}></input>
                        <div>Счёт в списке отсутствует</div>
                    </div>
                    : null
            }
        </div>
    );
};
