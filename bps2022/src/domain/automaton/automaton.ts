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
    "17-010" | "17-020" | "17-030" | "17-040" | "17-050" |
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

export type TransactionGroupSelector = "BAE" | "BAI" | "CAA" | "PAC" | "XAC" | "COA" | "INC" | "EXP";
export type TransactionAccountsTypes = "BAE" | "BAI" | "CCA" | "ECA" | "CPA" | "EPA" | "EEA" | "CEA" | "BAO" | "CLA" | "ECO" | "CCO";

export type WizardPagesTypes_SUMEXCHANGE = { type: "SUMEXCHANGE", exchange: boolean, identity: string, marker: string, };
export type WizardPagesTypes_BANKACCOUNT = { type: "BANKACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, registration: boolean, identity: string, marker: string };
export type WizardPagesTypes_CASHACCOUNT = { type: "CASHACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, registration: boolean, identity: string, marker: string };
export type WizardPagesTypes_PERSONALACCOUNT = { type: "PERSONALACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, registration: boolean, identity: string, charge: "CLIENTPERSONALINCOME" | "CLIENTPERSONALOUTCOME" | "CLIENTPERSONALINCOMENETTING" | "CLIENTPERSONALOUTCOMENETTING" | null, marker: string };
export type WizardPagesTypes_LENDINGACCOUNT = { type: "LENDINGACCOUNT", primary: boolean, direction: -1 | 1, registration: boolean, identity: string, marker: string };
export type WizardPagesTypes_EXTERNALACCOUNT = { type: "EXTERNALACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, registration: boolean, identity: string, charge: "ENTERPRISEEXTERNALINCOME" | "ENTERPRISEEXTERNALOUTCOME", marker: string };
export type WizardPagesTypes_COFFERACCOUNT = { type: "COFFERACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, registration: boolean, identity: string, marker: string };
export type WizardPagesTypes_OVERDRAFT = { type: "OVERDRAFT", primary: boolean, direction: -1 | 1, registration: boolean, identity: string, marker: string };
export type WizardPagesTypes_SERVICEFEE = { type: "SERVICEFEE", identity: string, marker: string };
export type WizardPagesTypes_ARTICLE = { type: "ARTICLE", subtype: "INCOME" | "EXPENSES", registration: boolean, identity: string, marker: string };
export type WizardPagesTypes_SERVICECHARGE = { type: "SERVICECHARGE", identity: string, charges: TransactionCharges[], marker: string };
export type WizardPagesTypes_CONFIRMATION = { type: "CONFIRMATION", identity: string, marker: string };

export type WizardPagesTypes_REGBANKACCOUNT = { type: "REGBANKACCOUNT", subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, registration: boolean, identity: string, marker: string };
export type WizardPagesTypes_REGORGANIZATION = { type: "REGORGANIZATION", subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, client: boolean, identity: string, marker: string };
export type WizardPagesTypes_REGCASHACCOUNT = { type: "REGCASHACCOUNT", subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, identity: string, marker: string };
export type WizardPagesTypes_REGPERSONALACCOUNT = { type: "REGPERSONALACCOUNT", subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, identity: string, marker: string };
export type WizardPagesTypes_REGLENDINGACCOUNT = { type: "REGLENDINGACCOUNT", identity: string, marker: string };
export type WizardPagesTypes_REGEXTERNALACCOUNT = { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, identity: string, marker: string };
export type WizardPagesTypes_REGCOFFERACCOUNT = { type: "REGCOFFERACCOUNT", subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, identity: string, marker: string };
export type WizardPagesTypes_REGOVERDRAFT = { type: "REGOVERDRAFT", identity: string, marker: string };
export type WizardPagesTypes_REGARTICLE = { type: "REGARTICLE", subtype: "INCOME" | "EXPENSES", identity: string, marker: string };

export type WizardPagesRegularTypes =
    WizardPagesTypes_SUMEXCHANGE
    | WizardPagesTypes_BANKACCOUNT
    | WizardPagesTypes_CASHACCOUNT
    | WizardPagesTypes_PERSONALACCOUNT
    | WizardPagesTypes_LENDINGACCOUNT
    | WizardPagesTypes_EXTERNALACCOUNT
    | WizardPagesTypes_COFFERACCOUNT
    | WizardPagesTypes_OVERDRAFT
    | WizardPagesTypes_SERVICEFEE
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
        case "SERVICEFEE":
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
        case "REGLENDINGACCOUNT":
        case "REGEXTERNALACCOUNT":
        case "REGCOFFERACCOUNT":
        case "REGOVERDRAFT":
        case "REGARTICLE":
            return true;
        default:
            return false;
    }
}

// Строка автомата определения типа транзакции (TR_Automaton_Map_V2)
export type TransactionType = [

    // Уникальный идентификатор типа транзакции
    TransactionTypesIdentity,
    
    // Уникальный идентификатор основного типа транзакции
    TransactionTypesIdentity | null,
    
    // Селектор группы транзакций по комбинациям типов счетов
    [TransactionGroupSelector, TransactionGroupSelector],

    // Группы параметров
    WizardPagesTypesUnion[] | null,
        
    // Описание типа транзакции для пользователя
    string,
];

export type TransactionCharges = 
    "CLIENTPERSONALINCOME"
    | "CLIENTPERSONALOUTCOME"
    | "CLIENTPERSONALINCOMENETTING"
    | "CLIENTPERSONALOUTCOMENETTING"
    | "ENTERPRISEEXTERNALINCOME"
    | "ENTERPRISEEXTERNALOUTCOME";

export function isChargedPage<U extends { charge: string }>(page: WizardPagesTypesUnion | U): page is U {
    return ("charge" in page);
}

export type Automaton = TransactionType[];

export const automaton: Automaton = [
    
    // Отправка с расчётного счёта (внутреннего или внешнего)

    ["01-010", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: true, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "ARTICLE", subtype: "INCOME", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", },
        { type: "REGARTICLE", subtype: "INCOME", identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Приём безналичных на внешний счёт в доход"],
    ["01-020", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: true, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALINCOME", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALINCOME", "ENTERPRISEEXTERNALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Приём безналичных на внешний счет в пользу клиента"],		
    ["01-030", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: true, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: true, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALOUTCOME", marker: "ВС", },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALOUTCOME", "ENTERPRISEEXTERNALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Перемещение между внешними счетами различных развивающих"],
    ["01-050", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: true, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALOUTCOME", marker: "ВС", },
        { type: "ARTICLE", subtype: "EXPENSES", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", },
        { type: "REGARTICLE", subtype: "EXPENSES", identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка безналичных из развития в расход"],
    ["01-060", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: true, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, registration: false, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALOUTCOME", "ENTERPRISEEXTERNALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка безналичных из развития в пользу клиента"],
    ["01-070", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: true, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        // { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Неопознанный приём безналичных на внешний счет"],													
                                                                                    
    ["02-010", null, ["BAE", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "ARTICLE", subtype: "INCOME", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", },
        { type: "REGARTICLE", subtype: "INCOME", identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Приём безналичных в доход"],							
    ["02-020", null, ["BAE", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALINCOME", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Приём безналичных в пользу клиента"],				
    ["02-030", null, ["BAE", "BAI"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: true, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALOUTCOME", marker: "ВС", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Приём безналичных из развития"],
    ["02-050", null, ["BAE", "BAI"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Приём неопознанный"],                                                                                    
    ["03-010", null, ["BAI", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "ARTICLE", subtype: "EXPENSES", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", },
        { type: "REGARTICLE", subtype: "EXPENSES", identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка безналичных в расход"],
    ["03-020", null, ["BAI", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка безналичных в пользу клиента"],
    ["03-030", null, ["BAI", "BAE"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: true, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка безналичных в развитие"],
    ["03-050", null, ["BAI", "BAE"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "EXTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка неопознанная"],                                                                                    
    ["04-010", null, ["BAI", "BAI"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
        ], "Внутреннее перемещение безналичных"],
    ["04-020", null, ["BAI", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        //{ type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "OVERDRAFT", primary: true, direction: 1, registration: false, identity: "TYPE:OVERDRAFT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE", marker: "ОД", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Погашение овердрафта"],
    ["04-030", null, ["BAI", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "OVERDRAFT", primary: true, direction: -1, registration: true, identity: "TYPE:OVERDRAFT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE", marker: "ОД", },
        { type: "REGOVERDRAFT", identity: "TYPE:REGOVERDRAFT", marker: "?", },

        //{ type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        //{ type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        //{ type: "REGORGANIZATION", subtype: "INTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Заимствование по овердрафту"],                                                                                    
    ["05-010", null, ["BAI", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", },
        { type: "REGCASHACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Снятие наличных с расчётного счёта"],                                                                                    
    ["06-010", "02-010", ["BAE", "PAC"], null, "Приём безналичных в доход"],
    ["06-020", "02-020", ["BAE", "PAC"], null, "Приём безналичных в пользу клиента"],                                                                                    
    ["07-010", "01-010", ["BAE", "XAC"], null, "Приём безналичных на внешний счет"],
    ["07-020", "01-020", ["BAE", "XAC"], null, "Приём безналичных на внешний счет в пользу клиента"],                                                                                    
    ["08-010", "03-030", ["BAI", "XAC"], null, "Отправка безналичных в развитие"],
    ["09-010", null, ["BAI", "COA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка безналичных в ячейку"],
    ["09-011", null, ["BAI", "COA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:-1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: -1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "COFFERACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка безналичных в ячейку клиента"],
                                                                                    
    // Отправка с кассового счёта																	
                                                                                    
    ["10-010", null, ["CAA", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", },

        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "РС", },
        { type: "REGBANKACCOUNT", subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:REGBANKACCOUNT;DIRECTION:1;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "?", },
        { type: "REGORGANIZATION", subtype: "INTERNAL", direction: 1, client: false, identity: "TYPE:REGORGANIZATION;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение наличных на расчётный счёт"],                                                                                    
    ["11-010", null, ["CAA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", },
        { type: "REGCASHACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALINCOME", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение наличных клиентом"],				
    ["11-020", null, ["CAA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Выдача наличных клиенту"],
    ["11-030", null, ["CAA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", },

        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", },
        { type: "REGCASHACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внутреннее перемещение наличных"],                                                                                    
    ["12-010", null, ["CAA", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", },
        { type: "ARTICLE", subtype: "EXPENSES", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", },
        { type: "REGARTICLE", subtype: "EXPENSES", identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Списание наличных в расход"],
    ["12-020", "10-010", ["CAA", "PAC"], null, "Внесение наличных клиентом"],                                                                                    
    ["13-010", null, ["CAA", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALINCOME", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALINCOME", "CLIENTPERSONALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение наличных клиентом в развитие"],
    ["13-020", null, ["CAA", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", },

        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение наличных в развитие"],                                                                                    
    ["14-010", null, ["CAA", "COA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", },

        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение наличных в ячейку предприятия"],
    ["14-011", null, ["CAA", "COA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", },

        { type: "COFFERACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение наличных в ячейку клиента"],
                                                                                    
    // Отправка с лицевого счёта																	
                                                                                    
    ["15-010", "03-020", ["PAC", "BAE"], null, "Отправка безналичных в пользу клиента"],                                                                                    
    ["16-010", null, ["PAC", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", },
        { type: "REGCASHACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "ARTICLE", subtype: "INCOME", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", },
        { type: "REGARTICLE", subtype: "INCOME", identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Начисление наличных в доход"],
    ["16-020", "11-020", ["PAC", "CAA"], null, "Выдача наличных клиенту"],                                                                                    
    ["17-010", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOMENETTING", marker: "КЛ", },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALINCOMENETTING", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALOUTCOMENETTING", "CLIENTPERSONALINCOMENETTING"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Взаимозачёт между клиентами"],
    ["17-020", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },
        { type: "ARTICLE", subtype: "INCOME", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", },
        { type: "REGARTICLE", subtype: "INCOME", identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Списание средств с клиента"],
    ["17-030", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: null, marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "ARTICLE", subtype: "EXPENSES", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", },
        { type: "REGARTICLE", subtype: "EXPENSES", identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Начисление средств клиенту"],
    ["17-040", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },

        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: null, marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "LENDINGACCOUNT", primary: true, direction: -1, registration: true, identity: "TYPE:LENDINGACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE", marker: "СУ", },
        { type: "REGLENDINGACCOUNT", identity: "TYPE:REGLENDINGACCOUNT", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Выдача клиенту ссуды"],
    ["17-050", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: null, marker: "КЛ", },
        { type: "LENDINGACCOUNT", primary: true, direction: 1, registration: false, identity: "TYPE:LENDINGACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE", marker: "СУ", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Погашение клиентом ссуды"],                                                                                    
    ["18-010", null, ["PAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "ARTICLE", subtype: "INCOME", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", },
        { type: "REGARTICLE", subtype: "INCOME", identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Начисление в развитие доход"],
    ["18-020", null, ["PAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALINCOME", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALINCOME", "CLIENTPERSONALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Начисление в развитие и клиенту"],
                                                                                    
    // Отправка с внешнего лицевого счёта																	
                                                                                    
    ["19-010", "01-050", ["XAC", "BAE"], null, "Отправка безналичных из развития в расход"],
    ["19-020", "01-060", ["XAC", "BAE"], null, "Отправка безналичных из развития в пользу клиента"],                                                                                    
    ["20-010", "02-030", ["XAC", "BAI"], null, "Приём безналичных из развития"],
    ["21-010", null, ["XAC", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALOUTCOME", marker: "ВС", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", },
        { type: "REGCASHACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Приём наличных из развития"],
    ["21-020", null, ["XAC", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALOUTCOME", marker: "ВС", },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALOUTCOME", "CLIENTPERSONALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Выдача наличных из развития клиенту"],                                                                                    
    ["22-010", null, ["XAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALOUTCOME", marker: "ВС", },
        { type: "ARTICLE", subtype: "EXPENSES", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", },
        { type: "REGARTICLE", subtype: "EXPENSES", identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Списание из развития в расход"],                                                                                    
    ["23-010", null, ["XAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALOUTCOME", marker: "ВС", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALOUTCOME", "ENTERPRISEEXTERNALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Перемещение по внешним счетам у одного развивающего"],
    ["23-020", null, ["XAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALOUTCOME", marker: "ВС", },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALOUTCOME", "CLIENTPERSONALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка с внешнего счёта на внещний счёт клиента"],
    ["23-030", null, ["XAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALINCOME", "CLIENTPERSONALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Приём на внешний счёт с внещнего счёта клиента"],
    ["23-040", "01-030", ["XAC", "XAC"], null, "Перемещение между внешними счетами различных развивающих"],
                                                                                    
    // Отправка с внешнего кассового счёта (ячейки)																	
                                                                                    
    ["24-010", null, ["COA", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "INTERNAL", direction: -1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, registration: false, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", marker: "РС", },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, registration: false, identity: "TYPE:PERSONALACCOUNT;DIRECTION:-1;PRIMARY:FALSE;REGISTRATION:FALSE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALOUTCOME", marker: "КЛ", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALOUTCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Отправка из ячейки на расчётный счёт внешний со списанием с клиента"],                                                                                    
    ["25-010", null, ["COA", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "INTERNAL", direction: -1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: false, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", },        

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение из ячейки на расчётный счёт предприятия"],
    ["25-011", null, ["COA", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "INTERNAL", direction: -1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: false, identity: "TYPE:BANKACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "РС", },        
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALINCOME", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение из ячейки на расчётный счёт предприятия в пользу клиента"],                                                                                    
    ["26-010", null, ["COA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "INTERNAL", direction: -1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", },
        { type: "REGCASHACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        //{ type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Перемещение из ячейки в кассу предприятия"],
    ["26-011", null, ["COA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: true, identity: "TYPE:SUMEXCHANGE;EXCHANGE:TRUE", marker: "СК", },
        { type: "COFFERACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "EXTERNAL", direction: -1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", },
        { type: "REGCASHACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALINCOME", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["CLIENTPERSONALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Перемещение из ячейки в кассу предприятия в пользу клиента"],                                                                                    
    ["27-010", null, ["COA", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "INTERNAL", direction: -1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение из ячейки на внешний счёт предприятия"],
    ["27-011", null, ["COA", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: true, identity: "TYPE:COFFERACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "ЯЧ", },
        { type: "REGCOFFERACCOUNT", subtype: "INTERNAL", direction: -1, identity: "TYPE:REGCOFFERACCOUNT;DIRECTION:-1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:EXTERNALACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", charge: "ENTERPRISEEXTERNALINCOME", marker: "ВС", },
        { type: "REGEXTERNALACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGEXTERNALACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, registration: true, identity: "TYPE:PERSONALACCOUNT;DIRECTION:1;PRIMARY:FALSE;REGISTRATION:TRUE;SUBTYPE:EXTERNAL", charge: "CLIENTPERSONALINCOME", marker: "КЛ", },
        { type: "REGPERSONALACCOUNT", subtype: "EXTERNAL", direction: 1, identity: "TYPE:REGPERSONALACCOUNT;DIRECTION:1;SUBTYPE:EXTERNAL", marker: "?", },

        { type: "SERVICECHARGE", identity: "TYPE:SERVICECHARGE", charges: ["ENTERPRISEEXTERNALINCOME", "CLIENTPERSONALINCOME"], marker: "%%", },
        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Внесение из ячейки на внешний счёт предприятия в пользу клиента"],
                                                                                    
    // Доход																	
                                                                                    
    ["28-010", "01-010", ["INC", "INC"], null, "Приём безналичных на внешний счёт в доход"],
    ["28-020", "02-010", ["INC", "INC"], null, "Приём безналичных в доход"],
    ["28-030", "16-010", ["INC", "INC"], null, "Начисление наличных в доход"],
    ["28-040", "18-010", ["INC", "INC"], null, "Начисление в развитие доход"],
    ["28-050", null, ["INC", "INC"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, registration: true, identity: "TYPE:CASHACCOUNT;DIRECTION:1;PRIMARY:TRUE;REGISTRATION:TRUE;SUBTYPE:INTERNAL", marker: "КС", },
        { type: "REGCASHACCOUNT", subtype: "INTERNAL", direction: 1, identity: "TYPE:REGCASHACCOUNT;DIRECTION:1;SUBTYPE:INTERNAL", marker: "?", },

        { type: "ARTICLE", subtype: "INCOME", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:INCOME", marker: "ДХ", },
        { type: "REGARTICLE", subtype: "INCOME", identity: "TYPE:REGARTICLE;SUBTYPE:INCOME", marker: "?", },

        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Взносы акционеров наличными"],
                                                                                    
    // Расход																	
                                                                                    
    ["29-010", "01-050", ["EXP", "EXP"], null, "Отправка безналичных из развития в расход"],
    ["29-020", "03-010", ["EXP", "EXP"], null, "Отправка безналичных в расход"],
    ["29-030", "12-010", ["EXP", "EXP"], null, "Списание наличных в расход"],
    ["29-040", "22-010", ["EXP", "EXP"], null, "Списание из развития в расход"],
    ["29-050", null, ["EXP", "EXP"], [
        { type: "SUMEXCHANGE", exchange: false, identity: "TYPE:SUMEXCHANGE;EXCHANGE:FALSE", marker: "СК", },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, registration: false, identity: "TYPE:CASHACCOUNT;DIRECTION:-1;PRIMARY:TRUE;REGISTRATION:FALSE;SUBTYPE:INTERNAL", marker: "КС", },

        { type: "ARTICLE", subtype: "EXPENSES", registration: true, identity: "TYPE:ARTICLE;REGISTRATION:TRUE;SUBTYPE:EXPENSES", marker: "РХ", },
        { type: "REGARTICLE", subtype: "EXPENSES", identity: "TYPE:REGARTICLE;SUBTYPE:EXPENSES", marker: "?", },

        { type: "CONFIRMATION", identity: "TYPE:CONFIRMATION", marker: "ПТ", },
    ], "Выплаты акционерам наличными"],
];
