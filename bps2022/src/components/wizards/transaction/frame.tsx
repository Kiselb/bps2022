import React, { FC, useState } from "react";
import { QuestionOutlined, LeftOutlined, RightOutlined, CheckOutlined, UndoOutlined } from '@ant-design/icons';

import { TransactionTypesIdentity, TransactionAccountsTypes, TransactionAccountsInfo, automaton } from '../../../domain/automaton/automaton';

import { Selector } from './components/selector/selector';
import { BankAccount } from './components/bankaccount/bankaccount';
import { CashAccount } from './components/cashaccount/cashaccount';
import { PersonalAccount } from './components/personalaccount/personalaccount';
import { ExternalAccount } from './components/externalaccount/externalaccount';
import { Narrowing } from './components/narrowing/narrowing';
import { Sums } from './components/sums/sums';
import { Confirmation } from './components/confirmation/confirmation';
import { Error } from './components/error/error';

import styles from './frame.module.css';

export const Frame: FC = () => {
    const [step, setStep] = useState(0)
    const [selection, setSelection] = useState<{ origin: TransactionAccountsTypes | null, target: TransactionAccountsTypes | null}>({ origin: null, target: null });
    const [transaction, setTransaction] = useState<TransactionTypesIdentity | null>(null);
    const [queue, setQueue] = useState<[TransactionAccountsTypes | "SUM" | "SEL" | "NAR" | "CFN", TransactionAccountsInfo | null, boolean][]>([["SUM", null, false], ["SEL", null, false], ["NAR", null, false]]);

    const onOrigin = (origin: string) => {
        setSelection(selection => ({ ...selection, origin: origin as TransactionAccountsTypes }));
    };
    const onTarget = (target: string) => {
        setSelection(selection => ({ ...selection, target: target as TransactionAccountsTypes }));
    };
    const onAccount = (id: number) => { console.log(id)};
    const onTransaction = (id: TransactionTypesIdentity | null) => {
        setTransaction(id);
    };
    const onSums = (sum: number) => { console.log(sum)};
    const onSumsCurrency = (currency: string) => { console.log(currency)};
    const onSumsExchange = (exchange: boolean) => { console.log(exchange)};

    const stepNext = () => {
        if (step === 1) {
            if (selection.origin === null || selection.target === null) return;
        }
        else if (step === 2) {
            if (transaction === null) return;
            const origin_steps = automaton.filter(item => item[0] === transaction)[0][3];
            const target_steps = automaton.filter(item => item[0] === transaction)[0][4];

            if (origin_steps[0] !== null) setQueue(queue => [...queue, ["BAC", origin_steps[0], true]]);
            if (origin_steps[1] !== null) setQueue(queue => [...queue, ["CAA", origin_steps[1], true]]);
            if (origin_steps[2] !== null) setQueue(queue => [...queue, ["XPA", origin_steps[2], true]]);
            if (origin_steps[3] !== null) setQueue(queue => [...queue, ["PEA", origin_steps[3], true]]);

            if (target_steps[0] !== null) setQueue(queue => [...queue, ["BAC", target_steps[0], false]]);
            if (target_steps[1] !== null) setQueue(queue => [...queue, ["CAA", target_steps[1], false]]);
            if (target_steps[2] !== null) setQueue(queue => [...queue, ["XPA", target_steps[2], false]]);
            if (target_steps[3] !== null) setQueue(queue => [...queue, ["PEA", target_steps[3], false]]);

            setQueue(queue => [...queue, ["CFN", null, false]]);

            console.log(queue);
        }
        setStep(step => step + 1);
    }

    const renderPages = (step: number) => {
        console.log(`Rener step: ${step}`);
        console.log(queue[step]);
        
        switch(queue[step][0]) {
            case "SUM":
                return (<Sums onOriginSum={onSums} onTargetSum={onSums} onOriginCurrency={onSumsCurrency} onTargetCurrency={onSumsCurrency} onRate={onSums} onExchange={onSumsExchange}/>);
            case "SEL":
                return (<Selector onOrigin={onOrigin} onTarget={onTarget}/>);
            case "NAR":
                if (selection.origin !== null && selection.target !== null) {
                    return (<Narrowing origin={selection.origin} target={selection.target} onTransaction={onTransaction}/>);
                }
                return <Error></Error>
            case "BAC":
                if (queue[step][1] !== null) {
                    return (<BankAccount holder={queue[step][1]![0]} subtype={queue[step][1]![1]} direction={queue[step][2]} onAccount={onAccount}/>);
                } else {
                    return <Error></Error>
                }
            case "CAA":
                if (queue[step][1] !== null) {
                    return (<CashAccount holder={queue[step][1]![0]} subtype={queue[step][1]![1]} direction={queue[step][2]} onAccount={onAccount}/>);
                }
                return <Error></Error>
            case "PEA":
                if (queue[step][1] !== null) {
                    return (<PersonalAccount holder={queue[step][1]![0]} subtype={queue[step][1]![1]} direction={queue[step][2]} onAccount={onAccount}/>);
                }
                return <Error></Error>
            case "XPA":
                if (queue[step][1] !== null) {
                    return (<ExternalAccount holder={queue[step][1]![0]} subtype={queue[step][1]![1]} direction={queue[step][2]} onAccount={onAccount}/>);
                }
                return <Error></Error>
            case "CFN":
                return (<Confirmation onConfirm={console.log}/>);
            default:
                return null;
        }
    }

    return (
        <div className={styles.frame}>
            <div className={styles.header}>
                Создание транзакции
            </div>
            <div className={styles.pages}>
                {/* <Selector onOrigin={onOrigin} onTarget={onTarget}/> */}
                {/* <BankAccount holder="N" subtype="R" onAccount={onAccount}/> */}
                {/* <CashAccount onAccount={onAccount}/> */}
                {/* <PersonalAccount onAccount={onAccount}/> */}
                {/* <ExternalAccount onAccount={onAccount}/> */}
                {/* <Narrowing origin="BAN" target="BAN" onTransaction={onTransaction}/> */}
                {/* <Sums onOriginSum={onSums} onTargetSum={onSums} onOriginCurrency={onSumsCurrency} onTargetCurrency={onSumsCurrency} onRate={onSums} onExchange={onSumsExchange}/> */}
                {/* <Confirmation onConfirm={console.log}/> */}
                { renderPages(step) }
            </div>
            <div className={styles.navigation}>
                <div className={styles["navigation-left"]}>
                    <div className={styles["navigation-button"]}><div><QuestionOutlined/></div></div>
                </div>
                <div className={styles["navigation-right"]}>
                    <div className={styles["navigation-button"]}><div><LeftOutlined/></div></div>
                    <div className={styles["navigation-button"]} onClick={stepNext}><div><RightOutlined/></div></div>
                    <div className={styles["navigation-button"]}><div><CheckOutlined/></div></div>
                    <div className={styles["navigation-button"]}><div><UndoOutlined/></div></div>
                </div>
            </div>
        </div>
    );
};
