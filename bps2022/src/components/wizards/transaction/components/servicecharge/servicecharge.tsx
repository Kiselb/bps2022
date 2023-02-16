import React, { FC, useState, useEffect } from 'react';

import {
    Button,
    Checkbox,
    Input,
    InputNumber,
    Select,
} from 'antd';

import { WizardPagesTypesUnion, TransactionCharges } from '../../../../../domain/automaton/automaton';

import styles from './servicecharge.module.css';

const CheckboxGroup = Checkbox.Group;
const ChargeOptions = ['%% Сверх', 'Значение'];

type Props = {
    wizard: WizardPagesTypesUnion[],
    onReady: (state: State, registration: boolean) => void,
};
export type State = {
    type: "SERVICECHARGE",
};
const validate = (state: State): boolean => {
    return true;
};

export const ServiceCharge: FC<Props> = ({ wizard, onReady }) => {
    const [state, setState] = useState<State>({
        type: "SERVICECHARGE",
    });

    useEffect(() => {
        validate(state) && onReady(state, false);
        for(let i = 0; i < wizard.length; i++) {
            const page = wizard[i];
            if ("charge" in page) {
                console.log(page.charge);
            }
        }
    }, [state]);

    const onChargeEnterpriseExternalIncome = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    const onChargeEnterpriseExternalOutcome = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                Определение стоимости обслуживания
            </div>

            <div className={[styles["enterprise-external-income-label"], styles["element"]].join(" ")}>
                <label>Приём на внешний счёт:</label>
            </div>
            <div className={[styles["enterprise-external-income-value"], styles["element"]].join(" ")}>
                <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.25rem", textAlign: "right" }} onChange={onChargeEnterpriseExternalIncome} defaultValue="0.00" value={0}/>
            </div>
            <div className={[styles["enterprise-external-income-option1"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>Значение</Checkbox>
            </div>
            <div className={[styles["enterprise-external-income-option2"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>%% Сверх</Checkbox>
            </div>

            <div className={[styles["enterprise-external-outcome-label"], styles["element"]].join(" ")}>
                <label>Отправка с внешнего счёта:</label>
            </div>
            <div className={[styles["enterprise-external-outcome-value"], styles["element"]].join(" ")}>
                <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.25rem", textAlign: "right" }} onChange={onChargeEnterpriseExternalOutcome} defaultValue="0.00" value={0}/>
            </div>
            <div className={[styles["enterprise-external-outcome-option1"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>Значение</Checkbox>
            </div>
            <div className={[styles["enterprise-external-outcome-option2"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>%% Сверх</Checkbox>
            </div>

            <div className={[styles["personal-income-label"], styles["element"]].join(" ")}>
                <label>Приём на лицевой счёт:</label>
            </div>
            <div className={[styles["personal-income-value"], styles["element"]].join(" ")}>
                <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.25rem", textAlign: "right" }} onChange={onChargeEnterpriseExternalOutcome} defaultValue="0.00" value={0}/>
            </div>
            <div className={[styles["personal-income-option1"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>Значение</Checkbox>
            </div>
            <div className={[styles["personal-income-option2"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>%% Сверх</Checkbox>
            </div>

            <div className={[styles["personal-outcome-label"], styles["element"]].join(" ")}>
                <label>Отправка с лицевого счёта:</label>
            </div>
            <div className={[styles["personal-outcome-value"], styles["element"]].join(" ")}>
                <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.25rem", textAlign: "right" }} onChange={onChargeEnterpriseExternalOutcome} defaultValue="0.00" value={0}/>
            </div>
            <div className={[styles["personal-outcome-option1"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>Значение</Checkbox>
            </div>
            <div className={[styles["personal-outcome-option2"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>%% Сверх</Checkbox>
            </div>

            <div className={[styles["personal-netting-income-label"], styles["element"]].join(" ")}>
                <label>Взаимозачёт приём:</label>
            </div>
            <div className={[styles["personal-netting-income-value"], styles["element"]].join(" ")}>
                <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.25rem", textAlign: "right" }} onChange={onChargeEnterpriseExternalOutcome} defaultValue="0.00" value={0}/>
            </div>
            <div className={[styles["personal-netting-income-option1"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>Значение</Checkbox>
            </div>
            <div className={[styles["personal-netting-income-option2"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>%% Сверх</Checkbox>
            </div>

            <div className={[styles["personal-netting-outcome-label"], styles["element"]].join(" ")}>
                <label>Взаимозачёт отправка:</label>
            </div>
            <div className={[styles["personal-netting-outcome-value"], styles["element"]].join(" ")}>
                <Input style={{ width: '20rem', fontSize: "1.5rem", height: "2.25rem", textAlign: "right" }} onChange={onChargeEnterpriseExternalOutcome} defaultValue="0.00" value={0}/>
            </div>
            <div className={[styles["personal-netting-outcome-option1"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>Значение</Checkbox>
            </div>
            <div className={[styles["personal-netting-outcome-option2"], styles["element"]].join(" ")}>
                <Checkbox style={{ fontFamily: 'Roboto', fontSize: "1rem" }}>%% Сверх</Checkbox>
            </div>
        </div>
    );
};
