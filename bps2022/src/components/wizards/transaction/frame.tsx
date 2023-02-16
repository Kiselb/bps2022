import React, { FC, useState, useRef, useEffect } from "react";
import { QuestionOutlined, LeftOutlined, RightOutlined, CheckOutlined, UndoOutlined } from '@ant-design/icons';

import { TransactionTypesIdentity, TransactionGroupSelector, WizardPagesTypesUnion, automaton, isRegularPage } from '../../../domain/automaton/automaton';

import { Selector } from './components/selector/selector';
import { Roadmap } from './components/roadmap/roadmap';
import { State as BankAccountState, BankAccount } from './components/bankaccount/bankaccount';
import { State as CashAccountState, CashAccount } from './components/cashaccount/cashaccount';
import { State as PersonalAccountState, PersonalAccount } from './components/personalaccount/personalaccount';
import { State as ExternalAccountState, ExternalAccount } from './components/externalaccount/externalaccount';
import { Narrowing } from './components/narrowing/narrowing';
import { State as SumsState, Sums } from './components/sums/sums';
import { State as ConfirmationState, Confirmation } from './components/confirmation/confirmation';
import { State as ArticleState, Article } from './components/article/article';
import { State as ServiceChargeState, ServiceCharge } from './components/servicecharge/servicecharge';
import { Error } from './components/error/error';

import { State as BankAccountRegistrationState, Registration as BankAccountRegistration } from '../../wizards/accounts/bankaccount/components/registration';
import { State as OrganizationRegistrationState, Registration as OrganizationRegistration } from '../../wizards/organization/components/registration';
import { State as ArticleRegistrationState, Registration as ArticleRegistration } from '../../wizards/article/registration';

import styles from './frame.module.css';

type State = {
    step: number,
    selection : {
        origin: TransactionGroupSelector | null,
        target: TransactionGroupSelector | null,
    },
    transactionid: TransactionTypesIdentity | null,
    queue: WizardPagesTypesUnion[],
};

