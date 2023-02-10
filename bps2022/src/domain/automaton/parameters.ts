export {};

type RegBankAccount = {
    type: string,
    primaryno: string,
    secondaryno: string,
    currency: string,
    bankname: string,
    bik: string,
    city: string,
    organization: {
        id: number,
        params: {
            name: string,
            inn: string,
            kpp: string,
            clientid: number | null,
        }
    }
}
type RegCashAccount = {
    type: string,
    name: string,
    currency: string,
    clientid: number,
}
type RegExternalAccount = {
    type: string,
    name: string,
    currency: string,
    clientid: number,
}
type TransactionParameters = {
    origin: {
        main: {
            type: string,
            id: number,
            params: RegBankAccount | RegCashAccount | RegExternalAccount,
        },
        personal: {
            id: number,
        },
        external: {
            id: number,
        },
        article: {
            id: number,
        }
    },
    target: {
        main: {
            id: number,
        },
        personal: {

        },
        external: {

        },
        article: {
            
        }
    },
}