import React, { FC, useState, useEffect, CSSProperties } from 'react';

import { Checkbox, Input } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import { WizardPagesTypesUnion, TransactionCharges, isChargedPage } from '../../../../../domain/automaton/automaton';

import styles from './servicecharge.module.css';
import { isDecimal } from '../../../../../domain/utilities';

type Props = {
    charges: TransactionCharges[],
    savedstate: State,
    onReady: (state: State, registration: boolean) => void,
    onDirty: (state: State) => void,
};
export type Charge = {
    charge: string,
    isabsolute: boolean,
    isincluded: boolean,
    isallowed: boolean,
}
export type Charges = {[key in TransactionCharges]: Charge}

export type State = {
    type: "SERVICECHARGE",
    charges: Charges,
};
const validate = (state: State): boolean => {
    if (
        true
        && isDecimal(state.charges.ENTERPRISEEXTERNALINCOME.charge)
        && isDecimal(state.charges.ENTERPRISEEXTERNALOUTCOME.charge)
        && isDecimal(state.charges.CLIENTPERSONALINCOME.charge)
        && isDecimal(state.charges.CLIENTPERSONALOUTCOME.charge)
        && isDecimal(state.charges.CLIENTPERSONALINCOMENETTING.charge)
        && isDecimal(state.charges.CLIENTPERSONALOUTCOMENETTING.charge)
    ) return true;
    return false;
};

