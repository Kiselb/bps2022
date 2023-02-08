import { automaton } from './automaton';

test('Тестирование автомата транзакций: основных счётов не более двух', () => {
    expect(automaton
        .filter(item => item[3] !== null)
        .map(item => item[3]!.reduce((accumulator, value) => ("primary" in value)? (value.primary? accumulator + 1: accumulator): accumulator, 0))
        .filter(item => item > 2)
        .length).toEqual(0);
});

test('Тестирование автомата транзакций: основных счётов не менее одного', () => {
    expect(automaton
        .filter(item => item[3] !== null)
        .map(item => item[3]!.reduce((accumulator, value) => ("primary" in value)? (value.primary? accumulator + 1: accumulator): accumulator, 0))
        .filter(item => item < 1)
        .length).toEqual(0);
});

export {};
