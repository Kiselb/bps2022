export function isNumeric(value: string) {
    return !isNaN(+value) && !isNaN(parseFloat(value));
}

export function isDecimal(value: string) {
    return (/[+-]?([0-9]*[.])?[0-9]+/.test(value) && !isNaN(+value));
}

export function isINN(value: string) {
    return (/^\d{10}$/.test(value) || /^\d{12}$/.test(value));
}

export function isKPP(value: string) {
    return (/^\d{9}$/.test(value));
}

export function isOGRN(value: string) {
    return (/^\d{13}$/.test(value) || /^\d{15}$/.test(value));
}

export function isBankPrimaryAccount(value: string) {
    return (/^\d{20}$/.test(value));
}

export function validateBankPrimaryAccount(value: string, bik: string) {

    // http://www.kholenkov.ru/data-validation/rs/
    // https://github.com/Kholenkov/js-data-validation/blob/master/data-validation.js

    if (!isBankPrimaryAccount(value)) return false;
    if (!isBIK(bik)) return false;

    const magicdigits: bigint[] = [
        BigInt(7), BigInt(1), BigInt(3), BigInt(7), BigInt(1), BigInt(3), BigInt(7), BigInt(1), BigInt(3), BigInt(7),
        BigInt(1), BigInt(3), BigInt(7), BigInt(1), BigInt(3), BigInt(7), BigInt(1), BigInt(3), BigInt(7), BigInt(1),
        BigInt(3), BigInt(7), BigInt(1)
    ];
    const surrogate = bik.slice(-3) + value;
    
    let checkvalue = BigInt(0);

    for(let i = 0; i < magicdigits.length; i++) {
        const digit = magicdigits[i];
        checkvalue = checkvalue + digit * BigInt(parseInt(surrogate[i], 10));
    }

    return (checkvalue % BigInt(10) === BigInt(0));
}

export function isBankSecondaryAccount(value: string) {
    return (value.match(/^\d{20}$/));
}

export function isBIK(value: string) {
    return (value.match(/^\d{9}$/));
}
