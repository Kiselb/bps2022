import React, { FC, useState, useRef, useEffect } from "react";
import { QuestionOutlined, LeftOutlined, RightOutlined, CheckOutlined, UndoOutlined } from '@ant-design/icons';

import { TransactionTypesIdentity, TransactionGroupSelector, WizardPagesTypesUnion, automaton, isRegularPage } from '../../../domain/automaton/automaton';

import { Selector } from './components/selector/selector';
import { Roadmap } from './components/roadmap/roadmap';
import { State as BankAccountState, BankAccount } from './components/bankaccount/bankaccount';
import { State as CashAccountState, CashAccount } from './components/cashaccount/cashaccount';
import { State as PersonalAccountState, PersonalAccount } from './components/personalaccount/personalaccount';
import { State as ExternalAccountState, ExternalAccount } from './components/externalaccount/externalaccount';
import { State as LendingAccountState, LendingAccount } from './components/lendingaccount/lendingaccount';
import { State as CofferAccountState, CofferAccount } from './components/cofferaccount/cofferaccount';
import { State as OverdraftState, Overdraft } from './components/overdraft/overdraft';
import { Narrowing } from './components/narrowing/narrowing';
import { State as SumsState, Sums } from './components/sums/sums';
import { State as ConfirmationState, Confirmation } from './components/confirmation/confirmation';
import { State as ArticleState, Article } from './components/article/article';
import { State as ServiceChargeState, ServiceCharge } from './components/servicecharge/servicecharge';
import { Error } from './components/error/error';

import { State as BankAccountRegistrationState, Registration as BankAccountRegistration } from '../../wizards/accounts/bankaccount/components/registration';
import { State as OrganizationRegistrationState, Registration as OrganizationRegistration } from '../../wizards/organization/components/registration';
import { State as PersonalAccountRegistrationState, Registration as PersonalAccountRegistration } from '../clients/components/registration';
import { State as OverdraftRegistrationState, Registration as OverdraftRegistration } from '../../wizards/accounts/overdraft/components/registration';
import { State as ArticleRegistrationState, Registration as ArticleRegistration } from '../../wizards/article/registration';

import styles from './frame.module.css';
import { Settings } from "../../../domain/settings/settings";

