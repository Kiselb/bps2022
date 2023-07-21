import React, { FC, useState, useRef, useEffect, Component } from "react";
import { QuestionOutlined, LeftOutlined, RightOutlined, CheckOutlined, UndoOutlined } from '@ant-design/icons';

import { TransactionTypesIdentity, WizardStageStates, } from '../../../domain/transactions/types';
import { TransactionGroupSelector, WizardPagesTypesUnion, WizardPagesPropsUnion, } from '../../../domain/transactions/types';
import { automaton } from "../../../domain/transactions/automaton";
import { Selector } from './components/selector/selector';
import { Narrowing } from './components/narrowing/narrowing';
import { Roadmap } from './components/roadmap/roadmap';
import { Error } from './components/error/error';

import { State as BankAccountState, Props as BankAccountProps, BankAccount } from './components/bankaccount/bankaccount';
import { State as CashAccountState, CashAccount } from './components/cashaccount/cashaccount';
import { State as PersonalAccountState, PersonalAccount } from './components/personalaccount/personalaccount';
import { State as ExternalAccountState, ExternalAccount } from './components/externalaccount/externalaccount';
import { State as LendingAccountState, LendingAccount } from './components/lendingaccount/lendingaccount';
import { State as CofferAccountState, CofferAccount } from './components/cofferaccount/cofferaccount';
import { State as OverdraftState, Overdraft } from './components/overdraft/overdraft';
import { State as SumsState, Props as SumsProps, Sums } from './components/sums/sums';
import { State as ConfirmationState, Confirmation } from './components/confirmation/confirmation';
import { State as ArticleState, Article } from './components/article/article';
import { State as ServiceChargeState, ServiceCharge } from './components/servicecharge/servicecharge';

import { State as BankAccountRegistrationState, Registration as BankAccountRegistration } from '../../wizards/accounts/bankaccount/components/registration';
import { State as OrganizationRegistrationState, Registration as OrganizationRegistration } from '../../wizards/organization/components/registration';
import { State as PersonalAccountRegistrationState, Registration as PersonalAccountRegistration } from '../clients/components/registration';
import { State as OverdraftRegistrationState, Registration as OverdraftRegistration } from '../../wizards/accounts/overdraft/components/registration';
import { State as ArticleRegistrationState, Registration as ArticleRegistration } from '../../wizards/article/registration';

import styles from './frame.module.css';
import { Settings } from "../../../domain/settings/settings";

