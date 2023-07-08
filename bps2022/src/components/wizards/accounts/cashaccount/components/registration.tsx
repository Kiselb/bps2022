import React, { FC, useState, useEffect } from 'react';

import { WizardCommonProps, WizardStateProps, AccountOwner, } from '../../../../../domain/transactions/types';

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

export const Registration: FC<Props & WizardCommonProps & WizardStateProps> = ({ onReady, onDirty }: (Props & WizardCommonProps & WizardStateProps)) => {
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
