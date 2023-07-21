import React, { FC } from 'react';

import { WizardControlProps, WizardContextProps, AccountOwner, } from '../../../../../domain/transactions/types';

export type Props = Record<string, unknown>;

export type State = {
    type: "REGLENDINGACCOUNT",
    accountname: string,
};

export const Registration: FC<Props & WizardControlProps & WizardContextProps> = ({ savedstate, onReady, onDirty }: (Props & WizardControlProps & WizardContextProps)) => {
    return (
        <div></div>
    );
}
