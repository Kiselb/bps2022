// Render dynamically react components with typescript: https://stackoverflow.com/questions/67702241/render-dynamically-react-components-with-typescript
// Template literal types and mapped type 'as' clauses #40336: https://github.com/microsoft/TypeScript/pull/40336
// Typing a dynamic tag in React with TypeScript?: https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript
// Typescript React: Access component property types: https://stackoverflow.com/questions/43230765/typescript-react-access-component-property-types
// Is it possible to build custom intrinsic type?: https://stackoverflow.com/questions/68937638/is-it-possible-to-build-custom-intrinsic-type

import { FC } from 'react';

import { Props as BankAccountProps, BankAccount } from '../../components/wizards/transaction/components/bankaccount/bankaccount';
import { Props as CashAccountProps, CashAccount } from '../../components/wizards/transaction/components/cashaccount/cashaccount';
import { Props as PersonalAccountProps, PersonalAccount } from '../../components/wizards/transaction/components/personalaccount/personalaccount';
import { Props as ExternalAccountProps, ExternalAccount } from '../../components/wizards/transaction/components/externalaccount/externalaccount';
import { Props as LendingAccountProps, LendingAccount } from '../../components/wizards/transaction/components/lendingaccount/lendingaccount';
import { Props as CofferAccountProps, CofferAccount } from '../../components/wizards/transaction/components/cofferaccount/cofferaccount';
import { Props as OverdraftProps, Overdraft } from '../../components/wizards/transaction/components/overdraft/overdraft';
import { Props as SumProps, Sums } from '../../components/wizards/transaction/components/sums/sums';
import { Props as ConfirmationProps, Confirmation } from '../../components/wizards/transaction/components/confirmation/confirmation';
import { Props as ArticleProps, Article } from '../../components/wizards/transaction/components/article/article';
import { Props as ServiceChargeProps, ServiceCharge } from '../../components/wizards/transaction/components/servicecharge/servicecharge';

import { Props as BankAccountRegistrationProps, Registration as BankAccountRegistration } from '../../components/wizards/accounts/bankaccount/components/registration';
import { Props as OrganizationRegistrationProps, Registration as OrganizationRegistration } from '../../components/wizards/organization/components/registration';
import { Props as CashAccountRegistrationProps, Registration as CashAccountRegistration } from '../../components/wizards/accounts/cashaccount/components/registration';
import { Props as PersonalAccountRegistrationProps, Registration as PersonalAccountRegistration } from '../../components/wizards/clients/components/registration';
import { Props as ExternalAccountRegistrationProps, Registration as ExternalAccountRegistration } from '../../components/wizards/accounts/externalaccount/components/registration';
import { Props as CofferAccountRegistrationProps, Registration as CofferAccountRegistration } from '../../components/wizards/accounts/cofferaccount/components/registration';
import { Props as LendingAccountRegistrationProps, Registration as LendingAccountRegistration } from '../../components/wizards/accounts/lendingaccount/components/registration';
import { Props as OverdraftRegistrationProps, Registration as OverdraftRegistration } from '../../components/wizards/accounts/overdraft/components/registration';
import { Props as ArticleRegistrationProps, Registration as ArticleRegistration } from '../../components/wizards/article/registration';

import { AccountOwner, WizardStageCharges, WizardCommonProps, WizardStateProps } from './types';

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

export type TransactionGroupSelector = "BANKACCOUNTEXTERNAL" | "BANKACCOUNTINTERNAL" | "CASHACCOUNT" | "PERSONALACCOUNT" | "EXTERNALACCOUNT" | "COFFERACCOUNT" | "INCOME" | "EXPENSE";

