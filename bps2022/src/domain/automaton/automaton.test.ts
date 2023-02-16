import { automaton, WizardPagesTypesUnion } from './automaton';

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
test('Тестирование автомата транзакций: наличие страницы регистрации после страницы с требованием регистрации', () => {
    let result = true;
    for(let i = 0; i < automaton.length; i++) {
        const pages = automaton[i][3];
        if (pages !== null) {
            for(let j = 0; j < pages.length; j++) {
                const page = pages[j];
                const pagenext = pages[j + 1];

                if ("registration" in page) {
                    if (page.registration) {
                        if (!(pagenext && (pagenext.type.slice(0, 3) === 'REG'))) {
                            console.log(`Without registration: ${automaton[i][0]} ${j} ${pagenext.type.slice(0, 3)}`)
                            result = false;
                        }
                    }
                }
            }
        }
    }
    expect(result).toEqual(true);
});
test('Тестирование консистентности Identity шагов wizard (страниц)', () => {
    let result = 0;
    for(let i = 0; i < automaton.length; i++) {
        const pages = automaton[i][3];
        if (pages !== null) {
            for(let j = 0; j < pages.length; j++) {
                const keys = Object.keys(pages[j]).filter(key => key !== "type").filter(key => key !== "identity").filter(key => key !== "marker").filter(key => key !== "fee").filter(key => key !== "charge").sort();
                let identity = "TYPE:" + pages[j].type.toUpperCase();
                for(let k = 0; k < keys.length; k++) {
                    identity += ";" + keys[k].toUpperCase() + ":" + pages[j][keys[k] as keyof WizardPagesTypesUnion].toString().toUpperCase();
                }
                if (pages[j].identity !== identity) {
                    result += 1;
                    console.log(`Transaction: ${automaton[i][0]} Identity: ${identity}`);
                }
            }
        }
    }
    expect(result).toEqual(0);
});
test('Тестирование уникальности Identity в рамках одной транзакции', () => {
    let result = true;
    for(let i = 0; i < automaton.length; i++) {
        const pages = automaton[i][3];
        if (pages !== null) {
            for(let j = 0; j < pages.length; j++) {
                if (pages.filter(item => item.identity === pages[j].identity).length > 1) {
                    console.log(`Transaction: ${automaton[i][0]}`);
                    result = false;
                }
            }
        }
    }
    expect(result).toEqual(true);
});

export {};
