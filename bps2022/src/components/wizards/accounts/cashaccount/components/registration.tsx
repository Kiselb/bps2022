import React, { FC, useState, useEffect } from 'react';

import styles from './registration.module.css';

export type State = {
    accountname: string
};

type Props = {
    onReady: (state: State) => void,
    onDirty: (state: State) => void,
};

const validate = (state: State) => {
    return (
        true
        && state.accountname.length > 7 
    );
};

export const Registration: FC<Props> = ({ onReady, onDirty }) => {
    const [state, setState] = useState<State>({
        accountname: "",
    });

    useEffect(() => {
        validate(state)? onReady({ ...state }): onDirty({ ...state });
    }, [state]);

    return (
        <div>

        </div>
    );
};
