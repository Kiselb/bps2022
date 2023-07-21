import React, { FC, useState, useEffect } from 'react';

import { WizardControlProps, WizardContextProps, AccountOwner, } from '../../../../../domain/transactions/types';

import styles from './registration.module.css';

export type Props = Record<string, unknown>;

export type State = {
    type: "REGCASHACOUNT",
    accountname: string,
};

const validate = (state: State) => {
    return (
        true
        && state.accountname.length > 7 
    );
};

export const Registration: FC<Props & WizardControlProps & WizardContextProps> = ({ onReady, onDirty }: (Props & WizardControlProps & WizardContextProps)) => {
    const [state, setState] = useState<State>({
        type: "REGCASHACOUNT",
        accountname: "",
    });

    useEffect(() => {
        validate(state)? onReady({ ...state }, false): onDirty({ ...state });
    }, [state]);

    return (
        <div>

        </div>
    );
};