type WizardState = {
    // nextisregistration: boolean,
    // validated: boolean,
    // statesmap: Map<string, WizardStageStates>,
    //history: number[],
    // originsumvalue: number,
    // targetsumvalue: number,
    // originsumcurrency: string,
    // targetsumcurrency: string,
    // originclientid: number | null,
    // targetclientid: number | null,
    params: {
        origin: {
            clientid: number | null,
            currency: string,
        },
        target: {
            clientid: number | null,
            currency: string,
        },
    },
};
type State = {
    step: number,
    selection : {
        origin: TransactionGroupSelector | null,
        target: TransactionGroupSelector | null,
    },
    transactionid: TransactionTypesIdentity | null,
    clicks: number;
    wizardpages: WizardPagesTypesUnion[],
    history: number[],
    nextisregistration: boolean,
    validated: boolean,
    statesmap: Map<string, WizardStageStates>,
    params: WizardParams,

};
type WizardParamsKeys = "SUMORIGIN" | "SUMTARGET" | "CURRENCYORIGIN" | "CURRENCYTARGET" | "CLIENTIDORIGIN" | "CLIENTIDTARGET";
type WizardParams = { [key: string]: string | number | boolean | null };



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
            wizardpages: [],
            history: [-2],
            nextisregistration: false,
            validated: true,
            statesmap: new Map(),
            params: {
                "SUMORIGIN": null,
                "SUMTARGET": null,
                "CURRENCYORIGIN": null,
                "CURRENCYTARGET": null,
                "CLIENTIDORIGIN": null,
                "CLIENTIDTARGET": null,
            }
        }
    );
    const getParam = (param: string): string | number | boolean | null => {
        if (state.params[param] === undefined) return null;
        return state.params[param];
    };
    const setParam = (param: string, value: string | number | boolean | null): string | number | boolean | null => {
        state.params[param] = value;
        return state.params[param];
    };

    const wizardstate = useRef<WizardState>({
        // nextisregistration: false,
        // validated: true,
        // statesmap: new Map(),
        //history: [-2],
        // originsumvalue: 0,
        // originsumcurrency: "RUB",
        // originclientid: null,
        // targetsumvalue: 0,
        // targetsumcurrency: "RUB",
        // targetclientid: null,
        params: {
            origin: {
                clientid: null,
                currency: "",
            },
            target: {
                clientid: null,
                currency: "",
            },
        },
    });

    const onOrigin = (origin: string) => {
        setState(state => ({...state, transactionid: null, selection: {...state.selection, origin: origin as TransactionGroupSelector }}));
    };
    const onTarget = (target: string) => {
        setState(state => {
            const currentclicks = (target === state.selection.target)? state.clicks + 1: 1;
            const step = currentclicks > Settings.clicksOnNext? state.step + 1: state.step;
            return ({...state, transactionid: null, step, clicks: currentclicks > Settings.clicksOnNext? 1: currentclicks, selection: {...state.selection, target: target as TransactionGroupSelector }});
        });
    };
    const onTransaction = (transactionid: TransactionTypesIdentity) => {
        setState(state => {
            const currentclicks = (transactionid === state.transactionid)? state.clicks + 1: 1;
            const step = currentclicks > Settings.clicksOnNext? state.step + 1: state.step;
            return ({...state, step, clicks: currentclicks > Settings.clicksOnNext? 1: currentclicks, transactionid, wizardpages: [...automaton.filter(item => item[0] === transactionid)[0][3] || []] });
        });
    };
    const stepNextOld = () => {
        if (state.step < state.wizardpages.length - 1) {
            if (state.step === -2) {
                (state.selection.origin !== null && state.selection.target !== null) && setState(state => ({...state, step: -1 }));
            } else if (state.step === -1) {
                (state.transactionid !== null) && setState(state => ({...state, step: 0 }));
            } else {
                if (state.validated) {
                    if (state.nextisregistration) {
                        setState(state => ({...state, step: state.step + 1 }));
                    } else {
                        for(let i = state.step + 1; i < state.wizardpages.length; i++) {
                            // if (isRegularPage(state.wizardpages[i])) {
                            //     setState(state => ({...state, step: i }));
                            //     break;
                            // }
                        }
                    }
                    state.validated = false;
                }
            }
        }
    };
    const stepNext = () => {
        if (state.step < state.wizardpages.length - 1) {
            if (state.step === -2) {
                (state.selection.origin !== null && state.selection.target !== null) && setState(state => ({...state, step: -1 }));
            } else if (state.step === -1) {
                (state.transactionid !== null) && setState(state => ({...state, step: 0 }));
            } else {
                if (state.validated) {
                    if (state.nextisregistration) {
                        setState(state => ({...state, step: state.step + 1 }));
                    } else {
                        let previousissuspend = false;
                        for(let i = state.step + 1; i < state.wizardpages.length; i++) {
                            if (state.wizardpages[i].props["suspense" as keyof WizardPagesPropsUnion] === undefined && previousissuspend) {
                                setState(state => ({ ...state, step: i + 1 }));
                                break;
                            } else {
                                previousissuspend = (state.wizardpages[i].props["suspense" as keyof WizardPagesPropsUnion] !== undefined);
                            }
                        }
                    }
                    state.validated = false;
                }
            }
        }
    };
    // const stepPrev = () => {
    //     if (wizardstate.current.history.length > 1) {
    //         wizardstate.current.history.pop();
    //         setState(state => ({ ...state, step: wizardstate.current.history[wizardstate.current.history.length - 1] }));
    //     }
    // };
    const stepPrev = () => {
        if (state.history.length > 1) {
            state.history.pop();
            setState(state => ({ ...state, step: state.history[state.history.length - 1] }));
        }
    };
    const onReady = (pagestate: WizardStageStates, registration: boolean) => {
        state.nextisregistration = registration;
        state.validated = true;
        state.statesmap.set(state.wizardpages[state.step].identity, {...pagestate});

        // const page = state.wizardpages[state.step];
        // if (page.type === "BANKACCOUNT" && pagestate.type === "BANKACCOUNT") {
        //     if (page.direction === -1) {
        //         wizardstate.current.originclientid = pagestate.clientid;
        //     } else {
        //         wizardstate.current.targetclientid = pagestate.clientid;
        //     }
        // }
        // if (page.type === "REGBANKACCOUNT" && pagestate.type === "REGBANKACCOUNT") {
        //     if (page.direction === -1) {
        //         wizardstate.current.originclientid = pagestate.clientid;
        //     } else {
        //         wizardstate.current.targetclientid = pagestate.clientid;
        //     }
        // }
        // if (page.type === "REGORGANIZATION" && pagestate.type === "REGORGANIZATION") {
        //     if (page.direction === -1) {
        //         wizardstate.current.originclientid = pagestate.clientid;
        //     } else {
        //         wizardstate.current.targetclientid = pagestate.clientid;
        //     }
        // }
        // if (page.type === "EXTERNALACCOUNT" && pagestate.type === "EXTERNALACCOUNT") {
        //     if (page.direction === -1 && page.primary) {
        //         wizardstate.current.originclientid = pagestate.ownerid;
        //         wizardstate.current.targetclientid = pagestate.ownerid;
        //     }
        // }
        // if (page.type === "SUMEXCHANGE" && pagestate.type === "SUMEXCHANGE") {
        //     wizardstate.current.originsumvalue = pagestate.originvalue;
        //     wizardstate.current.targetsumvalue = pagestate.targetvalue;
        //     wizardstate.current.originsumcurrency = pagestate.origincurrency;
        //     wizardstate.current.targetsumcurrency = pagestate.targetcurrency;
        // }
    };
    const onDirty = (pagestate: WizardStageStates) => {
        state.validated = false;
        state.statesmap.set(state.wizardpages[state.step].identity, {...pagestate});

        // const page = state.wizardpages[state.step];
        // if ("client" in page) {
        //     if ("direction" in page) {
        //         if ("clientid" in pagestate) {
        //             if (page.direction === -1) {
        //                 wizardstate.current.originclientid = null;
        //             } else {
        //                 wizardstate.current.targetclientid = null;
        //             }
        //         }
        //     }
        // }
    };
    const onNexty = (): void => stepNext();

    const getSavedState = (identity: string): WizardStageStates | null => state.statesmap.get(identity) || null;

    const CurrentPageV2: FC = () => {
        //const component = { element: Selector };
        return (
            React.createElement(Selector, {
                onOrigin: onOrigin,
                onTarget: onTarget,
                origin: state.selection.origin,
                target: state.selection.target})
        );
    }

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
            const page = state.wizardpages[state.step];
            const Component = (page.component as unknown) as React.FC<WizardPagesPropsUnion>;
            const savedstate = getSavedState(state.wizardpages[state.step].identity) as WizardStageStates;
            const props = ({ ...page.props, savedstate, onReady, onDirty, onNexty, getParam, setParam });
            return (
                <Component  { ...props }/>
            );
        }
    };

    // useEffect(() => {
    //     if (wizardstate.current.history[wizardstate.current.history.length - 1] !== state.step){
    //         wizardstate.current.history.push(state.step);
    //         console.log(wizardstate.current.history);
    //     }
    // }, [state.step]);

    useEffect(() => {
        if (state.history[state.history.length - 1] !== state.step){
            state.history.push(state.step);
            console.log(state.history);
        }
    }, [state.step]);

    return (
        <div className={styles.frame}>
            <div className={styles.header}>
                Создание транзакции {state.step !== -2 && !!state.transactionid? "(" + automaton.filter(item => item[0] === state.transactionid)[0][0] + "): " : ""}{state.step !== -2 && !!state.transactionid? automaton.filter(item => item[0] === state.transactionid)[0][5]: ""}
            </div>
            {
                state.step !== -2 && state.transactionid !== null?
                    <div className={styles.roadmap}>
                        <Roadmap wizardpages={state.wizardpages} currentpage={state.step}/>
                    </div>
                    : null
            }
            <div className={styles.pages}>
                <CurrentPage state={state} />
                {/* <CurrentPageV2 /> */}
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
