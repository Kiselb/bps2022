import React, { FC, useState, useEffect } from 'react';

import { LockOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input, Select } from 'antd';

//https://github.com/ant-design/ant-design/blob/7bd78e7156e0101a6d635b174751b3b686a066ab/components/checkbox/demo/basic.md
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import { round } from '../../../../../domain/utilities';
import { Decimal } from '../../../../decimal/decimal';

import styles from './sums.module.css';
import { mock } from './mock';
import { Settings } from '../../../../../domain/settings/settings';

type Props = {
    exchange: boolean,
    savedstate: State | null,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
};
export type State = {
    type: "SUMEXCHANGE",
    originvalue: number,
    targetvalue: number,
    origincurrency: string,
    targetcurrency: string,
    rate: number,
    exchange: boolean,
    lock: 0 | 1 | 2,
};
const validate = (state: State): boolean => {
    return (
        (!state.exchange && state.originvalue > 0)
        || (state.exchange && state.originvalue > 0 && state.targetvalue > 0 && state.origincurrency !== state.targetcurrency)
    );
};

export const Sums: FC<Props> = ({ exchange, savedstate, onReady, onDirty }: Props) => {
    const [state, setState] = useState<State>(
        savedstate === null?
        {
            type: "SUMEXCHANGE",
            originvalue: 0,
            targetvalue: 0,
            origincurrency: Settings.currencies.defaultOrigin,
            targetcurrency: Settings.currencies.defaultTarget,
            rate: 1,
            exchange,
            lock: 1,
        }
        : { ...savedstate }
    );

    const onOriginCurrency = (origincurrency: string) => {
        setState(state => ({ ...state, origincurrency }));
    };
    const onTargetCurrency = (targetcurrency: string) => {
        setState(state => ({ ...state, targetcurrency }));
    };
    const onOriginValue = (originvalue: number) => {
        switch(state.lock) {
            case 0:
                break;
            case 1:
                setState(state => ({ ...state, originvalue, targetvalue: round(originvalue / state.rate, 2) }));
                break;
            case 2:
                if (round(originvalue / state.targetvalue, 5) > 0.00001) {
                    setState(state => ({ ...state, originvalue, rate: round(originvalue / state.targetvalue, 5) }));
                }
                break;
        }
    };
    const onTargetValue = (targetvalue: number) => {
        switch(state.lock) {
            case 0:
                if (round(state.originvalue / targetvalue, 5) > 0.00001) {
                    setState(state => ({ ...state, targetvalue, rate: round(state.originvalue / targetvalue, 2) }));
                }
                break;
            case 1:
                setState(state => ({ ...state, targetvalue, originvalue: round(state.rate * targetvalue, 5) }));
                break;
            case 2:
                break;
        }
    };
    const onRate = (rate: number) => {
        switch(state.lock) {
            case 0:
                setState(state => ({ ...state, rate, targetvalue: round(state.originvalue / rate, 2) }));
                break;
            case 1:
                break;
            case 2:
                setState(state => ({ ...state, rate, originvalue: round(rate * state.targetvalue, 2) }));
                break;
        }
    };
    const onExchange = (event: CheckboxChangeEvent) => {
        exchange && setState(state => ({ ...state, exchange: event.target.checked }));
    };
    const onLock = (lock: 0 | 1 | 2) => () => {
        setState(state => ({ ...state, lock }));
    };

    useEffect(() => {
        validate(state)? onReady({ ...state }, false): onDirty({ ...state });
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                { state.exchange? "Суммы транзакции": "Сумма транзакции" }
            </div>
            <div className={styles["sums-origin"]}>
                <Input.Group compact>
                    <Decimal
                        value={state.originvalue}
                        minimumFractionDigits={2}
                        maximumFractionDigits={2}
                        handler={onOriginValue}
                        validator={(value: number) => value >= 0}
                        locked={!(!state.exchange || state.exchange && state.lock !== 0)}
                        marker={"Origin"}
                        />
                    <div style={{ height: "2.75rem", border: "1px solid rgb(217,217,217)", width: "5rem" }}>
                        <Select
                            size="large"
                            bordered={false}
                            defaultValue="RUB"
                            onChange={onOriginCurrency}
                            options={mock.map(item => ({ value: item, label: item}))}
                            value={state.origincurrency}
                        />
                    </div>
                    {
                        state.exchange?
                            <Button
                                type={state.lock === 0? 'primary': 'default' }
                                style={{ height: "2.75rem" }}
                                onClick={onLock(0)}
                            >
                                <LockOutlined style={{ fontSize: "1.25rem" }}/>
                            </Button>
                            : null
                    }
                </Input.Group>
            </div>
            {
                exchange?
                    <div className={styles["sums-exchange"]}>
                        <Checkbox style={{ fontFamily: "Roboto", fontSize: "1rem" }} checked={state.exchange} onChange={onExchange}>Конвертация</Checkbox>
                    </div>
                    : null
            }
            {
                state.exchange?
                    <>
                        <div className={styles["sums-rate"]}>
                            <Input.Group compact>
                                <Decimal
                                    value={state.rate}
                                    minimumFractionDigits={5}
                                    maximumFractionDigits={5}
                                    handler={onRate}
                                    validator={(value: number) => value > 0}
                                    locked={state.lock === 1}
                                    marker={"Rate"}
                                />
                                <div style={{ height: "2.75rem", border: "1px solid rgb(217,217,217)", width: "5rem" }}>
                                </div>
                                <Button
                                    type={state.lock === 1? 'primary': 'default' }
                                    style={{ height: "2.75rem", width: "3.25rem" }}
                                    onClick={onLock(1)}
                                >
                                    <LockOutlined style={{ fontSize: "1.25rem" }}/>
                                </Button>
                            </Input.Group>
                        </div>
                        <div className={styles["sums-target"]}>
                            <Input.Group compact>
                                <Decimal
                                    value={state.targetvalue}
                                    minimumFractionDigits={2}
                                    maximumFractionDigits={2}
                                    handler={onTargetValue}
                                    validator={(value: number) => value >= 0}
                                    locked={state.lock === 2}
                                    marker={"Target"}
                                />
                                <div style={{ height: "2.75rem", border: "1px solid rgb(217,217,217)", width: "5rem" }}>
                                    <Select
                                        size="large"
                                        bordered={false}
                                        defaultValue="RUB"
                                        onChange={onTargetCurrency}
                                        options={mock.map(item => ({ value: item, label: item}))}
                                        value={state.targetcurrency}
                                    />
                                </div>
                                <Button
                                    type={state.lock === 2? 'primary': 'default' }
                                    style={{ height: "2.75rem", width: "3.25rem" }}
                                    onClick={onLock(2)}
                                >
                                    <LockOutlined style={{ fontSize: "1.25rem" }}/>
                                </Button>
                            </Input.Group>
                        </div>
                    </>
                    : null
            }
        </div>
    );
};
