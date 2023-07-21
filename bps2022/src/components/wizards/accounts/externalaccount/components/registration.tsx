import React, { FC, useState, useEffect, CSSProperties } from 'react';

import { WizardControlProps, WizardContextProps, AccountOwner, } from '../../../../../domain/transactions/types';

export type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    balance: "WITHDRAWAL" | "ACCRUAL",
};

export type State = {
    type: "REGEXTERNALACCOUNT",
    accountname: string,
};

export const Registration: FC<Props & WizardControlProps & WizardContextProps> = ({ subtype, balance, savedstate, onReady, onDirty }: (Props & WizardControlProps & WizardContextProps)) => {
    return (
        <div></div>
    );
}
