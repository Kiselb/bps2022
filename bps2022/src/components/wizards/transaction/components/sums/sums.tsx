import React, { FC, useState } from 'react';

import { LockOutlined } from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Input,
    InputNumber,
    Select,
  } from 'antd';

import styles from './sums.module.css';
import { mock } from './mock';

type Props = {
    exchange: boolean,
    onOriginSum: (sum: number) => void,
    onTargetSum: (sum: number) => void,
    onOriginCurrency: (currency: string) => void,
    onTargetCurrency: (currency: string) => void,
    onRate: (rate: number) => void,
    onExchange: (exchange: boolean) => void,
};
type state = {
    origin_sum: string,
    target_sum: string,
    origin_currency: string,
    target_currency: string,
    rate: string,
    exchange: boolean,
};

function isNumeric(value: string) {
    return !isNaN(+value) && !isNaN(parseFloat(value));
}

function isDecimal(value: string) {
    return (value.match(/[+-]?([0-9]*[.])?[0-9]+/) && !isNaN(+value));
}

export const Sums: FC<Props> = ({ exchange, onOriginSum, onTargetSum, onOriginCurrency, onTargetCurrency, onRate, onExchange }: Props) => {
    const [sums, setSums] = useState<state>({
        origin_sum: "0.00",
        target_sum: "0.00",
        origin_currency: "RUB",
        target_currency: "RUB",
        rate: "1.00",
        exchange: false,
    });
    const handleOriginCurrency = (value: string) => {
        console.log(`selected ${value}`);
    };
    const handleTargetCurrency = (value: string) => {
        console.log(`selected ${value}`);
    };
    const handleSumMain = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(isDecimal(event.target.value));
        if (isDecimal(event.target.value)) {
            setSums(value => ({ ...value, origin_sum: event.target.value }));
        } else {
            setSums(value => ({ ...value}));
        }
    };

      return (
        <div className={styles.page}>
            <div className={styles.header}>
                Суммы транзакции
            </div>
            <div className={styles["sums-origin"]}>
                <Input.Group compact>
                    <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.75rem", textAlign: "right" }} onChange={handleSumMain} defaultValue="0.00" value={sums.origin_sum}/>
                    <div style={{ height: "2.75rem", border: "1px solid rgb(217,217,217)", width: "5rem" }}>
                        <Select
                            size="large"
                            bordered={false}
                            defaultValue="RUB"
                            onChange={handleOriginCurrency}
                            options={mock.map(item => ({ value: item, label: item}))}
                        />
                    </div>
                    <Button type='primary' style={{ height: "2.75rem" }}><LockOutlined style={{ fontSize: "1.25rem" }}/></Button>
                </Input.Group>
            </div>
            {
                exchange?
                    <>
                        <div className={styles["sums-exchange"]}>
                            <Checkbox>Конвертация</Checkbox>
                        </div>
                        <div className={styles["sums-rate"]}>
                            <Input.Group compact>
                                <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.75rem", textAlign: "right" }} defaultValue="0.00"/>
                                <div style={{ height: "2.75rem", border: "1px solid rgb(217,217,217)", width: "5rem" }}>
                                </div>
                                <Button type='primary' style={{ height: "2.75rem", width: "3.25rem" }}><LockOutlined style={{ fontSize: "1.25rem" }}/></Button>
                            </Input.Group>
                        </div>
                        <div className={styles["sums-target"]}>
                            <Input.Group compact>
                                <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.75rem", textAlign: "right" }} defaultValue="0.00"/>
                                <div style={{ height: "2.75rem", border: "1px solid rgb(217,217,217)", width: "5rem" }}>
                                    <Select
                                        size="large"
                                        bordered={false}
                                        defaultValue="RUB"
                                        onChange={handleTargetCurrency}
                                        options={mock.map(item => ({ value: item, label: item}))}
                                    />
                                </div>
                                <Button type='primary' style={{ height: "2.75rem", width: "3.25rem" }}><LockOutlined style={{ fontSize: "1.25rem" }}/></Button>
                            </Input.Group>
                        </div>
                    </>
                    :
                    null
            }
        </div>
    );
}