export const Frame: FC = () => {
    const [state, setState] = useState<State>(
        {
            step: -2,
            selection: {
                origin: null,
                target: null,
            },
            transactionid: null,
            queue: [],
        }
    );
    const pagesstate = useRef({
        regnext: false,
        validated: true,
        storage: new Map(),
        history: [-2],
    });
    const onOrigin = (origin: string) => {
        setState(state => ({...state, selection: {...state.selection, origin: origin as TransactionGroupSelector }}));
    };
    const onTarget = (target: string) => {
        setState(state => ({...state, selection: {...state.selection, target: target as TransactionGroupSelector }}));
    };
    const onTransaction = (transactionid: TransactionTypesIdentity) => {
        setState(state => ({...state, transactionid, queue: [...automaton.filter(item => item[0] === transactionid)[0][3] || []] }));
    };
    const stepNext = () => {
        if (!pagesstate.current.validated) return;
        if (state.step === -2 && (state.selection.origin === null || state.selection.target === null)) return;
        if (state.step === -1 && state.transactionid === null) return;
        if (state.step >= state.queue.length - 1) return;

        if (state.step < 0) {
            setState(state => ({...state, step: state.step + 1 }));
            pagesstate.current.validated = true;
            return;
        }
        if (pagesstate.current.regnext) {
            setState(state => ({...state, step: state.step + 1 }));
            pagesstate.current.validated = false;
            return;
        }
        for(let i = state.step + 1; i < state.queue.length; i++) {
            if (isRegularPage(state.queue[i])) {
                setState(state => ({...state, step: i }));
                pagesstate.current.validated = false;
                return;
            }
        }
    };
    const stepPrev = () => {
        if (pagesstate.current.history.length > 1) {
            pagesstate.current.history.pop();
            setState(state => ({...state, step: pagesstate.current.history[pagesstate.current.history.length - 1] }));
            if (pagesstate.current.history[pagesstate.current.history.length - 1] === -2) {
                setState(state => ({...state, queue: [] }));
            }
        }
    };
    const onReady = (pagestate:
        | BankAccountState
        | BankAccountRegistrationState
        | OrganizationRegistrationState
        | ArticleRegistrationState
        | SumsState
        | CashAccountState
        | PersonalAccountState
        | ExternalAccountState
        | ArticleState
        | ConfirmationState
        | ServiceChargeState
    , registration: boolean) => {
        pagesstate.current.regnext = registration;
        pagesstate.current.validated = true;
        pagesstate.current.storage.set(state.queue[state.step].identity, {...pagestate});
    };

    const CurrentPage: FC<{ state: State }> = ({ state }) => {
        if (state.step === -2) {
            return (<Selector onOrigin={onOrigin} onTarget={onTarget} origin={state.selection.origin} target={state.selection.target}/>);
        } else if (state.step === -1) {
            return (<Narrowing origin={state.selection.origin} target={state.selection.target} transaction={state.transactionid} onTransaction={onTransaction}/>);
        } else {
            const page = state.queue[state.step];
            switch (page.type) {
                case "SUMEXCHANGE":
                    return (<Sums exchange={page.exchange} savedstate={pagesstate.current.storage.has(state.queue[state.step].identity)? pagesstate.current.storage.get(state.queue[state.step].identity): null} onReady={onReady}/>);
                case "BANKACCOUNT":
                    return (<BankAccount primary={page.primary} subtype={page.subtype} direction={page.direction} savedstate={pagesstate.current.storage.has(state.queue[state.step].identity)? pagesstate.current.storage.get(state.queue[state.step].identity): null} onReady={onReady}/>);
                case "CASHACCOUNT":
                    return (<CashAccount primary={page.primary} subtype={page.subtype} direction={page.direction} savedstate={pagesstate.current.storage.has(state.queue[state.step].identity)? pagesstate.current.storage.get(state.queue[state.step].identity): null} onReady={onReady}/>);
                case "PERSONALACCOUNT":
                    return (<PersonalAccount primary={page.primary} subtype={page.subtype} direction={page.direction} savedstate={pagesstate.current.storage.has(state.queue[state.step].identity)? pagesstate.current.storage.get(state.queue[state.step].identity): null} onReady={onReady}/>);
                case "LENDINGACCOUNT":
                    return null;
                case "EXTERNALACCOUNT":
                    return (<ExternalAccount primary={page.primary} subtype={page.subtype} direction={page.direction} savedstate={pagesstate.current.storage.has(state.queue[state.step].identity)? pagesstate.current.storage.get(state.queue[state.step].identity): null} onReady={onReady}/>);
                case "COFFERACCOUNT":
                    return null;
                case "OVERDRAFT":
                    return null;
                case "SERVICECHARGE":
                    return (<ServiceCharge wizard={state.queue} onReady={onReady}/>);
                case "ARTICLE":
                    return (<Article subtype={page.subtype} savedstate={pagesstate.current.storage.has(state.queue[state.step].identity)? pagesstate.current.storage.get(state.queue[state.step].identity): null} onReady={onReady}/>);
                case "CONFIRMATION":
                    return (<Confirmation transaction={state.transactionid} onReady={onReady}/>);
                case "REGBANKACCOUNT":
                    return (<BankAccountRegistration context={page.direction === -1? "SENDER": "RECEIVER"} subtype="EXTERNAL" savedstate={pagesstate.current.storage.has(state.queue[state.step].identity)? pagesstate.current.storage.get(state.queue[state.step].identity): null} onReady={onReady}/>);
                case "REGORGANIZATION":
                    return (<OrganizationRegistration context={page.direction === -1? "SENDER": "RECEIVER"} subtype="EXTERNAL" savedstate={pagesstate.current.storage.has(state.queue[state.step].identity)? pagesstate.current.storage.get(state.queue[state.step].identity): null} onReady={onReady}/>);
                case "REGARTICLE":
                    return (<ArticleRegistration subtype={page.subtype} savedstate={pagesstate.current.storage.has(state.queue[state.step].identity)? pagesstate.current.storage.get(state.queue[state.step].identity): null} onReady={onReady}/>);
                default:
                    return <Error></Error>
            }
        }
    };

    useEffect(() => {
        if (pagesstate.current.history[pagesstate.current.history.length - 1] !== state.step){
            pagesstate.current.history.push(state.step);
            console.log(pagesstate.current.history);
        }
    }, [state.step]);

    return (
        <div className={styles.frame}>
            <div className={styles.header}>
                Создание транзакции
            </div>
            <div className={styles.roadmap}>
                <Roadmap wizard={state.queue} current={state.step}/>
            </div>
            <div className={styles.pages}>
                <CurrentPage state={state} />
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
