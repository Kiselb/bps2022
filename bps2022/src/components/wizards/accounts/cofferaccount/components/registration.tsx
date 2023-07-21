import React, { FC } from 'react';

import { WizardControlProps, WizardContextProps, AccountOwner, } from '../../../../../domain/transactions/types';

export type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    balance: "WITHDRAWAL" | "ACCRUAL" | "NONE",
};

export type State = {
    type: "REGCOFFERACCOUNT",
    accountname: string,
};

export const Registration: FC<Props & WizardControlProps & WizardContextProps> = ({ subtype, balance, savedstate, onReady, onDirty }: (Props & WizardControlProps & WizardContextProps)) => {
    return (
        <div></div>
    );
}
