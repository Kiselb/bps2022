import { FC } from 'react';

import { WizardStageType } from './types';

// Статические свойства компонентов, соответсвующих шагам Wizard. Статические - определяются непосредственно в описании шага Wizard
export type WizardStageProps = {
    exchange: "ENABLED" | "DISABLED" | "NONE"                           // Разрешение конвертации при определении сумм транзакции
    position: "PRIMARY" | "SECONDARY" | "NONE",                         // Сущность является первичной в определении транзакции - счёт, который будет указан в записи транзации
    balance: "WITHDRAWAL" | "ACCRUAL" | "NONE",                         // Действие над сущностью - списания или начисление. Задаёт заполняемое поле (источник или получатель) в записи транзакции
    subtype: "INTERNAL" | "EXTERNAL" | "INCOME" | "EXPENSE" | "NONE",   // Сужение выбора типа сущности
    suspense: "ENABLED" | "DISABLED" | "NONE",                          // Определяет возможность создать (определить) сущность на непосредственно следующих за данным шагом шагах.                                                                      
                                                                        // Нормальной считается последовательность, задаваемая расположением шагов в массиве описания Wizard
    
    ownerid?: number,                                                   //
    ownerdep: "SAME" | "EVERY" | "NONE",                                //
};

// Обработка clientid во frame
// FC State одинаковое для всех компонентов
//
// type ClientMode = "NONE" | "SAME" | "EVERY"
//
// current.origin.clientid = null
// if (balance === "WITHDRAWAL" && (clientmode === "SAME" || clientmode === "EVERY")) {
//    current.origin.clientid = state.clientid
// }
// current.target.clientid = null
// if (balance === "ACCRUAL" && (clientmode === "SAME" || clientmode === "EVERY")) {
//    current.target.clientid = state.clientid
// }
//
// fc({ ...props, props.clientmode, clientid: current.origin.clientid, currency: balance === "WITHDRAWAL"? current.origin.currency: (balance === "ACCRUAL"? current.target.currency: null) })
//
// Обработка валют
// if (exchange !== "NONE") {
//    current.origin.currency = state.origincurrency;
//    current.target.currency = state.targetcurrency;   
// }
// 
// Обработка данных регистрации
//
// if (state.params !== null) {
//    previous.state.suspense = state.params;
// }
//
// Dependencies = [{originindex, targetindex, origin, target, value } ...]  origin: keyof StageState type, target: keyof StageProps type
// if (targetindex === index) {
//    linkedprops = Dependencies.reduce((accumulator, item) => accumulator[target] = statebyidentitybyoriginindex[origin], {})
// }
//       linkedstatebyidentityindex[destination] = statebyindex[source]
//    } 
// }
//    

export type WizardStageIdentity<Q extends WizardStageType, T extends WizardStageProps | Record<string, never>> = `${"TYPE"}:${Q};${"BALANCE"}:${T["balance"]};${"EXCHANGE"}:${T["exchange"]};${"POSITION"}:${T["position"]};${"SUBTYPE"}:${T["subtype"]};${"SUSPENSE"}:${T["suspense"]}`;

// Динамические свойства компнентов, соответсвующих шагам Wizard. Определяются на основе состояния предыдущих шагов Wizard
export type TransactionComponentDynamicProps = {
    amount: number,
    currency: string,
    clientid: number,
    clientid1: number, // remove later
    clientid2: number, // remove later
};

// Описатель динамических свойств компонентов, соответсвующих шагам Wizard

export type TransactionStagePropsClient = {
    clientid: number,
    constraint: "EQUAL" | "NOTEQUAL" | "ANY",
}

export type TransactionStagePropsSum = {
    sumvalue: number,
    sumcurrency: number,
}

export type WizardStateProps = TransactionStagePropsClient | TransactionStagePropsSum;

// Обязательные параметры компонентов, соответсвующих шагам Wizard

// Шаг Wizard
export type WizardStage = {
    identity: string, //WizardStageIdentity<WizardStageType, WizardStageProps>,   // Идентификатор шага. Используется для сохранения/восстановления состояния
    type: WizardStageType,                                              // Тип шага. Используется для идентификации
    props: WizardStageProps | Record<string, never>,                    // Свойства компонента
//    constraints: WizardStageConstraints | [],                           // Ограничения на возвращаемые компонентом значения состояния
    //component: FC<WizardStageProps>,                                    // Собственно компонент
//    charges: WizardStageCharges[] | [],                                 // Стоимость обслуживания при выполнении операций по данной сущности в рамках транзакции
    stepinc: 2 | 3 | null,                                              // Приращение шага Wizard в случае, когда на текущем шаге сущность определена, но при этом неопределённость
                                                                        // допустима - непосредственно следующие шаги (в нормальном порядке) позволяют определить сущность
    marker: string,                                                     // Маркер, отображаемый на диаграмме последовательности шагов Wizard по заполнению параметров транзакции
};

export type WizardResult = {
    account: 
        WizardResultAccountBank
        | WizardResultAccountCash
        | WizardResultAccountPersonal
        | WizardResultAccountExternal
        | WizardResultAccountCoffer
        | WizardResultAccountOverdraft
        | WizardResultAccountLending,
    balance: "WITHDRAWAL" | "ACCRUAL",
    position: "PRIMARY" | "SECONDARY",
    sumvalue: number,
    sumcurrency: string,
}

export type WizardResultAccountBank = {
    type: 'BANKACCOUNT',
    id: number | null,
    params: {
        number: string,
        bik: string,
        organization: { 
            id: number | null,
            params: {
                clientid: number | null,
                name: string,
                ogrn: string,
                inn: string,
                kpp: string,
            }
        }
    }
}
export type WizardResultAccountCash = {}
export type WizardResultAccountPersonal = {}
export type WizardResultAccountExternal = {}
export type WizardResultAccountCoffer = {}
export type WizardResultAccountOverdraft = {}
export type WizardResultAccountLending = {}

export type WizardStateClient = {
    id: number | null,
    params: {
        name: string,
    }
}
