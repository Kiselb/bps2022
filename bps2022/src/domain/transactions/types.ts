import { FC } from 'react';

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
import { State as CashAccountRegistrationState, Props as CashAccountRegistrationProps, Registration as CashAccountRegistration } from '../../components/wizards/accounts/cashaccount/components/registration';
import { State as PersonalAccountRegistrationState, Props as PersonalAccountRegistrationProps, Registration as PersonalAccountRegistration } from '../../components/wizards/clients/components/registration';
import { State as OverdraftRegistrationState, Props as OverdraftRegistrationProps, Registration as OverdraftRegistration } from '../../components/wizards/accounts/overdraft/components/registration';
import { State as ArticleRegistrationState, Props as ArticleRegistrationProps, Registration as ArticleRegistration } from '../../components/wizards/article/registration';
import { Props as ExternalAccountRegistrationProps, Registration as ExternalAccountRegistration } from '../../components/wizards/accounts/externalaccount/components/registration';
import { Props as CofferAccountRegistrationProps, Registration as CofferAccountRegistration } from '../../components/wizards/accounts/cofferaccount/components/registration';
import { Props as LendingAccountRegistrationProps, Registration as LendingAccountRegistration } from '../../components/wizards/accounts/lendingaccount/components/registration';

export { BankAccount, CashAccount, PersonalAccount, ExternalAccount, LendingAccount, CofferAccount, Overdraft, Sums, Confirmation, Article, ServiceCharge,
    BankAccountRegistration, OrganizationRegistration, CashAccountRegistration, PersonalAccountRegistration, OverdraftRegistration, ArticleRegistration,
    ExternalAccountRegistration, CofferAccountRegistration, LendingAccountRegistration
};

export type TransactionTypesIdentity =
    "01-010" | "01-020" | "01-030" | "01-040" | "01-050" | "01-060" | "01-070" |
    "02-010" | "02-020" | "02-030" | "02-040" | "02-050" |
    "03-010" | "03-020" | "03-030" | "03-040" | "03-050" |
    "04-010" | "04-020" | "04-030" |
    "05-010" |
    "06-010" | "06-020" |
    "07-010" | "07-020" |
    "08-010" |
    "09-010" | "09-011" |

    "10-010" |
    "11-010" | "11-020" | "11-030" |
    "12-010" | "12-020" |
    "13-010" | "13-020" |
    "14-010" | "14-011" |

    "15-010" | "15-020" |
    "16-010" | "16-020" |
    "17-010" | "17-011" | "17-020" | "17-030" | "17-040" | "17-050" |
    "18-010" | "18-020" |

    "19-010" | "19-020" | "19-030" |
    "20-010" |
    "21-010" | "21-020" |
    "22-010" | "22-020" |
    "23-010" | "23-020" | "23-030" | "23-040" | "23-050" |

    "24-010" |
    "25-010" | "25-011" |
    "26-010" | "26-011" |
    "27-010" | "27-011" |

    "28-010" | "28-020" | "28-030" | "28-040" | "28-050" |

    "29-010" | "29-020" | "29-030" | "29-040" | "29-050";

