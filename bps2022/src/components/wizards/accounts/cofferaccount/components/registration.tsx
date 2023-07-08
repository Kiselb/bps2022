import React, { FC } from 'react';

import { WizardCommonProps, WizardStateProps, AccountOwner, } from '../../../../../domain/transactions/types';

export type Props = {
    subtype: "INTERNAL" | "EXTERNAL",
    balance: "WITHDRAWAL" | "ACCRUAL" | "NONE",
};

export type State = {
    type: "REGCOFFERACCOUNT",
    accountname: string,
};

export const Registration: FC<Props & WizardCommonProps & WizardStateProps> = ({ subtype, balance, savedstate, onReady, onDirty }: (Props & WizardCommonProps & WizardStateProps)) => {
    return (
        <div></div>
    );
}
