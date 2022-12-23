type TransactionTypesIdentity =
    "01-010" | "01-020" | "01-030" | "01-040" | "01-050" | "01-060" | "01-070" |
    "02-010" | "02-020" | "02-030" | "02-040" | "02-050" |
    "03-010" | "03-020" | "03-030" | "03-040" | "03-050" |
    "04-010" |
    "05-010" |
    "06-010" | "06-020" |
    "07-010" | "07-020" |
    "08-010" |
    "09-010" |
    "10-010" | "10-020" | "10-030" |
    "11-010" | "11-020" | "11-030" |
    "12-010" | "12-020" |
    "13-010" | "13-020" |
    "14-010" | "14-020" |
    "15-010" | "15-020" | "15-030" | "15-040" | "15-050" |
    "16-010" | "16-020" |
    "17-010" | "17-020" | "17-030" |
    "18-010" |
    "19-010" | "19-020" |
    "20-010" | "20-020" |
    "21-010" | "21-020" | "21-030" | "21-040" | "21-050";

type TransactionAccountsTypes = "BAN" | "BAY" | "CAA" | "PEA" | "XPA";

// Строка автомата определения типа транзакции (TR_Automaton_Map)
type TransactionType = [

    // Уникальный идентификатор типа транзакции
    TransactionTypesIdentity,
    
    // Уникальный идентификатор основного типа транзакции
    TransactionTypesIdentity | null,
    
    // Селектор группы транзакций по комбинациям типов счетов
    [TransactionAccountsTypes, TransactionAccountsTypes],
    
    // Часть отправителя (origin)
    [
        // Тип расчётного счёта: N - внешний расчётный счёт, Y - расчётный счёт организации
        "YR" | "NR" | null,
        // Тип кассового счёта: N - кассовый счёт клиента, Y - кассовый счёт организации
        "YR" | "NR" | null,
        // Тип внешнего счёта: N - внешний счёт клиента, Y - внешний счёт организации
        "YR" | "NR" | null,
        // Тип лицевого счёта: NR - лицевой счёт клиента регулярный, YR - лицевой счёт организации регулярный, NA - лицевой счёт клиента ссудный, YA - лицевой счёт организации ссудный
        "YR" | "NR" | "YA" | "NA" | null
    ],

    // Часть получателя (target) - копия отправителя (origin)
    [
        // Тип расчётного счёта: N - внешний расчётный счёт, Y - расчётный счёт организации
        "YR" | "NR" | null,
        // Тип кассового счёта: N - кассовый счёт клиента, Y - кассовый счёт организации
        "YR" | "NR" | null,
        // Тип внешнего счёта: N - внешний счёт клиента, Y - внешний счёт организации
        "YR" | "NR" | null,
        // Тип лицевого счёта: NR - лицевой счёт клиента регулярный, YR - лицевой счёт организации регулярный, NA - лицевой счёт клиента ссудный, YA - лицевой счёт организации ссудный
        "YR" | "NR" | "YA" | "NA" | null
    ],

    // Расходы/Доходы (article)
    "IN" | "EX" | null,

    // Описание типа транзакции для пользователя
    string
];

export type Automaton = TransactionType[];

