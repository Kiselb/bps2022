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
    onOriginSum: (sum: number) => void,
    onTargetSum: (sum: number) => void,
    onOriginCurrency: (currency: string) => void,
    onTargetCurrency: (currency: string) => void,
    onRate: (rate: number) => void,
    onExchange: (exchange: boolean) => void,
};
type state = {
    origin_sum: number,
    target_sum: number,
    origin_currency: string,
    target_currency: string,
    rate: number,
    exchange: boolean,
}
export const Sums: FC<Props> = ({ onOriginSum, onTargetSum, onOriginCurrency, onTargetCurrency, onRate, onExchange }: Props) => {
    const [sums, setSums] = useState<state>({
        origin_sum: 0.0,
        target_sum: 0.0,
        origin_currency: "RUB",
        target_currency: "RUB",
        rate: 1.0,
        exchange: false,
    });
    const handleOriginCurrency = (value: string) => {
        console.log(`selected ${value}`);
    };
    const handleTargetCurrency = (value: string) => {
    console.log(`selected ${value}`);
    };

      return (
        <div className={styles.page}>
            <div className={styles.header}>
                Суммы транзакции
            </div>
            <div className={styles["sums-origin"]}>
                <Input.Group compact>
                    <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.75rem", textAlign: "right" }} defaultValue="0.00"/>
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
            {/* <div className={styles["sums-origin-currency"]}>
                <Select
                    size="large"
                    bordered={false}
                    defaultValue="RUB"
                    onChange={handleOriginCurrency}
                    options={mock.map(item => ({ value: item, label: item}))}
                />
            </div> */}
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
                    {/* <select style={{ height: "2.75rem", width: "5rem", textAlign: "center", fontSize: "1.15rem", border: "1px solid rgb(217,217,217)", outline: "none" }} >
                        {mock.map(item => <option key={item} value={item}>{item}</option>)}
                    </select> */}
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
            {/* <div className={styles["sums-target-currency"]}>
                <Select
                    size="large"
                    bordered={false}
                    defaultValue="RUB"
                    onChange={handleOriginCurrency}
                    options={mock.map(item => ({ value: item, label: item}))}
                />
            </div> */}
        </div>
    );
}