export type WizardPagesTypes_SUMEXCHANGE = { type: "SUMEXCHANGE", props: SumProps, identity: string, marker: string, component: FC<SumProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_BANKACCOUNT = { type: "BANKACCOUNT", props: BankAccountProps, identity: string, marker: string, component: FC<BankAccountProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_CASHACCOUNT = { type: "CASHACCOUNT", props: CashAccountProps, identity: string, marker: string, component: FC<CashAccountProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_PERSONALACCOUNT = { type: "PERSONALACCOUNT", props: PersonalAccountProps, identity: string, marker: string, component: FC<PersonalAccountProps & WizardCommonProps & WizardStateProps> };
export type WizardPagesTypes_LENDINGACCOUNT = { type: "LENDINGACCOUNT", props: LendingAccountProps, identity: string, marker: string, component: FC<LendingAccountProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_EXTERNALACCOUNT = { type: "EXTERNALACCOUNT", props: ExternalAccountProps, identity: string, marker: string, component: FC<ExternalAccountProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_COFFERACCOUNT = { type: "COFFERACCOUNT", props: CofferAccountProps, identity: string, marker: string, component: FC<CofferAccountProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_OVERDRAFT = { type: "OVERDRAFT", props: OverdraftProps, identity: string, marker: string, component: FC<OverdraftProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_ARTICLE = { type: "ARTICLE", props: ArticleProps, identity: string, marker: string, component: FC<ArticleProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_SERVICECHARGE = { type: "SERVICECHARGE", props: ServiceChargeProps, identity: string, marker: string, component: FC<ServiceChargeProps & WizardCommonProps & WizardStateProps> };
export type WizardPagesTypes_CONFIRMATION = { type: "CONFIRMATION", props: ConfirmationProps, identity: string, marker: string, component: FC<ConfirmationProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_REGBANKACCOUNT = { type: "REGBANKACCOUNT", props: BankAccountRegistrationProps, identity: string, marker: string, component: FC<BankAccountRegistrationProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_REGORGANIZATION = { type: "REGORGANIZATION", props: OrganizationRegistrationProps, identity: string, marker: string, component: FC<OrganizationRegistrationProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_REGCASHACCOUNT = { type: "REGCASHACCOUNT", props: CashAccountRegistrationProps, identity: string, marker: string, component: FC<CashAccountRegistrationProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_REGPERSONALACCOUNT = { type: "REGPERSONALACCOUNT", props: PersonalAccountRegistrationProps, identity: string, marker: string, component: FC<PersonalAccountRegistrationProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_REGLENDINGACCOUNT = { type: "REGLENDINGACCOUNT", props: LendingAccountRegistrationProps, identity: string, marker: string, component: FC<LendingAccountRegistrationProps & WizardCommonProps & WizardStateProps>};
export type WizardPagesTypes_REGEXTERNALACCOUNT = { type: "REGEXTERNALACCOUNT", props: ExternalAccountRegistrationProps, identity: string, marker: string, component: FC<ExternalAccountRegistrationProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_REGCOFFERACCOUNT = { type: "REGCOFFERACCOUNT", props: CofferAccountRegistrationProps, identity: string, marker: string, component: FC<CofferAccountRegistrationProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_REGOVERDRAFT = { type: "REGOVERDRAFT", props: OverdraftRegistrationProps, identity: string, marker: string, component: FC<OverdraftRegistrationProps & WizardCommonProps & WizardStateProps>, };
export type WizardPagesTypes_REGARTICLE = { type: "REGARTICLE", props: ArticleRegistrationProps, identity: string, marker: string, component: FC<ArticleRegistrationProps & WizardCommonProps & WizardStateProps>, };

export type WizardPagesRegularTypes =
    WizardPagesTypes_SUMEXCHANGE
    | WizardPagesTypes_BANKACCOUNT
    | WizardPagesTypes_CASHACCOUNT
    | WizardPagesTypes_PERSONALACCOUNT
    | WizardPagesTypes_LENDINGACCOUNT
    | WizardPagesTypes_EXTERNALACCOUNT
    | WizardPagesTypes_COFFERACCOUNT
    | WizardPagesTypes_OVERDRAFT
    | WizardPagesTypes_ARTICLE
    | WizardPagesTypes_SERVICECHARGE
    | WizardPagesTypes_CONFIRMATION
    ;

export type WizardPagesRegisterTypes =
    WizardPagesTypes_REGBANKACCOUNT
    | WizardPagesTypes_REGORGANIZATION
    | WizardPagesTypes_REGCASHACCOUNT
    | WizardPagesTypes_REGPERSONALACCOUNT
    | WizardPagesTypes_REGLENDINGACCOUNT
    | WizardPagesTypes_REGEXTERNALACCOUNT
    | WizardPagesTypes_REGCOFFERACCOUNT
    | WizardPagesTypes_REGOVERDRAFT
    | WizardPagesTypes_REGARTICLE
    ;

type TestUnion = keyof WizardPagesTypesUnion;
export type WizardPagesTypesUnion = WizardPagesRegularTypes | WizardPagesRegisterTypes;

export function isRegularPage(page: WizardPagesTypesUnion): page is WizardPagesRegularTypes {
    switch(page.type) {
        case "SUMEXCHANGE":
        case "BANKACCOUNT":
        case "CASHACCOUNT":
        case "PERSONALACCOUNT":
        case "LENDINGACCOUNT":
        case "EXTERNALACCOUNT":
        case "COFFERACCOUNT":
        case "OVERDRAFT":
        case "SERVICECHARGE":
        case "ARTICLE":
        case "CONFIRMATION":
            return true;
        default:
            return false;
    }
}
export function isRegisterPage(page: WizardPagesTypesUnion): page is WizardPagesRegisterTypes {
    switch(page.type) {
        case "REGBANKACCOUNT":
        case "REGORGANIZATION":
        case "REGCASHACCOUNT":
        case "REGPERSONALACCOUNT":
        case "REGEXTERNALACCOUNT":
        case "REGCOFFERACCOUNT":
        case "REGLENDINGACCOUNT":
        case "REGOVERDRAFT":
        case "REGARTICLE":
            return true;
        default:
            return false;
    }
}

// Строка автомата определения типа транзакции (TR_Automaton_Map_V2)
export type TransactionType = Readonly<[

    
    TransactionTypesIdentity,                               // Уникальный идентификатор типа транзакции
    TransactionTypesIdentity | null,                        // Уникальный идентификатор основного типа транзакции
    [TransactionGroupSelector, TransactionGroupSelector],   // Селектор группы транзакций по комбинациям типов счетов
    WizardPagesTypesUnion[] | null,                         // Группы параметров
    boolean,                                                // Автоматическое выполнение разрешено
    string,                                                 // Описание типа транзакции для пользователя
]>;

export const isChargedPage = <U extends { charge: string }>(page: WizardPagesTypesUnion | U): page is U => ("charge" in page);

export const automaton: Readonly<TransactionType[]> = [
    
    // Отправка с расчётного счёта (внутреннего или внешнего)

    ["01-010", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "REQUIREDANY", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "EXTERNALACCOUNT", props: { position: "SECONDARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "ARTICLE", props: { subtype: "INCOME", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "INCOME", }, identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", component: ArticleRegistration, },

        { type: "SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALINCOME"], }, identity: "TYPE:SERVICECHARGE", marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Приём безналичных на внешний счёт в доход"],
    ["01-020", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "REQUIREDANY", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "CLIENTPERSONALINCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "EXTERNALACCOUNT", props: { position: "SECONDARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "SERVICECHARGE", props: { charges: ["CLIENTPERSONALINCOME", "ENTERPRISEEXTERNALINCOME"], }, identity: "TYPE:SERVICECHARGE", marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Приём безналичных на внешний счет в пользу клиента"],		
    ["01-030", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "REQUIREDANY", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDNOTSAME", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDNOTSAME", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "REQUIREDNOTSAME", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "EXTERNALACCOUNT", props: { position: "SECONDARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALOUTCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "EXTERNALACCOUNT", props: { position: "SECONDARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALOUTCOME", "ENTERPRISEEXTERNALINCOME"], }, identity: "TYPE:SERVICECHARGE", marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Перемещение между внешними счетами различных развивающих"],
    ["01-050", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "REQUIREDANY", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "EXTERNALACCOUNT", props: { position: "SECONDARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALOUTCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "ARTICLE", props: { subtype: "EXPENSES", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "EXPENSES", }, identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", component: ArticleRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Отправка безналичных из развития в расход"],
    ["01-060", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "REQUIREDANY", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "EXTERNALACCOUNT", props: { position: "SECONDARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: false, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALOUTCOME", "ENTERPRISEEXTERNALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Отправка безналичных из развития в пользу клиента"],
    ["01-070", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "REQUIREDANY", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Неопознанный приём безналичных на внешний счет"],													
                                                                                    
    ["02-010", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "INTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "ARTICLE", props: { subtype: "INCOME", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "INCOME", }, identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", component: ArticleRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Приём безналичных в доход"],							
    ["02-020", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "INTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: "CLIENTPERSONALINCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Приём безналичных в пользу клиента"],				
    ["02-030", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "REQUIREDANY", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", balance: "ACCRUAL", registration: true, client: false, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", balance: "ACCRUAL", client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "EXTERNALACCOUNT", props: { position: "SECONDARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALOUTCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Приём безналичных из развития"],
    ["02-050", null, ["BANKACCOUNTEXTERNAL", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", balance: "ACCRUAL", registration: true, client: false, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", balance: "ACCRUAL", client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Приём неопознанный"],                                                                                    
    ["03-010", null, ["BANKACCOUNTINTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", balance: "WITHDRAWAL", registration: true, client: false, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", balance: "WITHDRAWAL", client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "ARTICLE", props: { subtype: "EXPENSES", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "EXPENSES", }, identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", component: ArticleRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Отправка безналичных в расход"],
    ["03-020", null, ["BANKACCOUNTINTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", balance: "WITHDRAWAL", registration: true, client: false, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", balance: "WITHDRAWAL", client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Отправка безналичных в пользу клиента"],
    ["03-030", null, ["BANKACCOUNTINTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", balance: "WITHDRAWAL", registration: true, client: false, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", balance: "WITHDRAWAL", client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "REQUIREDANY", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "EXTERNALACCOUNT", props: { position: "SECONDARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Отправка безналичных в развитие"],
    ["03-050", null, ["BANKACCOUNTINTERNAL", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", balance: "WITHDRAWAL", registration: true, client: false, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", balance: "WITHDRAWAL", client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Отправка неопознанная"],                                                                                    
    ["04-010", null, ["BANKACCOUNTINTERNAL", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "INTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
        ], false, "Внутреннее перемещение безналичных"],
    ["04-020", null, ["BANKACCOUNTINTERNAL", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },

        { type: "OVERDRAFT", props: { position: "PRIMARY", balance: "ACCRUAL", suspense: false, }, identity: "TYPE:OVERDRAFT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE", marker: "ОД", component: Overdraft, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Погашение овердрафта"],
    ["04-030", null, ["BANKACCOUNTINTERNAL", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "OVERDRAFT", props: { position: "PRIMARY", balance: "WITHDRAWAL", suspense: true, }, identity: "TYPE:OVERDRAFT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE", marker: "ОД", component: Overdraft, },
        { type: "REGOVERDRAFT", props: {}, identity: "TYPE:REGOVERDRAFT", marker: "?", component: OverdraftRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "INTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Заимствование по овердрафту"],                                                                                    
    ["05-010", null, ["BANKACCOUNTINTERNAL", "CASHACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", balance: "WITHDRAWAL", registration: true, client: false, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", balance: "WITHDRAWAL", client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },
        { type: "REGCASHACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CashAccountRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Снятие наличных с расчётного счёта"],                                                                                    
    ["06-010", "02-010", ["BANKACCOUNTEXTERNAL", "PERSONALACCOUNT"], null, false, "Приём безналичных в доход"],
    ["06-020", "02-020", ["BANKACCOUNTEXTERNAL", "PERSONALACCOUNT"], null, false, "Приём безналичных в пользу клиента"],                                                                                    
    ["07-010", "01-010", ["BANKACCOUNTEXTERNAL", "EXTERNALACCOUNT"], null, true, "Приём безналичных на внешний счёт в доход"],
    ["07-020", "01-020", ["BANKACCOUNTEXTERNAL", "EXTERNALACCOUNT"], null, true, "Приём безналичных на внешний счет в пользу клиента"],                                                                                    
    ["08-010", "03-030", ["BANKACCOUNTINTERNAL", "EXTERNALACCOUNT"], null, false, "Отправка безналичных в развитие"],
    ["09-010", null, ["BANKACCOUNTINTERNAL", "COFFERACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", balance: "WITHDRAWAL", registration: true, client: false, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", balance: "WITHDRAWAL", client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Отправка безналичных в ячейку"],
    ["09-011", null, ["BANKACCOUNTINTERNAL", "COFFERACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", balance: "WITHDRAWAL", registration: true, client: false, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", balance: "WITHDRAWAL", client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Отправка безналичных в ячейку клиента"],
                                                                                    
    // Отправка с кассового счёта																	
                                                                                    
    ["10-010", null, ["CASHACCOUNT", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, }, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "INTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Внесение наличных на расчётный счёт"],                                                                                    
    ["11-010", null, ["CASHACCOUNT", "CASHACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },
        { type: "REGCASHACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CashAccountRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: "CLIENTPERSONALINCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Внесение наличных клиентом"],				
    ["11-020", null, ["CASHACCOUNT", "CASHACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, }, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Выдача наличных клиенту"],
    ["11-030", null, ["CASHACCOUNT", "CASHACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, }, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },

        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },
        { type: "REGCASHACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CashAccountRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Внутреннее перемещение наличных"],                                                                                    
    ["12-010", null, ["CASHACCOUNT", "PERSONALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, }, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },
        { type: "ARTICLE", props: { subtype: "EXPENSES", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "EXPENSES", }, identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", component: ArticleRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Списание наличных в расход"],
    ["12-020", "11-010", ["CASHACCOUNT", "PERSONALACCOUNT"], null, true, "Внесение наличных клиентом"],                                                                                    
    ["13-010", null, ["CASHACCOUNT", "EXTERNALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: "CLIENTPERSONALINCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALINCOME", "CLIENTPERSONALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Внесение наличных клиентом в развитие"],
    ["13-020", null, ["CASHACCOUNT", "EXTERNALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, }, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },

        { type: "EXTERNALACCOUNT", props: { position: "SECONDARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Внесение наличных в развитие"],                                                                                    
    ["14-010", null, ["CASHACCOUNT", "COFFERACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, }, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },

        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Внесение наличных в ячейку предприятия"],
    ["14-011", null, ["CASHACCOUNT", "COFFERACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, }, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },

        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Внесение наличных в ячейку клиента"],
                                                                                    
    // Отправка с лицевого счёта																	
                                                                                    
    ["15-010", "03-020", ["PERSONALACCOUNT", "BANKACCOUNTEXTERNAL"], null, false, "Отправка безналичных в пользу клиента"],                                                                                    
    ["16-010", null, ["PERSONALACCOUNT", "CASHACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },
        { type: "REGCASHACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CashAccountRegistration, },

        { type: "ARTICLE", props: { subtype: "INCOME", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "INCOME", }, identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", component: ArticleRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Начисление наличных в доход"],
    ["16-020", "11-020", ["PERSONALACCOUNT", "CASHACCOUNT"], null, true, "Выдача наличных клиенту"],                                                                                    
    ["17-010", null, ["PERSONALACCOUNT", "PERSONALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOMENETTING", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDNOTSAME", charge: "CLIENTPERSONALINCOMENETTING", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALOUTCOMENETTING", "CLIENTPERSONALINCOMENETTING"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Взаимозачёт между клиентами"],
    ["17-011", null, ["PERSONALACCOUNT", "PERSONALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOMENETTING", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDSAME", charge: "CLIENTPERSONALINCOMENETTING", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALOUTCOMENETTING", "CLIENTPERSONALINCOMENETTING"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Премещение по счетам клиента"],
    ["17-020", null, ["PERSONALACCOUNT", "PERSONALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "ARTICLE", props: { subtype: "INCOME", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "INCOME", }, identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", component: ArticleRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Списание средств с клиента"],
    ["17-030", null, ["PERSONALACCOUNT", "PERSONALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: null, }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "ARTICLE", props: { subtype: "EXPENSES", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "EXPENSES", }, identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", component: ArticleRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Начисление средств клиенту"],
    ["17-040", null, ["PERSONALACCOUNT", "PERSONALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },

        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: null, }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "LENDINGACCOUNT", props: { position: "PRIMARY", balance: "WITHDRAWAL", suspense: true, owner: "REQUIREDANY", }, identity: "TYPE:LENDINGACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE", marker: "СУ", component: LendingAccount, },
        { type: "REGLENDINGACCOUNT", props: {}, identity: "TYPE:REGLENDINGACCOUNT", marker: "?", component: LendingAccountRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Выдача клиенту ссуды"],
    ["17-050", null, ["PERSONALACCOUNT", "PERSONALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: null, }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "LENDINGACCOUNT", props: { position: "PRIMARY", balance: "ACCRUAL", suspense: false, owner: "REQUIREDANY", }, identity: "TYPE:LENDINGACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE", marker: "СУ", component: LendingAccount, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Погашение клиентом ссуды"],                                                                                    
    ["18-010", null, ["PERSONALACCOUNT", "EXTERNALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "ARTICLE", props: { subtype: "INCOME", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "INCOME", }, identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", component: ArticleRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Начисление в развитие доход"],
    ["18-020", null, ["PERSONALACCOUNT", "EXTERNALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: "CLIENTPERSONALINCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALINCOME", "CLIENTPERSONALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Начисление в развитие и клиенту"],
                                                                                    
    // Отправка с внешнего лицевого счёта																	
                                                                                    
    ["19-010", "01-050", ["EXTERNALACCOUNT", "BANKACCOUNTEXTERNAL"], null, true, "Отправка безналичных из развития в расход"],
    ["19-020", "01-060", ["EXTERNALACCOUNT", "BANKACCOUNTEXTERNAL"], null, true, "Отправка безналичных из развития в пользу клиента"],                                                                                    
    ["20-010", "02-030", ["EXTERNALACCOUNT", "BANKACCOUNTINTERNAL"], null, false, "Приём безналичных из развития"],
    ["21-010", null, ["EXTERNALACCOUNT", "CASHACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALOUTCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },
        { type: "REGCASHACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CashAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Приём наличных из развития"],
    ["21-020", null, ["EXTERNALACCOUNT", "CASHACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALOUTCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALOUTCOME", "CLIENTPERSONALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Выдача наличных из развития клиенту"],                                                                                    
    ["22-010", null, ["EXTERNALACCOUNT", "PERSONALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALOUTCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "ARTICLE", props: { subtype: "EXPENSES", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "EXPENSES", }, identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", component: ArticleRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Списание из развития в расход"],                                                                                    
    ["23-010", null, ["EXTERNALACCOUNT", "EXTERNALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALOUTCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALOUTCOME", "ENTERPRISEEXTERNALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Перемещение по внешним счетам у одного развивающего"],
    ["23-020", null, ["EXTERNALACCOUNT", "EXTERNALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALOUTCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALOUTCOME", "CLIENTPERSONALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Отправка с внешнего счёта на внещний счёт клиента"],
    ["23-030", null, ["EXTERNALACCOUNT", "EXTERNALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALINCOME", "CLIENTPERSONALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Приём на внешний счёт с внещнего счёта клиента"],
    ["23-040", "01-030", ["EXTERNALACCOUNT", "EXTERNALACCOUNT"], null, true, "Перемещение между внешними счетами различных развивающих"],
                                                                                    
    // Отправка с внешнего кассового счёта (ячейки)																	
                                                                                    
    ["24-010", null, ["COFFERACCOUNT", "BANKACCOUNTEXTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "INTERNAL", balance: "WITHDRAWAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", component: BankAccount, },
        { type: "REGBANKACCOUNT", props: { subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", }, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", component: BankAccountRegistration, },
        { type: "REGORGANIZATION", props: { subtype: "EXTERNAL", balance: "ACCRUAL", owner: "NOTREQUIRED", }, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: OrganizationRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: false, owner: "REQUIREDANY", charge: "CLIENTPERSONALOUTCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALOUTCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Отправка из ячейки на расчётный счёт внешний со списанием с клиента"],                                                                                    
    ["25-010", null, ["COFFERACCOUNT", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "INTERNAL", balance: "WITHDRAWAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },        

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Внесение из ячейки на расчётный счёт предприятия"],
    ["25-011", null, ["COFFERACCOUNT", "BANKACCOUNTINTERNAL"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "INTERNAL", balance: "WITHDRAWAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "BANKACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: false, owner: "NOTREQUIRED", }, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", component: BankAccount, },        
        
        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: "CLIENTPERSONALINCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], false, "Внесение из ячейки на расчётный счёт предприятия в пользу клиента"],                                                                                    
    ["26-010", null, ["COFFERACCOUNT", "CASHACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "INTERNAL", balance: "WITHDRAWAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },
        { type: "REGCASHACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CashAccountRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Перемещение из ячейки в кассу предприятия"],
    ["26-011", null, ["COFFERACCOUNT", "CASHACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: true, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", component: Sums, },
        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "EXTERNAL", balance: "WITHDRAWAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "EXTERNAL", balance: "WITHDRAWAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },
        { type: "REGCASHACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CashAccountRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: "CLIENTPERSONALINCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["CLIENTPERSONALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Перемещение из ячейки в кассу предприятия в пользу клиента"],                                                                                    
    ["27-010", null, ["COFFERACCOUNT", "EXTERNALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "INTERNAL", balance: "WITHDRAWAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Внесение из ячейки на внешний счёт предприятия"],
    ["27-011", null, ["COFFERACCOUNT", "EXTERNALACCOUNT"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "COFFERACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: true, }, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", component: CofferAccount, },
        { type: "REGCOFFERACCOUNT", props: { subtype: "INTERNAL", balance: "WITHDRAWAL", }, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", component: CofferAccountRegistration, },

        { type: "EXTERNALACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, owner: "NOTREQUIRED", charge: "ENTERPRISEEXTERNALINCOME", }, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ВС", component: ExternalAccount, },
        { type: "REGEXTERNALACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: ExternalAccountRegistration, },

        { type: "PERSONALACCOUNT", props: { position: "SECONDARY", subtype: "EXTERNAL", balance: "ACCRUAL", suspense: true, owner: "REQUIREDANY", charge: "CLIENTPERSONALINCOME", }, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "КЛ", component: PersonalAccount, },
        { type: "REGPERSONALACCOUNT", props: { balance: "ACCRUAL", }, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", component: PersonalAccountRegistration, },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", props: { charges: ["ENTERPRISEEXTERNALINCOME", "CLIENTPERSONALINCOME"], }, marker: "%%", component: ServiceCharge, },
        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Внесение из ячейки на внешний счёт предприятия в пользу клиента"],
                                                                                    
    // Доход																	
                                                                                    
    ["28-010", "01-010", ["INCOME", "INCOME"], null, true, "Приём безналичных на внешний счёт в доход"],
    ["28-020", "02-010", ["INCOME", "INCOME"], null, false, "Приём безналичных в доход"],
    ["28-030", "16-010", ["INCOME", "INCOME"], null, true, "Начисление наличных в доход"],
    ["28-040", "18-010", ["INCOME", "INCOME"], null, true, "Начисление в развитие доход"],
    ["28-050", null, ["INCOME", "INCOME"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "ACCRUAL", suspense: true, }, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },
        { type: "REGCASHACCOUNT", props: { subtype: "INTERNAL", balance: "ACCRUAL", }, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", component: CashAccountRegistration, },

        { type: "ARTICLE", props: { subtype: "INCOME", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "INCOME", }, identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", component: ArticleRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Взносы акционеров наличными"],
                                                                                    
    // Расход																	
                                                                                    
    ["29-010", "01-050", ["EXPENSE", "EXPENSE"], null, true, "Отправка безналичных из развития в расход"],
    ["29-020", "03-010", ["EXPENSE", "EXPENSE"], null, false, "Отправка безналичных в расход"],
    ["29-030", "12-010", ["EXPENSE", "EXPENSE"], null, true, "Списание наличных в расход"],
    ["29-040", "22-010", ["EXPENSE", "EXPENSE"], null, true, "Списание из развития в расход"],
    ["29-050", null, ["EXPENSE", "EXPENSE"], [
        { type: "SUMEXCHANGE", props: { exchange: false, }, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", component: Sums, },
        { type: "CASHACCOUNT", props: { position: "PRIMARY", subtype: "INTERNAL", balance: "WITHDRAWAL", suspense: false, }, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", component: CashAccount, },

        { type: "ARTICLE", props: { subtype: "EXPENSES", suspense: true, }, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", component: Article, },
        { type: "REGARTICLE", props: { subtype: "EXPENSES", }, identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", component: ArticleRegistration, },

        { type: "CONFIRMATION", props: { transaction: null, autocomplete: false, }, identity: "TYPE:CONFIRMATION", marker: "ПТ", component: Confirmation, },
    ], true, "Выплаты акционерам наличными"],
];