export const automaton: Automaton = [

    // ORIGIN: "BAN"/"BAY"

    ["01-010", null, ["BAN", "BAN"], ["NR", null, null, null], ["NR", null, "YR", null], "IN", "Приём безналичных на внешний счет"],
    ["01-020", null, ["BAN", "BAN"], ["NR", null, null, null], ["NR", null, "YR", "NR"], null, "Приём безналичных на внешний счет в пользу клиента"],
    ["01-030", null, ["BAN", "BAN"], ["NR", null, "YR", null], ["NR", null, "YR", null], null, "Перемещение между внешними счетами различных развивающих"],
    ["01-040", null, ["BAN", "BAN"], ["NR", null, "YR", null], ["NR", null, "YR", "NR"], null, "Перемещение между внешними счетами различных развивающих в пользу клиента"],
    ["01-050", null, ["BAN", "BAN"], ["NR", null, "YR", null], ["NR", null, null, null], "EX", "Отправка безналичных из развития в расход"],
    ["01-060", null, ["BAN", "BAN"], ["NR", null, "YR", "NR"], ["NR", null, null, null], null, "Отправка безналичных из развития в пользу клиента"],
    ["01-070", null, ["BAN", "BAN"], ["NR", null, null, null], ["NR", null, null, null], null, "Неопознанный приём безналичных на внешний счет"],

    ["02-010", null, ["BAN", "BAY"], ["NR", null, null, null], ["YR", null, null, null], "IN", "Приём безналичных в доход"],
    ["02-020", null, ["BAN", "BAY"], ["NR", null, null, null], ["YR", null, null, "NR"], null, "Приём безналичных в пользу клиента"],
    ["02-030", null, ["BAN", "BAY"], ["NR", null, "YR", null], ["YR", null, null, null], null, "Приём безналичных из развития"],
    ["02-040", null, ["BAN", "BAY"], ["NR", null, "YR", null], ["YR", null, null, "NR"], null, "Приём безналичных из развития в пользу клиента"],
    ["02-050", null, ["BAN", "BAY"], ["NR", null, null, null], ["YR", null, null, null], null, "Приём неопознанный"],

    ["03-010", null, ["BAY", "BAN"], ["YR", null, null, null], ["NR", null, null, null], "EX", "Отправка безналичных в расход"],
    ["03-020", null, ["BAY", "BAN"], ["YR", null, null, "NR"], ["NR", null, null, null], null, "Отправка безналичных в пользу клиента"],
    ["03-030", null, ["BAY", "BAN"], ["YR", null, null, null], ["NR", null, "YR", null], null, "Отправка безналичных в развитие"],
    ["03-040", null, ["BAY", "BAN"], ["YR", null, null, "NR"], ["NR", null, "YR", null], null, "Отправка безналичных в развитие в пользу клиента"],
    ["03-050", null, ["BAY", "BAN"], ["YR", null, null, null], ["NR", null, null, null], null, "Отправка неопознанная"],
    
    ["04-010", null, ["BAY", "BAY"], ["YR", null, null, null], ["YR", null, null, null], null, "Внутреннее перемещение безналичных"],

    ["05-010", null, ["BAY", "CAA"], ["YR", null, null, null], [null, "YR", null, null], null, "Снятие наличных с расчётного счёта"],

    ["06-010", "02-010", ["BAN", "PEA"], ["NR", null, null, null], ["YR", null, null, null], "IN", "Приём безналичных в доход"],
    ["06-020", "02-020", ["BAN", "PEA"], ["NR", null, null, null], ["YR", null, "NR", null], null, "Приём безналичных в пользу клиента"],

    ["07-010", "01-010", ["BAN", "XPA"], ["NR", null, null, null], ["NR", null, "YR", null], "IN", "Приём безналичных на внешний счет"],
    ["07-020", "01-020", ["BAN", "XPA"], ["NR", null, null, null], ["NR", null, "YR", "NR"], null, "Приём безналичных на внешний счет в пользу клиента"],

    ["08-010", "03-030", ["BAY", "XPA"], ["YR", null, null, null], ["NR", null, "YR", null], null, "Отправка безналичных в развитие"],

    // ORIGIN: "CAA"

    ["09-010", "03-030", ["CAA", "BAY"], [null, "YR", null, null], ["YR", null, null, null], null, "Внесение наличных на расчётный счёт"],

    ["10-010", null, ["CAA", "CAA"], [null, "NR", null, null], [null, "YR", null, "NR"], null, "Внесение наличных клиентом"],
    ["10-020", null, ["CAA", "CAA"], [null, "YR", null, "NR"], [null, "NR", null, null], null, "Выдача наличных клиенту"],
    ["10-030", null, ["CAA", "CAA"], [null, "YR", null, null], [null, "YR", null, null], null, "Внутреннее перемещение наличных"],

    ["11-010", null, ["CAA", "PEA"], [null, "YR", null, null], [null, "YR", null, "NR"], "EX", "Списание наличных в расход"],
    ["11-020", "10-010", ["CAA", "PEA"], [null, "NR", null, null], [null, "YR", null, "NR"], null, "Внесение наличных клиентом"],
    ["11-030", null, ["CAA", "PEA"], [null, "NR", null, null], [null, null, null, "YR"], null, "Взносы акционеров наличными"],

    ["12-010", null, ["CAA", "XPA"], [null, "NR", null, null], [null, null, "YR", "NR"], null, "Внесение наличных клиентом в развитие"],
    ["12-020", null, ["CAA", "XPA"], [null, "YR", null, null], [null, null, "YR", null], null, "Внесение наличных в развитие"],

    // ORIGIN: "PEA"

    ["13-010", "03-020", ["PEA", "BAN"], ["YR", null, null, null], ["NR", null, null, "NR"], null, "Отправка безналичных в пользу клиента"],
    ["13-020", "03-040", ["PEA", "BAN"], ["YR", null, null, "NR"], ["NR", null, "YR", null], null, "Отправка безналичных в развитие в пользу клиента"],

    ["14-010", null, ["PEA", "CAA"], [null, null, null, null], [null, "YR", null, null], "IN", "Начисление наличных в доход"],
    ["14-020", "10-020", ["PEA", "CAA"], [null, null, null, "NR"], [null, "NR", null, null], null, "Выдача наличных клиенту"],

    ["15-010", null, ["PEA", "PEA"], [null, null, null, "NR"], [null, null, null, "NR"], null, "Взаимозачёт между клиентами"],
    ["15-020", null, ["PEA", "PEA"], [null, null, null, "NR"], [null, null, null, "YR"], null, "Списание средств с клиента"],
    ["15-030", null, ["PEA", "PEA"], [null, null, null, "YR"], [null, null, null, "NR"], null, "Начисление средств клиенту"],
    ["15-040", null, ["PEA", "PEA"], [null, null, null, "YR"], [null, null, null, "NA"], null, "Выдача клиенту ссуды"],
    ["15-050", null, ["PEA", "PEA"], [null, null, null, "NA"], [null, null, null, "YR"], null, "Погашение клиентом ссуды"],

    ["16-010", null, ["PEA", "XPA"], [null, null, null, null], [null, null, "YR", null], null, "Начисление в развитие доход"],
    ["16-020", null, ["PEA", "XPA"], [null, null, null, null], [null, null, "YR", "NR"], null, "Начисление в развитие и клиенту"],

    // ORIGIN: "XPA"

    ["17-010", null, ["XPA", "BAN"], ["NR", null, "YR", null], ["NR", null, null, null], "EX", "Отправка безналичных из развития в расход"],
    ["17-020", null, ["XPA", "BAN"], ["NR", null, "YR", null], ["NR", null, null, "NR"], null, "Отправка безналичных из развития в пользу клиента"],
    ["17-030", "02-040", ["XPA", "BAN"], ["NR", null, "YR", null], ["YR", null, null, "NR"], null, "Приём безналичных из развития в пользу клиента"],

    ["18-010", null, ["XPA", "BAY"], ["NR", null, "YR", null], ["YR", null, null, null], null, "Приём безналичных из развития"],

    ["19-010", null, ["XPA", "CAA"], [null, null, "YR", null], [null, "YR", null, null], null, "Приём наличных из развития"],
    ["19-020", null, ["XPA", "CAA"], [null, null, "YR", "NR"], [null, "NR", null, null], null, "Выдача наличных из развития клиенту"],

    ["20-010", null, ["XPA", "PEA"], [null, null, "YR", null], [null, null, null, null], "EX", "Списание из развития в расход"],
    ["20-020", null, ["XPA", "PEA"], [null, null, "YR", "NR"], [null, null, null, null], null, "Списание из развития и клиента"], // ?????????????????

    ["21-010", null, ["XPA", "XPA"], [null, null, "YR", null], [null, null, "YR", null], null, "Перемещение по внешним счетам у одного развивающего"],
    ["21-020", null, ["XPA", "XPA"], [null, null, "YR", "NR"], [null, null, "YR", null], null, "Отправка с внешнего счёта на внещний счёт клиента"],
    ["21-030", null, ["XPA", "XPA"], [null, null, "NR", null], [null, null, "YR", null], null, "Приём на внешний счёт с внещнего счёта клиента"],
    ["21-040", "01-030", ["XPA", "BAN"], ["NR", null, "YR", null], ["NR", null, "YR", null], null, "Перемещение между внешними счетами различных развивающих"],
    ["21-050", "01-040", ["XPA", "BAN"], ["NR", null, "YR", null], ["NR", null, "YR", "NR"], null, "Перемещение между внешними счетами различных развивающих в пользу клиента"],
];
