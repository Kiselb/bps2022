import React, { FC, useState, useEffect, CSSProperties } from 'react';

import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import { Settings } from '../../../../../domain/settings/settings';
import { WizardCommonProps, WizardStateProps, WizardStageCharges } from '../../../../../domain/transactions/types';

import { Decimal } from '../../../../decimal/decimal';

import styles from './servicecharge.module.css';

export type Props = {
    charges: WizardStageCharges[],
};

export type Charge = {
    charge: number | null,
    isabsolute: boolean,
    isincluded: boolean,
}
export type Charges = {[key in WizardStageCharges]: Charge}

export type State = {
    type: "SERVICECHARGE",
    charges: Charges,
};

const validate = (state: State): boolean => {
    return (state !== null);
};

export const ServiceCharge: FC<Props & WizardCommonProps & WizardStateProps> = ({ charges, savedstate, onReady, onDirty }: (Props & WizardCommonProps & WizardStateProps)) => {
    const [state, setState] = useState<State>(() => {
        if ((savedstate as State | null) === null) {
            const chargeslist: Charges = {
                CLIENTPERSONALINCOME: { charge: null, isabsolute: false, isincluded: false },
                CLIENTPERSONALOUTCOME: { charge: null, isabsolute: false, isincluded: false },
                CLIENTPERSONALINCOMENETTING: { charge: null, isabsolute: false, isincluded: false },
                CLIENTPERSONALOUTCOMENETTING: { charge: null, isabsolute: false, isincluded: false },
                ENTERPRISEEXTERNALINCOME: { charge: null, isabsolute: false, isincluded: false },
                ENTERPRISEEXTERNALOUTCOME: { charge: null, isabsolute: false, isincluded: false },
            };
    
            for(let i = 0; i < charges.length; i++) {
                chargeslist[charges[i]].charge = 0;
            }
            return ({ type: "SERVICECHARGE", charges: chargeslist });
        }
        return { ...(savedstate as State) };
    });

    useEffect(() => {
        validate(state)? onReady({ ...state }, false): onDirty({ ...state });
    }, [state]);

    const onChargeEnterpriseExternalIncome = (charge: number) => {
        setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALINCOME: { ...state.charges.ENTERPRISEEXTERNALINCOME, charge }}}));
    };
    const onChargeEnterpriseExternalOutcome = (charge: number) => {
        setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALOUTCOME: { ...state.charges.ENTERPRISEEXTERNALOUTCOME, charge }}}));
    };
    const onChargeClientPersonalIncome = (charge: number) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOME: { ...state.charges.CLIENTPERSONALINCOME, charge }}}));
    };
    const onChargeClientPersonalOutcome = (charge: number) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOME: { ...state.charges.CLIENTPERSONALOUTCOME, charge }}}));
    };
    const onChargeClientPersonalNettingIncome = (charge: number) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOMENETTING: { ...state.charges.CLIENTPERSONALINCOMENETTING, charge }}}));
    };
    const onChargeClientPersonalNettingOutcome = (charge: number) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOMENETTING: { ...state.charges.CLIENTPERSONALOUTCOMENETTING, charge }}}));
    };

    const onChargeEnterpriseExternalIncomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALINCOME: { ...state.charges.ENTERPRISEEXTERNALINCOME, isabsolute: event.target.checked, charge: 0 }}}));
    }
    const onChargeEnterpriseExternalOutcomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, ENTERPRISEEXTERNALOUTCOME: { ...state.charges.ENTERPRISEEXTERNALOUTCOME, isabsolute: event.target.checked, charge: 0 }}}));
    };
    const onChargeClientPersonalIncomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOME: { ...state.charges.CLIENTPERSONALINCOME, isabsolute: event.target.checked, charge: 0 }}}));
    };
    const onChargeClientPersonalOutcomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOME: { ...state.charges.CLIENTPERSONALOUTCOME, isabsolute: event.target.checked, charge: 0 }}}));
    };
    const onChargeClientPersonalNettingIncomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALINCOMENETTING: { ...state.charges.CLIENTPERSONALINCOMENETTING, isabsolute: event.target.checked, charge: 0 }}}));
    };
    const onChargeClientPersonalNettingOutcomeOption1 = (event: CheckboxChangeEvent) => {
        setState(state => ({ ...state, charges: { ...state.charges, CLIENTPERSONALOUTCOMENETTING: { ...state.charges.CLIENTPERSONALOUTCOMENETTING, isabsolute: event.target.checked, charge: 0 }}}));
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

    const stylecheckbox: CSSProperties = { fontFamily: 'Roboto', fontSize: "1rem" };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                Определение стоимости обслуживания
            </div>
            {
                state.charges.ENTERPRISEEXTERNALOUTCOME.charge !== null?
                    <>
                        <div className={[styles["enterprise-external-outcome-label"], styles["element"]].join(" ")}>
                            <label>Отправка с внешнего счёта:</label>
                        </div>
                        <div className={[styles["enterprise-external-outcome-value"], styles["element"]].join(" ")}>
                            <Decimal
                                handler={onChargeEnterpriseExternalOutcome}
                                locked={false}
                                minimumFractionDigits={state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute? 2: 5}
                                maximumFractionDigits={state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute? 2: 5}
                                style={state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute? "DECIMAL": "PERCENT"}
                                value={state.charges.ENTERPRISEEXTERNALOUTCOME.charge}
                                validator={(value) => state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute || !state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute && value < Settings.maxChargePercent}
                            />
                        </div>
                        <div className={[styles["enterprise-external-outcome-option1"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeEnterpriseExternalOutcomeOption1}
                                checked={state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["enterprise-external-outcome-option2"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeEnterpriseExternalOutcomeOption2}
                                checked={state.charges.ENTERPRISEEXTERNALOUTCOME.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
            {
                state.charges.ENTERPRISEEXTERNALINCOME.charge !== null?
                    <>
                        <div className={[styles["enterprise-external-income-label"], styles["element"]].join(" ")}>
                            <label>Приём на внешний счёт:</label>
                        </div>
                        <div className={[styles["enterprise-external-income-value"], styles["element"]].join(" ")}>
                            <Decimal
                                handler={onChargeEnterpriseExternalIncome}
                                locked={false}
                                minimumFractionDigits={state.charges.ENTERPRISEEXTERNALINCOME.isabsolute? 2: 5}
                                maximumFractionDigits={state.charges.ENTERPRISEEXTERNALINCOME.isabsolute? 2: 5}
                                style={state.charges.ENTERPRISEEXTERNALINCOME.isabsolute? "DECIMAL": "PERCENT"}
                                value={state.charges.ENTERPRISEEXTERNALINCOME.charge}
                                validator={(value) => state.charges.ENTERPRISEEXTERNALINCOME.isabsolute || !state.charges.ENTERPRISEEXTERNALINCOME.isabsolute && value < Settings.maxChargePercent}
                            />
                        </div>
                        <div className={[styles["enterprise-external-income-option1"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeEnterpriseExternalIncomeOption1}
                                checked={state.charges.ENTERPRISEEXTERNALINCOME.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["enterprise-external-income-option2"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeEnterpriseExternalIncomeOption2}
                                checked={state.charges.ENTERPRISEEXTERNALINCOME.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
            {
                state.charges.CLIENTPERSONALOUTCOME.charge !== null?
                    <>
                        <div className={[styles["personal-outcome-label"], styles["element"]].join(" ")}>
                            <label>Отправка по заявке:</label>
                        </div>
                        <div className={[styles["personal-outcome-value"], styles["element"]].join(" ")}>
                            <Decimal
                                handler={onChargeClientPersonalOutcome}
                                locked={false}
                                minimumFractionDigits={state.charges.CLIENTPERSONALOUTCOME.isabsolute? 2: 5}
                                maximumFractionDigits={state.charges.CLIENTPERSONALOUTCOME.isabsolute? 2: 5}
                                style={state.charges.CLIENTPERSONALOUTCOME.isabsolute? "DECIMAL": "PERCENT"}
                                value={state.charges.CLIENTPERSONALOUTCOME.charge}
                                validator={(value) => state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute || !state.charges.ENTERPRISEEXTERNALOUTCOME.isabsolute && value < Settings.maxChargePercent}

                            />
                        </div>
                        <div className={[styles["personal-outcome-option1"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeClientPersonalOutcomeOption1}
                                checked={state.charges.CLIENTPERSONALOUTCOME.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["personal-outcome-option2"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeClientPersonalOutcomeOption2}
                                checked={state.charges.CLIENTPERSONALOUTCOME.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
            {
                state.charges.CLIENTPERSONALINCOME.charge !== null?
                    <>
                        <div className={[styles["personal-income-label"], styles["element"]].join(" ")}>
                            <label>Приём по заявке:</label>
                        </div>
                        <div className={[styles["personal-income-value"], styles["element"]].join(" ")}>
                            <Decimal
                                handler={onChargeClientPersonalIncome}
                                locked={false}
                                minimumFractionDigits={state.charges.CLIENTPERSONALINCOME.isabsolute? 2: 5}
                                maximumFractionDigits={state.charges.CLIENTPERSONALINCOME.isabsolute? 2: 5}
                                style={state.charges.CLIENTPERSONALINCOME.isabsolute? "DECIMAL": "PERCENT"}
                                value={state.charges.CLIENTPERSONALINCOME.charge}
                                validator={(value) => state.charges.CLIENTPERSONALINCOME.isabsolute || !state.charges.CLIENTPERSONALINCOME.isabsolute && value < Settings.maxChargePercent}

                            />
                        </div>
                        <div className={[styles["personal-income-option1"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeClientPersonalIncomeOption1}
                                checked={state.charges.CLIENTPERSONALINCOME.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["personal-income-option2"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeClientPersonalIncomeOption2}
                                checked={state.charges.CLIENTPERSONALINCOME.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
            {
                state.charges.CLIENTPERSONALOUTCOMENETTING.charge !== null?
                    <>
                        <div className={[styles["personal-netting-outcome-label"], styles["element"]].join(" ")}>
                            <label>Взаимозачёт отправка:</label>
                        </div>
                        <div className={[styles["personal-netting-outcome-value"], styles["element"]].join(" ")}>
                            <Decimal
                                handler={onChargeClientPersonalNettingOutcome}
                                locked={false}
                                minimumFractionDigits={state.charges.CLIENTPERSONALOUTCOMENETTING.isabsolute? 2: 5}
                                maximumFractionDigits={state.charges.CLIENTPERSONALOUTCOMENETTING.isabsolute? 2: 5}
                                style={state.charges.CLIENTPERSONALOUTCOMENETTING.isabsolute? "DECIMAL": "PERCENT"}
                                value={state.charges.CLIENTPERSONALOUTCOMENETTING.charge}
                                validator={(value) => state.charges.CLIENTPERSONALOUTCOMENETTING.isabsolute || !state.charges.CLIENTPERSONALOUTCOMENETTING.isabsolute && value < Settings.maxChargePercent}
                            />
                        </div>
                        <div className={[styles["personal-netting-outcome-option1"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeClientPersonalNettingOutcomeOption1}
                                checked={state.charges.CLIENTPERSONALOUTCOMENETTING.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["personal-netting-outcome-option2"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeClientPersonalNettingOutcomeOption2}
                                checked={state.charges.CLIENTPERSONALOUTCOMENETTING.isincluded}>%% Сверх</Checkbox>
                        </div>
                    </>
                    : null
            }
            {
                state.charges.CLIENTPERSONALINCOMENETTING.charge !== null?
                    <>
                        <div className={[styles["personal-netting-income-label"], styles["element"]].join(" ")}>
                            <label>Взаимозачёт приём:</label>
                        </div>
                        <div className={[styles["personal-netting-income-value"], styles["element"]].join(" ")}>
                            <Decimal
                                handler={onChargeClientPersonalNettingIncome}
                                locked={false}
                                minimumFractionDigits={state.charges.CLIENTPERSONALINCOMENETTING.isabsolute? 2: 5}
                                maximumFractionDigits={state.charges.CLIENTPERSONALINCOMENETTING.isabsolute? 2: 5}
                                style={state.charges.CLIENTPERSONALINCOMENETTING.isabsolute? "DECIMAL": "PERCENT"}
                                value={state.charges.CLIENTPERSONALINCOMENETTING.charge}
                                validator={(value) => state.charges.CLIENTPERSONALINCOMENETTING.isabsolute || !state.charges.CLIENTPERSONALINCOMENETTING.isabsolute && value < Settings.maxChargePercent}
                            />
                        </div>
                        <div className={[styles["personal-netting-income-option1"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeClientPersonalNettingIncomeOption1}
                                checked={state.charges.CLIENTPERSONALINCOMENETTING.isabsolute}>Значение</Checkbox>
                        </div>
                        <div className={[styles["personal-netting-income-option2"], styles["element"]].join(" ")}>
                            <Checkbox
                                style={stylecheckbox}
                                onChange={onChargeClientPersonalNettingIncomeOption2}
                                checked={state.charges.CLIENTPERSONALINCOMENETTING.isincluded}>%% Сверх</Checkbox>
                        </div>
                        </>
                    : null
            }
        </div>
    );
};