export const ServiceCharge: FC<Props> = ({ charges, savedstate, onReady, onDirty }) => {
    const [state, setState] = useState<State>(() => {
        if (savedstate === null) {
            const chargeslist: Charges = {
                CLIENTPERSONALINCOME: { charge: "0.00", isabsolute: false, isincluded: false, isallowed: false },
                CLIENTPERSONALOUTCOME: { charge: "0.00", isabsolute: false, isincluded: false, isallowed: false },
                CLIENTPERSONALINCOMENETTING: { charge: "0.00", isabsolute: false, isincluded: false, isallowed: false },
                CLIENTPERSONALOUTCOMENETTING: { charge: "0.00", isabsolute: false, isincluded: false, isallowed: false },
                ENTERPRISEEXTERNALINCOME: { charge: "0.00", isabsolute: false, isincluded: false, isallowed: false },
                ENTERPRISEEXTERNALOUTCOME: { charge: "0.00", isabsolute: false, isincluded: false, isallowed: false },
            };
    
            for(let i = 0; i < charges.length; i++) {
                chargeslist[charges[i]].isallowed = true;
            }
            console.log(charges);
            return ({ type: "SERVICECHARGE", charges: chargeslist });
        }
        return { ...savedstate };
    });

    useEffect(() => {
        validate(state)? onReady({ ...state }, false): onDirty({ ...state });
    }, [state]);

    const onChargeEnterpriseExternalIncome = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isDecimal(event.target.value)) {
            if (state.charges.ENTERPRISEEXTERNALINCOME.isabsolute || !state.charges.ENTERPRISEEXTERNALINCOME.isabsolute && parseFloat(event.target.value) < 0.9) {
                setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALINCOME: { ...state.charges.ENTERPRISEEXTERNALINCOME, charge: event.target.value }}}));
            }
        }
    };
    const onChargeEnterpriseExternalOutcome = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isDecimal(event.target.value)) {
            if (state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute || !state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute && parseFloat(event.target.value) < 0.9) {
                setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALOUTCOME: { ...state.charges.ENTERPRISEEXTERNALOUTCOME, charge: event.target.value }}}));
            }
        }
    };
    const onChargeClientPersonalIncome = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isDecimal(event.target.value)) {
            if (state.charges.CLIENTPERSONALINCOME.isabsolute || !state.charges.CLIENTPERSONALINCOME.isabsolute && parseFloat(event.target.value) < 0.9) {
                setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOME: { ...state.charges.CLIENTPERSONALINCOME, charge: event.target.value }}}));
            }
        }
    };
    const onChargeClientPersonalOutcome = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isDecimal(event.target.value)) {
            if (state.charges.CLIENTPERSONALOUTCOME.isabsolute || !state.charges.CLIENTPERSONALOUTCOME.isabsolute && parseFloat(event.target.value) < 0.9) {
                setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOME: { ...state.charges.CLIENTPERSONALOUTCOME, charge: event.target.value }}}));
            }
        }
    };
    const onChargeClientPersonalNettingIncome = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isDecimal(event.target.value)) {
            if (state.charges.CLIENTPERSONALINCOMENETTING.isabsolute || !state.charges.CLIENTPERSONALINCOMENETTING.isabsolute && parseFloat(event.target.value) < 0.9) {
                setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOMENETTING: { ...state.charges.CLIENTPERSONALINCOMENETTING, charge: event.target.value }}}));
            }
        }
    };
    const onChargeClientPersonalNettingOutcome = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isDecimal(event.target.value)) {
            if (state.charges.CLIENTPERSONALOUTCOMENETTING.isabsolute || !state.charges.CLIENTPERSONALOUTCOMENETTING.isabsolute && parseFloat(event.target.value) < 0.9) {
                setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOMENETTING: { ...state.charges.CLIENTPERSONALOUTCOMENETTING, charge: event.target.value }}}));
            }
        }
    };

    const onChargeEnterpriseExternalIncomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALINCOME: { ...state.charges.ENTERPRISEEXTERNALINCOME, isabsolute: event.target.checked, charge: "0.00" }}}));
    }
    const onChargeEnterpriseExternalOutcomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALOUTCOME: { ...state.charges.ENTERPRISEEXTERNALOUTCOME, isabsolute: event.target.checked, charge: "0.00" }}}));
    };
    const onChargeClientPersonalIncomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOME: { ...state.charges.CLIENTPERSONALINCOME, isabsolute: event.target.checked, charge: "0.00" }}}));
    };
    const onChargeClientPersonalOutcomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOME: { ...state.charges.CLIENTPERSONALOUTCOME, isabsolute: event.target.checked, charge: "0.00" }}}));
    };
    const onChargeClientPersonalNettingIncomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOMENETTING: { ...state.charges.CLIENTPERSONALINCOMENETTING, isabsolute: event.target.checked, charge: "0.00" }}}));
    };
    const onChargeClientPersonalNettingOutcomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOMENETTING: { ...state.charges.CLIENTPERSONALOUTCOMENETTING, isabsolute: event.target.checked, charge: "0.00" }}}));
    };

    const onChargeEnterpriseExternalIncomeOption2 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALINCOME: { ...state.charges.ENTERPRISEEXTERNALINCOME, isincluded: event.target.checked }}}));
    }
    const onChargeEnterpriseExternalOutcomeOption2 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALOUTCOME: { ...state.charges.ENTERPRISEEXTERNALOUTCOME, isincluded: event.target.checked }}}));
    };
    const onChargeClientPersonalIncomeOption2 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOME: { ...state.charges.CLIENTPERSONALINCOME, isincluded: event.target.checked }}}));
    };
    const onChargeClientPersonalOutcomeOption2 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOME: { ...state.charges.CLIENTPERSONALOUTCOME, isincluded: event.target.checked }}}));
    };
    const onChargeClientPersonalNettingIncomeOption2 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOMENETTING: { ...state.charges.CLIENTPERSONALINCOMENETTING, isincluded: event.target.checked }}}));
    };
    const onChargeClientPersonalNettingOutcomeOption2 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOMENETTING: { ...state.charges.CLIENTPERSONALOUTCOMENETTING, isincluded: event.target.checked }}}));
    };

    const styleinput: CSSProperties = { width: '20rem', fontFamily: 'Roboto', fontSize: "1.5rem", height: "2.25rem", textAlign: "right" };
    const stylecheckbox: CSSProperties = { fontFamily: 'Roboto', fontSize: "1rem" };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                Определение стоимости обслуживания
            </div>
            {
                state.charges.ENTERPRISEEXTERNALINCOME.isallowed?
                    <>
                        <div className={[styles["enterprise-external-income-label"], styles["element"]].join(" ")}>
                            <label>Приём на внешний счёт:</label>
                        </div>
                        <div className={[styles["enterprise-external-income-value"], styles["element"]].join(" ")}>
                            <Input style={styleinput} onChange={onChargeEnterpriseExternalIncome} defaultValue="0.00" value={state.charges.ENTERPRISEEXTERNALINCOME.charge}/>
                        </div>
                        <div className={[styles["enterprise-external-income-option1"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeEnterpriseExternalIncomeOption1} checked={state.charges.ENTERPRISEEXTERNALINCOME.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["enterprise-external-income-option2"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeEnterpriseExternalIncomeOption2} checked={state.charges.ENTERPRISEEXTERNALINCOME.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
            {
                state.charges.ENTERPRISEEXTERNALOUTCOME.isallowed?
                    <>
                        <div className={[styles["enterprise-external-outcome-label"], styles["element"]].join(" ")}>
                            <label>Отправка с внешнего счёта:</label>
                        </div>
                        <div className={[styles["enterprise-external-outcome-value"], styles["element"]].join(" ")}>
                            <Input style={styleinput} onChange={onChargeEnterpriseExternalOutcome} defaultValue="0.00" value={state.charges.ENTERPRISEEXTERNALOUTCOME.charge}/>
                        </div>
                        <div className={[styles["enterprise-external-outcome-option1"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeEnterpriseExternalOutcomeOption1} checked={state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["enterprise-external-outcome-option2"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeEnterpriseExternalOutcomeOption2} checked={state.charges.ENTERPRISEEXTERNALOUTCOME.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
            {
                state.charges.CLIENTPERSONALINCOME.isallowed?
                    <>
                        <div className={[styles["personal-income-label"], styles["element"]].join(" ")}>
                            <label>Приём по заявке:</label>
                        </div>
                        <div className={[styles["personal-income-value"], styles["element"]].join(" ")}>
                            <Input style={styleinput} onChange={onChargeClientPersonalIncome} defaultValue="0.00" value={state.charges.CLIENTPERSONALINCOME.charge}/>
                        </div>
                        <div className={[styles["personal-income-option1"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeClientPersonalIncomeOption1} checked={state.charges.CLIENTPERSONALINCOME.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["personal-income-option2"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeClientPersonalIncomeOption2} checked={state.charges.CLIENTPERSONALINCOME.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
            {
                state.charges.CLIENTPERSONALOUTCOME.isallowed?
                    <>
                        <div className={[styles["personal-outcome-label"], styles["element"]].join(" ")}>
                            <label>Отправка по заявке:</label>
                        </div>
                        <div className={[styles["personal-outcome-value"], styles["element"]].join(" ")}>
                            <Input style={styleinput} onChange={onChargeClientPersonalOutcome} defaultValue="0.00" value={state.charges.CLIENTPERSONALOUTCOME.charge}/>
                        </div>
                        <div className={[styles["personal-outcome-option1"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeClientPersonalOutcomeOption1} checked={state.charges.CLIENTPERSONALOUTCOME.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["personal-outcome-option2"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeClientPersonalOutcomeOption2} checked={state.charges.CLIENTPERSONALOUTCOME.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
            {
                state.charges.CLIENTPERSONALINCOMENETTING.isallowed?
                    <>
                        <div className={[styles["personal-netting-income-label"], styles["element"]].join(" ")}>
                            <label>Взаимозачёт приём:</label>
                        </div>
                        <div className={[styles["personal-netting-income-value"], styles["element"]].join(" ")}>
                            <Input style={styleinput} onChange={onChargeClientPersonalNettingIncome} defaultValue="0.00" value={state.charges.CLIENTPERSONALINCOMENETTING.charge}/>
                        </div>
                        <div className={[styles["personal-netting-income-option1"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeClientPersonalNettingIncomeOption1} checked={state.charges.CLIENTPERSONALINCOMENETTING.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["personal-netting-income-option2"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeClientPersonalNettingIncomeOption2} checked={state.charges.CLIENTPERSONALINCOMENETTING.isincluded}>%% Сверх</Checkbox>
                        </div>
                        </>
                    : null
            }
            {
                state.charges.CLIENTPERSONALOUTCOMENETTING.isallowed?
                    <>
                        <div className={[styles["personal-netting-outcome-label"], styles["element"]].join(" ")}>
                            <label>Взаимозачёт отправка:</label>
                        </div>
                        <div className={[styles["personal-netting-outcome-value"], styles["element"]].join(" ")}>
                            <Input style={styleinput} onChange={onChargeClientPersonalNettingOutcome} defaultValue="0.00" value={state.charges.CLIENTPERSONALOUTCOMENETTING.charge}/>
                        </div>
                        <div className={[styles["personal-netting-outcome-option1"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeClientPersonalNettingOutcomeOption1} checked={state.charges.CLIENTPERSONALOUTCOMENETTING.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["personal-netting-outcome-option2"], styles["element"]].join(" ")}>
                            <Checkbox style={stylecheckbox} onChange={onChargeClientPersonalNettingOutcomeOption2} checked={state.charges.CLIENTPERSONALOUTCOMENETTING.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
        </div>
    );
};