export type WizardPagesTypes_SUMEXCHANGE = { type: "SUMEXCHANGE", props: SumProps, identity: string, marker: string, component: FC<SumProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_BANKACCOUNT = { type: "BANKACCOUNT", props: BankAccountProps, identity: string, marker: string, component: FC<BankAccountProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_CASHACCOUNT = { type: "CASHACCOUNT", props: CashAccountProps, identity: string, marker: string, component: FC<CashAccountProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_PERSONALACCOUNT = { type: "PERSONALACCOUNT", props: PersonalAccountProps, identity: string, marker: string, component: FC<PersonalAccountProps & WizardControlProps & WizardContextProps> };
export type WizardPagesTypes_LENDINGACCOUNT = { type: "LENDINGACCOUNT", props: LendingAccountProps, identity: string, marker: string, component: FC<LendingAccountProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_EXTERNALACCOUNT = { type: "EXTERNALACCOUNT", props: ExternalAccountProps, identity: string, marker: string, component: FC<ExternalAccountProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_COFFERACCOUNT = { type: "COFFERACCOUNT", props: CofferAccountProps, identity: string, marker: string, component: FC<CofferAccountProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_OVERDRAFT = { type: "OVERDRAFT", props: OverdraftProps, identity: string, marker: string, component: FC<OverdraftProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_ARTICLE = { type: "ARTICLE", props: ArticleProps, identity: string, marker: string, component: FC<ArticleProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_SERVICECHARGE = { type: "SERVICECHARGE", props: ServiceChargeProps, identity: string, marker: string, component: FC<ServiceChargeProps & WizardControlProps & WizardContextProps> };
export type WizardPagesTypes_CONFIRMATION = { type: "CONFIRMATION", props: ConfirmationProps, identity: string, marker: string, component: FC<ConfirmationProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_REGBANKACCOUNT = { type: "REGBANKACCOUNT", props: BankAccountRegistrationProps, identity: string, marker: string, component: FC<BankAccountRegistrationProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_REGORGANIZATION = { type: "REGORGANIZATION", props: OrganizationRegistrationProps, identity: string, marker: string, component: FC<OrganizationRegistrationProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_REGCASHACCOUNT = { type: "REGCASHACCOUNT", props: CashAccountRegistrationProps, identity: string, marker: string, component: FC<CashAccountRegistrationProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_REGPERSONALACCOUNT = { type: "REGPERSONALACCOUNT", props: PersonalAccountRegistrationProps, identity: string, marker: string, component: FC<PersonalAccountRegistrationProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_REGLENDINGACCOUNT = { type: "REGLENDINGACCOUNT", props: LendingAccountRegistrationProps, identity: string, marker: string, component: FC<LendingAccountRegistrationProps & WizardControlProps & WizardContextProps>};
export type WizardPagesTypes_REGEXTERNALACCOUNT = { type: "REGEXTERNALACCOUNT", props: ExternalAccountRegistrationProps, identity: string, marker: string, component: FC<ExternalAccountRegistrationProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_REGCOFFERACCOUNT = { type: "REGCOFFERACCOUNT", props: CofferAccountRegistrationProps, identity: string, marker: string, component: FC<CofferAccountRegistrationProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_REGOVERDRAFT = { type: "REGOVERDRAFT", props: OverdraftRegistrationProps, identity: string, marker: string, component: FC<OverdraftRegistrationProps & WizardControlProps & WizardContextProps>, };
export type WizardPagesTypes_REGARTICLE = { type: "REGARTICLE", props: ArticleRegistrationProps, identity: string, marker: string, component: FC<ArticleRegistrationProps & WizardControlProps & WizardContextProps>, };

export type TransactionGroupSelector = "BANKACCOUNTEXTERNAL" | "BANKACCOUNTINTERNAL" | "CASHACCOUNT" | "PERSONALACCOUNT" | "EXTERNALACCOUNT" | "COFFERACCOUNT" | "INCOME" | "EXPENSE";

export type WizardPagesPropsUnion = SumProps | BankAccountProps | CashAccountProps | PersonalAccountProps | LendingAccountProps | ExternalAccountProps | CofferAccountProps
    | OverdraftProps | ArticleProps | ServiceChargeProps | ConfirmationProps | BankAccountRegistrationProps | OrganizationRegistrationProps | CashAccountRegistrationProps
    | PersonalAccountRegistrationProps | LendingAccountRegistrationProps | ExternalAccountRegistrationProps | CofferAccountRegistrationProps | OverdraftRegistrationProps
    | ArticleRegistrationProps;
    
export type WizardPagesTypesUnion = WizardPagesTypes_SUMEXCHANGE | WizardPagesTypes_BANKACCOUNT | WizardPagesTypes_CASHACCOUNT | WizardPagesTypes_PERSONALACCOUNT | WizardPagesTypes_LENDINGACCOUNT
    | WizardPagesTypes_EXTERNALACCOUNT | WizardPagesTypes_COFFERACCOUNT | WizardPagesTypes_OVERDRAFT | WizardPagesTypes_ARTICLE | WizardPagesTypes_SERVICECHARGE | WizardPagesTypes_CONFIRMATION
    | WizardPagesTypes_REGBANKACCOUNT | WizardPagesTypes_REGORGANIZATION | WizardPagesTypes_REGCASHACCOUNT | WizardPagesTypes_REGPERSONALACCOUNT | WizardPagesTypes_REGLENDINGACCOUNT
    | WizardPagesTypes_REGEXTERNALACCOUNT | WizardPagesTypes_REGCOFFERACCOUNT | WizardPagesTypes_REGOVERDRAFT | WizardPagesTypes_REGARTICLE;

// Строка автомата определения типа транзакции (TR_Automaton_Map_V2)
export type TransactionType = Readonly<[
    TransactionTypesIdentity,                               // Уникальный идентификатор типа транзакции
    TransactionTypesIdentity | null,                        // Уникальный идентификатор основного типа транзакции
    [TransactionGroupSelector, TransactionGroupSelector],   // Селектор группы транзакций по комбинациям типов счетов
    WizardPagesTypesUnion[] | null,                         // Группы параметров
    boolean,                                                // Автоматическое выполнение разрешено
    string,                                                 // Описание типа транзакции для пользователя
]>;

export type AccountOwner = "NOTREQUIRED" | "REQUIREDANY" | "ORIGINSAME" | "ORIGINNOTSAME" | "TARGETSAME" | "TARGETNOTSAME";

export type WizardStageType = 'ARTICLE' | 'BANKACCOUNT' | 'CASHACCOUNT' | 'COFFERACCOUNT' | 'CONFIRMATION' | 'EXTERNALACCOUNT' | 'LENDINGACCOUNT' | 'OVERDRAFT' | 'PERSONALACCOUNT'
    | 'REGARTICLE' | 'REGBANKACCOUNT' | 'REGCASHACCOUNT' | 'REGCOFFERACCOUNT' | 'REGEXTERNALACCOUNT' | 'REGLENDINGACCOUNT' | 'REGORGANIZATION' | 'REGOVERDRAFT' | 'REGPERSONALACCOUNT'
    | 'SERVICECHARGE' | 'SUMEXCHANGE';

export type WizardStageStates = BankAccountState | CashAccountState | PersonalAccountState | ExternalAccountState | LendingAccountState | CofferAccountState | OverdraftState
    | SumsState | ConfirmationState | ArticleState | ServiceChargeState | BankAccountRegistrationState | OrganizationRegistrationState | CashAccountRegistrationState | PersonalAccountRegistrationState
    | OverdraftRegistrationState | ArticleRegistrationState;

export type WizardStageCharges = "CLIENTPERSONALINCOME" | "CLIENTPERSONALOUTCOME" | "CLIENTPERSONALINCOMENETTING" | "CLIENTPERSONALOUTCOMENETTING" | "ENTERPRISEEXTERNALINCOME" | "ENTERPRISEEXTERNALOUTCOME";                                      

export type WizardControlProps = {
    savedstate: unknown,
    onReady: (state: WizardStageStates, registration: boolean) => void,
    onDirty: (state: WizardStageStates) => void,
    onNexty: () => void,
};

export type WizardContextProps = {
    getParam: (param: string) => string | number | boolean | null,
    setParam: (param: string, value: string | number | boolean | null) => string | number | boolean | null,
};

//export type WizardStageProps = BankAccountProps | CashAccountProps | PersonalAccountProps | ExternalAccountProps | LendingAccountProps | CofferAccountProps | OverdraftProps
//     | SumProps | ConfirmationProps | ArticleProps | ServiceChargeProps | BankAccountRegistrationProps | OrganizationRegistrationProps | PersonalAccountRegistrationProps
//     | OverdraftRegistrationProps | ArticleRegistrationProps | CashAccountRegistrationProps;
//export const isChargedPage = <U extends { charge: string }>(page: WizardPagesTypesUnion | U): page is U => ("charge" in page);
//type TypeKeys<T> = T extends T ? keyof T : never;
