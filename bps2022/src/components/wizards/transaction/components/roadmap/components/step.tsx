import React, { FC } from 'react';

import styles from './step.module.css';

type Props = {
    ismain: boolean,
    iscurrent: boolean,
    marker: string,
};
export const Step: FC<Props> = ({ ismain, iscurrent, marker}: Props) => {
    return (
        <div className={[styles["base"], iscurrent? styles["current"]: (ismain? styles["main"]: "")].join(" ")}>
            {marker}
        </div>
    );
};
