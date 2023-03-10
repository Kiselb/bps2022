import React, { FC, useState, useEffect, useRef } from 'react';

import { Input } from 'antd';

import { isDecimal } from '../../domain/utilities';
import { Settings } from '../../domain/settings/settings';

type Props = {
    value: number,
    minimumFractionDigits: number,
    maximumFractionDigits: number,
    handler: (value: number) => void,
    validator?: (value: number) => boolean,
    marker?: string,
    locked: boolean,
}
type State = {
    focused: boolean,
    text: string,
    locked: boolean,
}

export const Decimal: FC<Props> = ({ value, minimumFractionDigits, maximumFractionDigits, handler, validator, locked, marker }) => {
    const [state, setState] = useState<State>({
        focused: false,
        text: value.toString(10).replace('.', Settings.numbers.decimalSeparator),
        locked,
    });

    const isManual = useRef(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (state.locked) return;

        if (event.target.value.length === 0) {
            setState(state => ({ ...state, text: event.target.value }));
        } else if (isDecimal(event.target.value)) {
            if (validator) {
                if (validator(parseFloat(event.target.value.replace(Settings.numbers.decimalSeparator, '.')))) {
                    setState(state => ({ ...state, text: event.target.value }));
                    isManual.current = true;
                } else {
                    setState(state => ({ ...state}));
                }
            } else {
                setState(state => ({ ...state, text: event.target.value }));
            }
        } else {
            setState(state => ({ ...state}));
        }
    };

    useEffect(() => {
        isManual.current && state.text.length > 0 && handler(parseFloat(state.text.replace(Settings.numbers.decimalSeparator, '.')));
    }, [state]);
    useEffect(() => {
        isManual.current = false;
        setState(state => ({ ...state, text: value.toString(10).replace('.', Settings.numbers.decimalSeparator) }));
    }, [value])
    useEffect(() => {
        setState(state => ({ ...state, locked }));
    }, [locked])

    return (
        <Input
            style={{ width: '20rem', fontSize: "1.5rem", height: "2.75rem", textAlign: "right" }}
            onChange={onChange}
            value={state.focused? state.text: (new Intl.NumberFormat(Settings.locale, { minimumFractionDigits, maximumFractionDigits })).format(parseFloat(state.text.replace(Settings.numbers.decimalSeparator, '.')))}
            onBlur={() => setState(state => ({ ...state, focused: false }))}
            onFocus={() => setState(state => ({ ...state, focused: true }))}
        />
    );
}
