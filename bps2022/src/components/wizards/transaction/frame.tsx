import React, { FC, useState } from "react";
import { QuestionOutlined, LeftOutlined, RightOutlined, CheckOutlined, UndoOutlined } from '@ant-design/icons';

import { TransactionTypesIdentity, TransactionGroupSelector, WizardPagesTypesUnion, automaton } from '../../../domain/automaton/automaton';

import { Selector } from './components/selector/selector';
import { BankAccount } from './components/bankaccount/bankaccount';
import { CashAccount } from './components/cashaccount/cashaccount';
import { PersonalAccount } from './components/personalaccount/personalaccount';
import { ExternalAccount } from './components/externalaccount/externalaccount';
import { Narrowing } from './components/narrowing/narrowing';
import { Sums } from './components/sums/sums';
import { Confirmation } from './components/confirmation/confirmation';
import { Article } from './components/article/article';
import { Error } from './components/error/error';

import { Params as ParamsBankAccountRegistration, Registration as BankAccountRegistration } from '../../wizards/accounts/bankaccount/components/registration';
import { Params as ParamsOrganizationRegistration, Registration as OrganizationRegistration } from '../../wizards/organization/components/registration';

import styles from './frame.module.css';

export const Frame: FC = () => {
    const [step, setStep] = useState(-2)
    const [selection, setSelection] = useState<{ origin: TransactionGroupSelector | null, target: TransactionGroupSelector | null}>({ origin: null, target: null });
    const [transaction, setTransaction] = useState<TransactionTypesIdentity | null>(null);
    const [queue, setQueue] = useState<WizardPagesTypesUnion[]>([]);

    const onOrigin = (origin: string) => {
        setSelection(selection => ({ ...selection, origin: origin as TransactionGroupSelector }));
    };
    const onTarget = (target: string) => {
        setSelection(selection => ({ ...selection, target: target as TransactionGroupSelector }));
    };
    const onAccount = (id: number) => { console.log(id)};
    const onTransaction = (transaction_id: TransactionTypesIdentity) => {
        setTransaction(() => transaction_id);
        setQueue(() => [...automaton.filter(item => item[0] === transaction_id)[0][3]!]);
    };
    const onSums = (sum: number) => { console.log(sum)};
    const onSumsCurrency = (currency: string) => { console.log(currency)};
    const onSumsExchange = (exchange: boolean) => { console.log(exchange)};

    const stepNext = () => {
        if (step === -1 && (selection.origin === null || selection.target === null)) return;
        if (step < 0 || step < queue.length - 1) setStep(step => step + 1);
    }
    const stepPrev = () => {
        if (step === -2) return;
        setStep(step => step - 1);
    }
    const onReady = (params: ParamsOrganizationRegistration) => {
        console.log(params);
    }

    const renderPages = (step: number) => {
        if (step === -2) {
            return (<Selector onOrigin={onOrigin} onTarget={onTarget} origin={selection.origin} target={selection.target}/>);
        } else if (step === -1) {
            return (<Narrowing origin={selection.origin} target={selection.target} transaction={transaction} onTransaction={onTransaction}/>);
        } else {
            const page = queue[step];
            switch (page.type) {
                case "SUMEXCHANGE":
                    return (<Sums exchange={page.exchange} onOriginSum={onSums} onTargetSum={onSums} onOriginCurrency={onSumsCurrency} onTargetCurrency={onSumsCurrency} onRate={onSums} onExchange={onSumsExchange}/>);
                case "BANKACCOUNT":
                    return (<BankAccount primary={page.primary} subtype={page.subtype} direction={page.direction} onAccount={onAccount}/>);
                case "CASHACCOUNT":
                    return (<CashAccount primary={page.primary} subtype={page.subtype} direction={page.direction} onAccount={onAccount}/>);
                case "PERSONALACCOUNT":
                    return (<PersonalAccount primary={page.primary} subtype={page.subtype} direction={page.direction} onAccount={onAccount}/>);
                case "LENDINGACCOUNT":
                    return null;
                case "EXTERNALACCOUNT":
                    return (<ExternalAccount primary={page.primary} subtype={page.subtype} direction={page.direction} onAccount={onAccount}/>);
                case "COFFERACCOUNT":
                    return null;
                case "OVERDRAFT":
                    return null;
                case "SERVICEFEE":
                    return null;
                case "ARTICLE":
                    return (<Article subtype={page.subtype} onAccount={onAccount}/>);
                case "CONFIRMATION":
                    return (<Confirmation onConfirm={console.log} transaction={transaction}/>);
                default:
                    return <Error></Error>
            }
        }
    }

    return (
        <div className={styles.frame}>
            <div className={styles.header}>
                Создание транзакции
            </div>
            <div className={styles.pages}>
                {/* { renderPages(step) } */}
                <OrganizationRegistration context="SENDER" subtype="EXTERNAL" onReady={onReady}/>
            </div>
            <div className={styles.navigation}>
                <div className={styles["navigation-left"]}>
                    <div className={styles["navigation-button"]}><div><QuestionOutlined/></div></div>
                </div>
                <div className={styles["navigation-right"]}>
                    <div className={styles["navigation-button"]} onClick={stepPrev}><div><LeftOutlined/></div></div>
                    <div className={styles["navigation-button"]} onClick={stepNext}><div><RightOutlined/></div></div>
                    <div className={styles["navigation-button"]}><div><CheckOutlined/></div></div>
                    <div className={styles["navigation-button"]}><div><UndoOutlined/></div></div>
                </div>
            </div>
        </div>
    );
};
