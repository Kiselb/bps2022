import React, { FC, useState, useEffect } from 'react';

import styles from './servicecharge.module.css';

type Props = {
    onReady: (state: State, registration: boolean) => void,
};
export type State = {
    type: "SERVICECHARGE",
};
const validate = (state: State): boolean => {
    return true;
};

export const ServiceCharge: FC<Props> = ({ onReady }) => {
    const [state, setState] = useState<State>({
        type: "SERVICECHARGE",
    });

    useEffect(() => {
        validate(state) && onReady(state, false);
    }, [state]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                Определение стоимости обслуживания
            </div>
        </div>
    );
};
