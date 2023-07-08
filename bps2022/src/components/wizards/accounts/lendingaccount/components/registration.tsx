import React, { FC } from 'react';

import { WizardCommonProps, WizardStateProps, AccountOwner, } from '../../../../../domain/transactions/types';

export type Props = Record<string, unknown>;

export type State = {
    type: "REGLENDINGACCOUNT",
    accountname: string,
};

export const Registration: FC<Props & WizardCommonProps & WizardStateProps> = ({ savedstate, onReady, onDirty }: (Props & WizardCommonProps & WizardStateProps)) => {
    return (
        <div></div>
    );
}
