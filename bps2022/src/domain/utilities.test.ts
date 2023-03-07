import { isNumeric, isDecimal, isINN, isKPP, isOGRN, isBankPrimaryAccount, validateBankPrimaryAccount, isBankSecondaryAccount, isBIK } from "./utilities";

describe('Тестирование isNumeric', () => {
    test('Проверка "0"', () => {
        const test = "0"
        expect(isNumeric(test)).toEqual(true);
    });
    test('Проверка "a" - не цифры', () => {
        const test = "a"
        expect(isNumeric(test)).toEqual(false);
    });
    test('Проверка "a1234" - не только цифры', () => {
        const test = "a1234"
        expect(isNumeric(test)).toEqual(false);
    });
    test('Проверка пустой строки', () => {
        const test = ""
        expect(isNumeric(test)).toEqual(false);
    });
});
describe('Тестирование isDecimal', () => {
    test('Проверка "0.001"', () => {
        const test = "0.001"
        expect(isDecimal(test)).toEqual(true);
    });
    test('Проверка "-0.001"', () => {
        const test = "-0.001"
        expect(isDecimal(test)).toEqual(true);
    });
    test('Проверка "a0.001" - не только цифры', () => {
        const test = "a0.001"
        expect(isDecimal(test)).toEqual(false);
    });
    test('Проверка пустой строки', () => {
        const test = ""
        expect(isDecimal(test)).toEqual(false);
    });
});

describe('Тестирование валидатора ИНН - isINN', () => {
    test('Проверка "012345678901" - 10 цифр', () => {
        const test = "0123456789"
        expect(isINN(test)).toEqual(true);
    });
    test('Проверка "0123456789012" - 11 цифр', () => {
        const test = "01234567890"
        expect(isINN(test)).toEqual(false);
    });
    test('Проверка "01234567890123" - 12 цифр', () => {
        const test = "012345678901"
        expect(isINN(test)).toEqual(true);
    });
    test('Проверка "0123456789012a" - не только цифры', () => {
        const test = "0123456789012a"
        expect(isINN(test)).toEqual(false);
    });
    test('Проверка пустой строки', () => {
        const test = ""
        expect(isINN(test)).toEqual(false);
    });
});

describe('Тестирование валидатора КПП - isKPP', () => {
    test('Проверка "012345678" - 9 цифр', () => {
        const test = "012345678"
        expect(isKPP(test)).toEqual(true);
    });
    test('Проверка "0123456789" - 10 цифр', () => {
        const test = "0123456789"
        expect(isKPP(test)).toEqual(false);
    });
    test('Проверка "01234567a" - не только цифры', () => {
        const test = "01234567a"
        expect(isKPP(test)).toEqual(false);
    });
    test('Проверка пустой строки', () => {
        const test = ""
        expect(isKPP(test)).toEqual(false);
    });
});

describe('Тестирование валидатора ОГРН - isOGRN', () => {
    test('Проверка "0123456789012" - 13 цифр', () => {
        const test = "0123456789012"
        expect(isOGRN(test)).toEqual(true);
    });
    test('Проверка "0123456789" - 10 цифр', () => {
        const test = "0123456789"
        expect(isOGRN(test)).toEqual(false);
    });
    test('Проверка "01234567a" - не только цифры', () => {
        const test = "01234567a"
        expect(isOGRN(test)).toEqual(false);
    });
    test('Проверка пустой строки', () => {
        const test = ""
        expect(isOGRN(test)).toEqual(false);
    });
});

describe('Тестирование валидатора номера расчётного счёта - validateBankPrimaryAccount', () => {
    test('Проверка заведомого корректного номера', () => {
        const accountno = "40702810202560000990";
        const bik = "044525593";
        expect(validateBankPrimaryAccount(accountno, bik)).toEqual(true);
    });
    test('Проверка заведомого некорректного номера', () => {
        const accountno = "90702810202560000990";
        const bik = "044525593";
        expect(validateBankPrimaryAccount(accountno, bik)).toEqual(false);
    });
    test('Проверка заведомого некорректного номера', () => {
        const accountno = "810202560000990";
        const bik = "044525593";
        expect(validateBankPrimaryAccount(accountno, bik)).toEqual(false);
    });
    test('Проверка заведомого некорректного БИК', () => {
        const accountno = "40702810202560000990";
        const bik = "44525593";
        expect(validateBankPrimaryAccount(accountno, bik)).toEqual(false);
    });
    test('Проверка пустого номера', () => {
        const accountno = "";
        const bik = "044525593";
        expect(validateBankPrimaryAccount(accountno, bik)).toEqual(false);
    });
    test('Проверка пустого БИК', () => {
        const accountno = "40702810202560000990";
        const bik = "";
        expect(validateBankPrimaryAccount(accountno, bik)).toEqual(false);
    });
});
