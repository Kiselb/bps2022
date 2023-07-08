import React, { FC, useState, useEffect, CSSProperties } from 'react';

import { WizardCommonProps, WizardStateProps, AccountOwner, } from '../../../../../domain/transactions/types';

export type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    balance: "WITHDRAWAL" | "ACCRUAL",
};

export type State = {
    type: "REGEXTERNALACCOUNT",
    accountname: string,
};

export const Registration: FC<Props & WizardCommonProps & WizardStateProps> = ({ subtype, balance, savedstate, onReady, onDirty }: (Props & WizardCommonProps & WizardStateProps)) => {
    return (
        <div></div>
    );
}
