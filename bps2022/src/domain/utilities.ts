export const isNumeric = (value: string): boolean => {
    return !isNaN(+value) && !isNaN(parseFloat(value));
}

export const isDecimal = (value: string): boolean => {
    //https://stackoverflow.com/questions/2811031/decimal-or-numeric-values-in-regular-expression-validation
    //return (/^-?(0|[1-9]\d*)((\.\d+)|(\.))?$/.test(value) && !isNaN(parseFloat(value)));
    return (/^-?(0|[1-9]\d*)((,\d+)|(,))?$/.test(value) && !isNaN(parseFloat(value)));
}

export const round = (value: number, decimalPlaces: number): number => {
    //https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8
    return (Math.sign(value) * Number(Math.round(parseFloat((Math.sign(value) * value).toString() + "e" + decimalPlaces.toString())).toString() + "e-" + decimalPlaces));
}

export const isINN = (value: string): boolean => {
    return (/^\d{10}$/.test(value) || /^\d{12}$/.test(value));
}

export const isKPP = (value: string): boolean => {
    return (/^\d{9}$/.test(value));
}

export const isOGRN = (value: string): boolean => {
    return (/^\d{13}$/.test(value) || /^\d{15}$/.test(value));
}

export const isBankPrimaryAccount = (value: string): boolean => {
    return (/^\d{20}$/.test(value));
}

export const validateBankPrimaryAccount = (value: string, bik: string): boolean => {

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
    const checkvalue = magicdigits.reduce((accumulator, digit, index) => accumulator + digit * BigInt(parseInt(surrogate[index], 10)), BigInt(0))

    return (checkvalue % BigInt(10) === BigInt(0));
}

export const isBankSecondaryAccount = (value: string): boolean => {
    return (/^\d{20}$/.test(value));
}

export const isBIK = (value: string): boolean => {
    return (/^\d{9}$/.test(value));
}

export const isPalindrome = (s: string, i: number): boolean => {
    return (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i);
}
