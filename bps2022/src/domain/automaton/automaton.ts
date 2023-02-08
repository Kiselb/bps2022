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

export type WizardPagesTypes = "SUMEXCHANGE" | "BANKACCOUNT" | "CASHACCOUNT" | "PERSONALACCOUNT" | "LENDINGACCOUNT" | "EXTERNALACCOUNT" | "COFFERACCOUNT" | "OVERDRAFT" | "SERVICEFEE" | "ARTICLE" | "CONFIRMATION";
export type WizardPagesTypes_SUMEXCHANGE = { type: "SUMEXCHANGE", exchange: boolean };
export type WizardPagesTypes_BANKACCOUNT = { type: "BANKACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, fee: boolean };
export type WizardPagesTypes_CASHACCOUNT = { type: "CASHACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, fee: boolean };
export type WizardPagesTypes_PERSONALACCOUNT = { type: "PERSONALACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, fee: boolean };
export type WizardPagesTypes_LENDINGACCOUNT = { type: "LENDINGACCOUNT", primary: boolean, direction: -1 | 1 };
export type WizardPagesTypes_EXTERNALACCOUNT = { type: "EXTERNALACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1, fee: boolean };
export type WizardPagesTypes_COFFERACCOUNT = { type: "COFFERACCOUNT", primary: boolean, subtype: "INTERNAL" | "EXTERNAL", direction: -1 | 1 };
export type WizardPagesTypes_OVERDRAFT = { type: "OVERDRAFT", primary: boolean, direction: -1 | 1 };
export type WizardPagesTypes_SERVICEFEE = { type: "SERVICEFEE" };
export type WizardPagesTypes_ARTICLE = { type: "ARTICLE", subtype: "INCOME" | "EXPENSES" };
export type WizardPagesTypes_CONFIRMATION = { type: "CONFIRMATION" };

export type WizardPagesTypesUnion =
    WizardPagesTypes_SUMEXCHANGE
    | WizardPagesTypes_BANKACCOUNT
    | WizardPagesTypes_CASHACCOUNT
    | WizardPagesTypes_PERSONALACCOUNT
    | WizardPagesTypes_LENDINGACCOUNT
    | WizardPagesTypes_EXTERNALACCOUNT
    | WizardPagesTypes_COFFERACCOUNT
    | WizardPagesTypes_OVERDRAFT
    | WizardPagesTypes_SERVICEFEE
    | WizardPagesTypes_CONFIRMATION
    | WizardPagesTypes_ARTICLE;

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
    string
];

export type Automaton = TransactionType[];

export const automaton: Automaton = [
    
    // Отправка с расчётного счёта (внутреннего или внешнего)

    ["01-010", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "ARTICLE", subtype: "INCOME" },
        { type: "CONFIRMATION" },
    ], "Приём безналичных на внешний счёт в доход"],
    ["01-020", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Приём безналичных на внешний счет в пользу клиента"],		
    ["01-030", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: -1, fee: true },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Перемещение между внешними счетами различных развивающих"],
    ["01-050", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: -1, fee: true },
        { type: "ARTICLE", subtype: "EXPENSES" },
        { type: "CONFIRMATION" },
    ], "Отправка безналичных из развития в расход"],
    ["01-060", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, fee: true },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Отправка безналичных из развития в пользу клиента"],
    ["01-070", null, ["BAE", "BAE"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Неопознанный приём безналичных на внешний счет"],													
                                                                                    
    ["02-010", null, ["BAE", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "ARTICLE", subtype: "INCOME" },
        { type: "CONFIRMATION" },
    ], "Приём безналичных в доход"],							
    ["02-020", null, ["BAE", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Приём безналичных в пользу клиента"],				
    ["02-030", null, ["BAE", "BAI"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: -1, fee: true },
        { type: "CONFIRMATION" },
    ], "Приём безналичных из развития"],
    ["02-050", null, ["BAE", "BAI"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Приём неопознанный"],
                                                                                    
    ["03-010", null, ["BAI", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "ARTICLE", subtype: "EXPENSES" },
        { type: "CONFIRMATION" },
    ], "Отправка безналичных в расход"],
    ["03-020", null, ["BAI", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, fee: true },
        { type: "CONFIRMATION" },
    ], "Отправка безналичных в пользу клиента"],
    ["03-030", null, ["BAI", "BAE"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Отправка безналичных в развитие"],
    ["03-050", null, ["BAI", "BAE"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Отправка неопознанная"],
                                                                                    
    ["04-010", null, ["BAI", "BAI"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
        ], "Внутреннее перемещение безналичных"],
    ["04-020", null, ["BAI", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "OVERDRAFT", primary: true, direction: 1 },
        { type: "CONFIRMATION" },
    ], "Погашение овердрафта"],
    ["04-030", null, ["BAI", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "OVERDRAFT", primary: true, direction: -1 },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Заимствование по овердрафту"],
                                                                                    
    ["05-010", null, ["BAI", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Снятие наличных с расчётного счёта"],
                                                                                    
    ["06-010", "02-010", ["BAE", "PAC"], null, "Приём безналичных в доход"],
    ["06-020", "02-020", ["BAE", "PAC"], null, "Приём безналичных в пользу клиента"],
                                                                                    
    ["07-010", "01-010", ["BAE", "XAC"], null, "Приём безналичных на внешний счет"],
    ["07-020", "01-020", ["BAE", "XAC"], null, "Приём безналичных на внешний счет в пользу клиента"],
                                                                                    
    ["08-010", "03-030", ["BAI", "XAC"], null, "Отправка безналичных в развитие"],
                                                                                    
    ["09-010", null, ["BAI", "COA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: 1 },
        { type: "CONFIRMATION" },
    ], "Отправка безналичных в ячейку"],
    ["09-011", null, ["BAI", "COA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1 },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, fee: true },
        { type: "CONFIRMATION" },
    ], "Отправка безналичных в ячейку клиента"],
                                                                                    
    // Отправка с кассового счёта																	
                                                                                    
    ["10-010", null, ["CAA", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Внесение наличных на расчётный счёт"],
                                                                                    
    ["11-010", null, ["CAA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Внесение наличных клиентом"],				
    ["11-020", null, ["CAA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, fee: true },
        { type: "CONFIRMATION" },
    ], "Выдача наличных клиенту"],
    ["11-030", null, ["CAA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Внутреннее перемещение наличных"],
                                                                                    
    ["12-010", null, ["CAA", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "ARTICLE", subtype: "EXPENSES" },
        { type: "CONFIRMATION" },
    ], "Списание наличных в расход"],
    ["12-020", "10-010", ["CAA", "PAC"], null, "Внесение наличных клиентом"],
                                                                                    
    ["13-010", null, ["CAA", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Внесение наличных клиентом в развитие"],
    ["13-020", null, ["CAA", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "EXTERNALACCOUNT", primary: false, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Внесение наличных в развитие"],
                                                                                    
    ["14-010", null, ["CAA", "COA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: 1 },
        { type: "CONFIRMATION" },
    ], "Внесение наличных в ячейку предприятия"],
    ["14-011", null, ["CAA", "COA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1 },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, fee: true },
        { type: "CONFIRMATION" },
    ], "Внесение наличных в ячейку клиента"],
                                                                                    
    // Отправка с лицевого счёта																	
                                                                                    
    ["15-010", "03-020", ["PAC", "BAE"], null, "Отправка безналичных в пользу клиента"],
                                                                                    
    ["16-010", null, ["PAC", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "ARTICLE", subtype: "INCOME" },
        { type: "CONFIRMATION" },
    ], "Начисление наличных в доход"],
    ["16-020", "11-020", ["PAC", "CAA"], null, "Выдача наличных клиенту"],
                                                                                    
    ["17-010", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: true },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Взаимозачёт между клиентами"],
    ["17-020", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: false },
        { type: "ARTICLE", subtype: "INCOME" },
        { type: "CONFIRMATION" },
    ], "Списание средств с клиента"],
    ["17-030", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "PERSONALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "ARTICLE", subtype: "EXPENSES" },
        { type: "CONFIRMATION" },
    ], "Начисление средств клиенту"],
    ["17-040", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "LENDINGACCOUNT", primary: true, direction: -1 },
        { type: "PERSONALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Выдача клиенту ссуды"],
    ["17-050", null, ["PAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "PERSONALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "LENDINGACCOUNT", primary: true, direction: 1 },
        { type: "CONFIRMATION" },
    ], "Погашение клиентом ссуды"],
                                                                                    
    ["18-010", null, ["PAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "ARTICLE", subtype: "INCOME" },
        { type: "CONFIRMATION" },
    ], "Начисление в развитие доход"],
    ["18-020", null, ["PAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Начисление в развитие и клиенту"],
                                                                                    
    // Отправка с внешнего лицевого счёта																	
                                                                                    
    ["19-010", "01-050", ["XAC", "BAE"], null, "Отправка безналичных из развития в расход"],
    ["19-020", "01-060", ["XAC", "BAE"], null, "Отправка безналичных из развития в пользу клиента"],
                                                                                    
    ["20-010", "02-030", ["XAC", "BAI"], null, "Приём безналичных из развития"],
                                                                                    
    ["21-010", null, ["XAC", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: true },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Приём наличных из развития"],
    ["21-020", null, ["XAC", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: true },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, fee: true },
        { type: "CONFIRMATION" },
    ], "Выдача наличных из развития клиенту"],
                                                                                    
    ["22-010", null, ["XAC", "PAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "ARTICLE", subtype: "EXPENSES" },
        { type: "CONFIRMATION" },
    ], "Списание из развития в расход"],
                                                                                    
    ["23-010", null, ["XAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Перемещение по внешним счетам у одного развивающего"],
    ["23-020", null, ["XAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: true },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1, fee: true },
        { type: "CONFIRMATION" },
    ], "Отправка с внешнего счёта на внещний счёт клиента"],
    ["23-030", null, ["XAC", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "PERSONALACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Приём на внешний счёт с внещнего счёта клиента"],
    ["23-040", "01-030", ["XAC", "XAC"], null, "Перемещение между внешними счетами различных развивающих"],
                                                                                    
    // Отправка с внешнего кассового счёта (ячейки)																	
                                                                                    
    ["24-010", null, ["COA", "BAE"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1 },
        { type: "BANKACCOUNT", primary: true, subtype: "EXTERNAL", direction: 1, fee: false },        
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: -1, fee: true },
        { type: "CONFIRMATION" },
    ], "Отправка из ячейки на расчётный счёт внешний со списанием с клиента"],
                                                                                    
    ["25-010", null, ["COA", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1 },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },        
        { type: "CONFIRMATION" },
    ], "Внесение из ячейки на расчётный счёт предприятия"],
    ["25-011", null, ["COA", "BAI"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1 },
        { type: "BANKACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },        
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Внесение из ячейки на расчётный счёт предприятия в пользу клиента"],
                                                                                    
    ["26-010", null, ["COA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1 },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "CONFIRMATION" },
    ], "Перемещение из ячейки в кассу предприятия"],
    ["26-011", null, ["COA", "CAA"], [
        { type: "SUMEXCHANGE", exchange: true },
        { type: "COFFERACCOUNT", primary: true, subtype: "EXTERNAL", direction: -1 },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Перемещение из ячейки в кассу предприятия в пользу клиента"],
                                                                                    
    ["27-010", null, ["COA", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1 },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Внесение из ячейки на внешний счёт предприятия"],
    ["27-011", null, ["COA", "XAC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "COFFERACCOUNT", primary: true, subtype: "INTERNAL", direction: -1 },
        { type: "EXTERNALACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: true },
        { type: "PERSONALACCOUNT", primary: false, subtype: "EXTERNAL", direction: 1, fee: true },
        { type: "CONFIRMATION" },
    ], "Внесение из ячейки на внешний счёт предприятия в пользу клиента"],
                                                                                    
    // Доход																	
                                                                                    
    ["28-010", "01-010", ["INC", "INC"], null, "Приём безналичных на внешний счёт в доход?"],
    ["28-020", "02-010", ["INC", "INC"], null, "Приём безналичных в доход"],
    ["28-030", "16-010", ["INC", "INC"], null, "Начисление наличных в доход"],
    ["28-040", "18-010", ["INC", "INC"], null, "Начисление в развитие доход"],
    ["28-050", null, ["INC", "INC"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: 1, fee: false },
        { type: "ARTICLE", subtype: "INCOME" },
        { type: "CONFIRMATION" },
    ], "Взносы акционеров наличными"],
                                                                                    
    // Расход																	
                                                                                    
    ["29-010", "01-050", ["EXP", "EXP"], null, "Отправка безналичных из развития в расход"],
    ["29-020", "03-010", ["EXP", "EXP"], null, "Отправка безналичных в расход"],
    ["29-030", "12-010", ["EXP", "EXP"], null, "Списание наличных в расход"],
    ["29-040", "22-010", ["EXP", "EXP"], null, "Списание из развития в расход"],
    ["29-050", null, ["EXP", "EXP"], [
        { type: "SUMEXCHANGE", exchange: false },
        { type: "CASHACCOUNT", primary: true, subtype: "INTERNAL", direction: -1, fee: false },
        { type: "ARTICLE", subtype: "EXPENSES" },
        { type: "CONFIRMATION" },
    ], "Выплаты акционерам наличными"],
];
