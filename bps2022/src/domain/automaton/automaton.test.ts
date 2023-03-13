import { automaton, WizardPagesTypesUnion, TransactionCharges } from './automaton';

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
                const keys: string[] = [];
                ("direction" in pages[j]) && keys.push("direction");
                ("exchange" in pages[j]) && keys.push("exchange");
                ("primary" in pages[j]) && keys.push("primary");
                ("registration" in pages[j]) && keys.push("registration");
                ("subtype" in pages[j]) && keys.push("subtype");

                let identity = "TYPE:" + pages[j].type.toUpperCase();
                for(let k = 0; k < keys.length; k++) {
                    identity += ";" + keys[k].toUpperCase() + ":" + pages[j][keys[k] as keyof WizardPagesTypesUnion].toString().toUpperCase();
                }
                if (pages[j].identity !== identity) {
                    result += 1;
                    console.log(`Transaction: ${automaton[i][0]} Identity: ${pages[j].identity} Test Identity: ${identity}`);
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
test('Тестирования списка стоимости обслуживания транзакции', () => {
    let result = true;
    for(let i = 0; i < automaton.length; i++) {
        const pages = automaton[i][3];
        if (pages !== null) {
            let charges: TransactionCharges[] = [];
            let chargescheck = [];
            for(let j = 0; j < pages.length; j++) {
                const page = pages[j];
                if (page.type === "SERVICECHARGE") {
                    charges = [...page.charges]
                } else {
                    if ("charge" in page) {
                        if (page.charge !== null) {
                            chargescheck.push(page.charge);
                        }
                    }
                }
            }
            charges = charges.sort();
            chargescheck = chargescheck.sort();
            result = result && JSON.stringify(charges) === JSON.stringify(chargescheck);
            if (!result) console.log(automaton[i][0]);
        }
    }
    expect(result).toEqual(true);
});
