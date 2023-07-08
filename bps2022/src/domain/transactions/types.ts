import { State as BankAccountState, Props as BankAccountProps, BankAccount } from '../../components/wizards/transaction/components/bankaccount/bankaccount';
import { State as CashAccountState, Props as CashAccountProps, CashAccount } from '../../components/wizards/transaction/components/cashaccount/cashaccount';
import { State as PersonalAccountState, Props as PersonalAccountProps, PersonalAccount } from '../../components/wizards/transaction/components/personalaccount/personalaccount';
import { State as ExternalAccountState, Props as ExternalAccountProps, ExternalAccount } from '../../components/wizards/transaction/components/externalaccount/externalaccount';
import { State as LendingAccountState, Props as LendingAccountProps, LendingAccount } from '../../components/wizards/transaction/components/lendingaccount/lendingaccount';
import { State as CofferAccountState, Props as CofferAccountProps, CofferAccount } from '../../components/wizards/transaction/components/cofferaccount/cofferaccount';
import { State as OverdraftState, Props as OverdraftProps, Overdraft } from '../../components/wizards/transaction/components/overdraft/overdraft';
import { State as SumsState, Props as SumProps, Sums } from '../../components/wizards/transaction/components/sums/sums';
import { State as ConfirmationState, Props as ConfirmationProps, Confirmation } from '../../components/wizards/transaction/components/confirmation/confirmation';
import { State as ArticleState, Props as ArticleProps, Article } from '../../components/wizards/transaction/components/article/article';
import { State as ServiceChargeState, Props as ServiceChargeProps, ServiceCharge } from '../../components/wizards/transaction/components/servicecharge/servicecharge';

import { State as BankAccountRegistrationState, Props as BankAccountRegistrationProps, Registration as BankAccountRegistration } from '../../components/wizards/accounts/bankaccount/components/registration';
import { State as OrganizationRegistrationState, Props as OrganizationRegistrationProps, Registration as OrganizationRegistration } from '../../components/wizards/organization/components/registration';
import { State as CashAccountRegistrationState, Props as CashAccountRegistrationProps } from '../../components/wizards/accounts/cashaccount/components/registration';
import { State as PersonalAccountRegistrationState, Props as PersonalAccountRegistrationProps, Registration as PersonalAccountRegistration } from '../../components/wizards/clients/components/registration';
import { State as OverdraftRegistrationState, Props as OverdraftRegistrationProps, Registration as OverdraftRegistration } from '../../components/wizards/accounts/overdraft/components/registration';
import { State as ArticleRegistrationState, Props as ArticleRegistrationProps, Registration as ArticleRegistration } from '../../components/wizards/article/registration';

type TypeKeys<T> = T extends T ? keyof T : never;

export type AccountOwner = "NOTREQUIRED" | "REQUIREDANY" | "REQUIREDSAME" | "REQUIREDNOTSAME";
export type WizardStageType = 'ARTICLE' | 'BANKACCOUNT' | 'CASHACCOUNT' | 'COFFERACCOUNT' | 'CONFIRMATION' | 'EXTERNALACCOUNT' | 'LENDINGACCOUNT' | 'OVERDRAFT' | 'PERSONALACCOUNT'
    | 'REGARTICLE' | 'REGBANKACCOUNT' | 'REGCASHACCOUNT' | 'REGCOFFERACCOUNT' | 'REGEXTERNALACCOUNT' | 'REGLENDINGACCOUNT' | 'REGORGANIZATION' | 'REGOVERDRAFT' | 'REGPERSONALACCOUNT'
    | 'SERVICECHARGE' | 'SUMEXCHANGE';
;
export type WizardStageStates = BankAccountState | CashAccountState | PersonalAccountState | ExternalAccountState | LendingAccountState | CofferAccountState | OverdraftState
    | SumsState | ConfirmationState | ArticleState | ServiceChargeState | BankAccountRegistrationState | OrganizationRegistrationState | CashAccountRegistrationState | PersonalAccountRegistrationState
    | OverdraftRegistrationState | ArticleRegistrationState;
;
export type WizardStageCharges = "CLIENTPERSONALINCOME" | "CLIENTPERSONALOUTCOME" | "CLIENTPERSONALINCOMENETTING" | "CLIENTPERSONALOUTCOMENETTING" | "ENTERPRISEEXTERNALINCOME" | "ENTERPRISEEXTERNALOUTCOME";                                      

export type WizardStageStateKeys = TypeKeys<WizardStageStates>;
export type TransactionComponentDependency = {
    mode: "EARLY" | "LATE",
    destination: WizardStageStateKeys,                // Имя целевого свойства компонента, которое будет передано в компонент (keyof TransactionStatesUnion?)
    path: {                                                             // Пути получения значения целевого свойства
        identity: string,                                               // Идентификатор шага транзакции, в состоянии которого, задано значение целевого свойства
        source: WizardStageStateKeys,                    // Имя поля состояния, значение которого, будет передано в целевое свойство
    }[],
};
export type WizardStageConstraints = WizardStageStateKeys[];

export type WizardCommonProps = {
    savedstate: unknown,
    onReady: (state: WizardStageStates, registration: boolean) => void,
    onDirty: (state: WizardStageStates) => void,
    onNexty: () => void,
};

export type WizardStateProps = {
    getParam: (param: string) => string | number | boolean | null,
    setParam: (param: string, value: string | number | boolean | null) => string | number | boolean | null,
}

export type WizardStageProps = BankAccountProps | CashAccountProps | PersonalAccountProps | ExternalAccountProps | LendingAccountProps | CofferAccountProps | OverdraftProps
    | SumProps | ConfirmationProps | ArticleProps | ServiceChargeProps | BankAccountRegistrationProps | OrganizationRegistrationProps | PersonalAccountRegistrationProps
    | OverdraftRegistrationProps | ArticleRegistrationProps;