type WizardState = {
    nextisregistration: boolean,
    validated: boolean,
    storage: Map<
        string,
        BankAccountState
        | BankAccountRegistrationState
        | OrganizationRegistrationState
        | PersonalAccountRegistrationState
        | OverdraftRegistrationState
        | ArticleRegistrationState
        | SumsState
        | CashAccountState
        | PersonalAccountState
        | LendingAccountState
        | ExternalAccountState
        | CofferAccountState
        | OverdraftState
        | ArticleState
        | ConfirmationState
        | ServiceChargeState
    >,
    history: number[],
    originsumvalue: number,
    targetsumvalue: number,
    originsumcurrency: string,
    targetsumcurrency: string,
    originclientid: number | null,
    targetclientid: number | null,
};
type State = {
    step: number,
    selection : {
        origin: TransactionGroupSelector | null,
        target: TransactionGroupSelector | null,
    },
    transactionid: TransactionTypesIdentity | null,
    clicks: number;
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
            clicks: 0,
            queue: [],
        }
    );
    const pagesstate = useRef<WizardState>({
        nextisregistration: false,
        validated: true,
        storage: new Map(),
        history: [-2],
        originsumvalue: 0,
        originsumcurrency: "RUB",
        originclientid: null,
        targetsumvalue: 0,
        targetsumcurrency: "RUB",
        targetclientid: null,
    });

    const onOrigin = (origin: string) => {
        setState(state => ({...state, selection: {...state.selection, origin: origin as TransactionGroupSelector }}));
    };
    const onTarget = (target: string) => {
        setState(state => {
            const currentclicks = (target === state.selection.target)? state.clicks + 1: 1;
            const step = currentclicks > Settings.clicksOnNext? state.step + 1: state.step;
            return ({...state, step, clicks: currentclicks > Settings.clicksOnNext? 1: currentclicks, selection: {...state.selection, target: target as TransactionGroupSelector }});
        });
    };
    const onTransaction = (transactionid: TransactionTypesIdentity) => {
        setState(state => {
            const currentclicks = (transactionid === state.transactionid)? state.clicks + 1: 1;
            const step = currentclicks > Settings.clicksOnNext? state.step + 1: state.step;
            return ({...state, step, clicks: currentclicks > Settings.clicksOnNext? 1: currentclicks, transactionid, queue: [...automaton.filter(item => item[0] === transactionid)[0][3] || []] });
        });
    };
    const stepNext = () => {
        if (state.step === state.queue.length - 1) return;

        if (state.step === -2) {
            if (state.selection.origin !== null && state.selection.target !== null) {
                setState(state => ({...state, step: -1 }));
                //pagesstate.current.validated = true;
            }
        } else if (state.step === -1) {
            if (state.transactionid !== null) {
                setState(state => ({...state, step: 0 }));
                //pagesstate.current.validated = true;
            }
        } else {
            if (pagesstate.current.validated) {
                if (pagesstate.current.nextisregistration) {
                    setState(state => ({...state, step: state.step + 1 }));
                } else {
                    for(let i = state.step + 1; i < state.queue.length; i++) {
                        if (isRegularPage(state.queue[i])) {
                            setState(state => ({...state, step: i }));
                            break;
                        }
                    }
                }
                pagesstate.current.validated = false;
            }
        }
    };
    const stepPrev = () => {
        if (pagesstate.current.history.length > 1) {
            pagesstate.current.history.pop();
            setState(state => ({ ...state, step: pagesstate.current.history[pagesstate.current.history.length - 1] }));
        }
    };
    const onReady = (pagestate:
        BankAccountState
        | BankAccountRegistrationState
        | OrganizationRegistrationState
        | PersonalAccountRegistrationState
        | OverdraftRegistrationState
        | ArticleRegistrationState
        | SumsState
        | CashAccountState
        | PersonalAccountState
        | LendingAccountState
        | ExternalAccountState
        | CofferAccountState
        | OverdraftState
        | ArticleState
        | ConfirmationState
        | ServiceChargeState
    , registration: boolean) => {
        pagesstate.current.nextisregistration = registration;
        pagesstate.current.validated = true;
        pagesstate.current.storage.set(state.queue[state.step].identity, {...pagestate});

        const page = state.queue[state.step];
        if (page.type === "BANKACCOUNT" && pagestate.type === "BANKACCOUNT") {
            if (page.direction === -1) {
                pagesstate.current.originclientid = pagestate.clientid;
            } else {
                pagesstate.current.targetclientid = pagestate.clientid;
            }
        }
        if (page.type === "REGBANKACCOUNT" && pagestate.type === "REGBANKACCOUNT") {
            if (page.direction === -1) {
                pagesstate.current.originclientid = pagestate.clientid;
            } else {
                pagesstate.current.targetclientid = pagestate.clientid;
            }
        }
        if (page.type === "REGORGANIZATION" && pagestate.type === "REGORGANIZATION") {
            if (page.direction === -1) {
                pagesstate.current.originclientid = pagestate.clientid;
            } else {
                pagesstate.current.targetclientid = pagestate.clientid;
            }
        }
        if (page.type === "EXTERNALACCOUNT" && pagestate.type === "EXTERNALACCOUNT") {
            if (page.direction === -1 && page.primary) {
                pagesstate.current.originclientid = pagestate.ownerid;
                pagesstate.current.targetclientid = pagestate.ownerid;
            }
        }
        if (page.type === "SUMEXCHANGE" && pagestate.type === "SUMEXCHANGE") {
            pagesstate.current.originsumvalue = pagestate.originvalue;
            pagesstate.current.targetsumvalue = pagestate.targetvalue;
            pagesstate.current.originsumcurrency = pagestate.origincurrency;
            pagesstate.current.targetsumcurrency = pagestate.targetcurrency;
        }
    };
    const onDirty = (pagestate:
        BankAccountState
        | BankAccountRegistrationState
        | OrganizationRegistrationState
        | PersonalAccountRegistrationState
        | OverdraftRegistrationState
        | ArticleRegistrationState
        | SumsState
        | CashAccountState
        | PersonalAccountState
        | LendingAccountState
        | ExternalAccountState
        | CofferAccountState
        | OverdraftState
        | ArticleState
        | ConfirmationState
        | ServiceChargeState) => {
        pagesstate.current.validated = false;
        pagesstate.current.storage.set(state.queue[state.step].identity, {...pagestate});
        const page = state.queue[state.step];
        if ("client" in page) {
            if ("direction" in page) {
                if ("clientid" in pagestate) {
                    if (page.direction === -1) {
                        pagesstate.current.originclientid = null;
                    } else {
                        pagesstate.current.targetclientid = null;
                    }
                }
            }
        }
    };
    const onNext = (): void => stepNext();

    const getSavedState = (identity: string):
        BankAccountState
        | BankAccountRegistrationState
        | OrganizationRegistrationState
        | PersonalAccountRegistrationState
        | OverdraftRegistrationState
        | ArticleRegistrationState
        | SumsState
        | CashAccountState
        | PersonalAccountState
        | LendingAccountState
        | ExternalAccountState
        | CofferAccountState
        | OverdraftState
        | ArticleState
        | ConfirmationState
        | ServiceChargeState
        | null => pagesstate.current.storage.get(identity) || null;

    const CurrentPage: FC<{ state: State }> = ({ state }) => {
        if (state.step === -2) {
            return (
                <Selector
                    onOrigin={onOrigin}
                    onTarget={onTarget}
                    origin={state.selection.origin}
                    target={state.selection.target}
                />
            );
        } else if (state.step === -1) {
            return (
                <Narrowing
                    origin={state.selection.origin}
                    target={state.selection.target}
                    transaction={state.transactionid}
                    onTransaction={onTransaction}
                />
            );
        } else {
            const page = state.queue[state.step];
            switch (page.type) {
                case "SUMEXCHANGE":
                    return (
                        <Sums
                            exchange={page.exchange}
                            savedstate={getSavedState(state.queue[state.step].identity) as (SumsState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                        />
                    );
                case "BANKACCOUNT":
                    return (
                        <BankAccount
                            primary={page.primary}
                            subtype={page.subtype}
                            direction={page.direction}
                            regallowed={page.registration}
                            client={page.client}
                            savedstate={getSavedState(state.queue[state.step].identity) as (BankAccountState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                            onNext={onNext}
                        />
                    );
                case "CASHACCOUNT":
                    return (
                        <CashAccount
                            primary={page.primary}
                            subtype={page.subtype}
                            direction={page.direction}
                            regallowed={page.registration}
                            savedstate={getSavedState(state.queue[state.step].identity) as (CashAccountState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                            onNext={onNext}
                        />
                    );
                case "PERSONALACCOUNT":
                    return (
                        <PersonalAccount
                            primary={page.primary}
                            subtype={page.subtype}
                            direction={page.direction}
                            regallowed={page.registration}
                            savedstate={getSavedState(state.queue[state.step].identity) as (PersonalAccountState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                            onNext={onNext}
                        />
                    );
                case "LENDINGACCOUNT":
                    return (
                        <LendingAccount
                            primary={page.primary}
                            clientid={1}
                            direction={page.direction}
                            regallowed={page.registration}
                            savedstate={getSavedState(state.queue[state.step].identity) as (LendingAccountState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                            onNext={onNext}
                        />
                    );
                case "EXTERNALACCOUNT":
                    return (
                        <ExternalAccount
                            primary={page.primary}
                            subtype={page.subtype}
                            direction={page.direction}
                            regallowed={page.registration}
                            clientid={page.direction === -1? pagesstate.current.originclientid: pagesstate.current.targetclientid}
                            savedstate={getSavedState(state.queue[state.step].identity) as (ExternalAccountState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                            onNext={onNext}
                        />
                    );
                case "COFFERACCOUNT":
                    return (
                        <CofferAccount
                            primary={page.primary}
                            direction={page.direction}
                            regallowed={page.registration}
                            savedstate={getSavedState(state.queue[state.step].identity) as (CofferAccountState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                            onNext={onNext}
                        />
                    );
                case "OVERDRAFT":
                    return (
                        <Overdraft
                            primary={page.primary}
                            direction={page.direction}
                            regallowed={page.registration}
                            savedstate={getSavedState(state.queue[state.step].identity) as (OverdraftState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                            onNext={onNext}
                        />
                    );
                case "SERVICECHARGE":
                    return (
                        <ServiceCharge
                            charges={page.charges}
                            savedstate={getSavedState(state.queue[state.step].identity) as (ServiceChargeState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                        />
                    );
                case "ARTICLE":
                    return (
                        <Article
                            subtype={page.subtype}
                            savedstate={getSavedState(state.queue[state.step].identity) as (ArticleState | null)}
                            regallowed={page.registration}
                            onReady={onReady}
                            onDirty={onDirty}
                            onNext={onNext}
                        />
                    );
                case "CONFIRMATION":
                    return (
                        <Confirmation
                            transaction={state.transactionid}
                            autocomplete={automaton.filter(transaction => transaction[0] === state.transactionid)[0][4]}
                            onReady={onReady}
                        />
                    );
                case "REGBANKACCOUNT":
                    return (
                        <BankAccountRegistration
                            context={page.direction === -1? "SENDER": "RECEIVER"}
                            subtype={page.subtype}
                            client={page.client}
                            savedstate={getSavedState(state.queue[state.step].identity) as (BankAccountRegistrationState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                        />
                    );
                case "REGORGANIZATION":
                    return (
                        <OrganizationRegistration
                            context={page.direction === -1? "SENDER": "RECEIVER"}
                            subtype={page.subtype}
                            client={page.client}
                            savedstate={getSavedState(state.queue[state.step].identity) as (OrganizationRegistrationState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                        />
                    );
                case "REGPERSONALACCOUNT":
                    return (
                        <PersonalAccountRegistration
                            context={page.direction === -1? "SENDER": "RECEIVER"}
                            savedstate={getSavedState(state.queue[state.step].identity) as (PersonalAccountRegistrationState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                        />
                    );
                case "REGOVERDRAFT":
                    return (
                        <OverdraftRegistration 
                            savedstate={getSavedState(state.queue[state.step].identity) as (OverdraftRegistrationState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                        />
                    );
                case "REGARTICLE":
                    return (
                        <ArticleRegistration
                            subtype={page.subtype}
                            savedstate={getSavedState(state.queue[state.step].identity) as (ArticleRegistrationState | null)}
                            onReady={onReady}
                            onDirty={onDirty}
                        />
                    );
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
                Создание транзакции {state.step !== -2 && !!state.transactionid? "(" + automaton.filter(item => item[0] === state.transactionid)[0][0] + "): " : ""}{state.step !== -2 && !!state.transactionid? automaton.filter(item => item[0] === state.transactionid)[0][5]: ""}
            </div>
            {
                state.step !== -2?
                    <div className={styles.roadmap}>
                        <Roadmap wizard={state.queue} current={state.step}/>
                    </div>
                    : null
            }
            <div className={styles.pages}>
                <CurrentPage state={state} />
            </div>
            <div className={styles.navigation}>
                <div className={styles["navigation-center"]}>
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
