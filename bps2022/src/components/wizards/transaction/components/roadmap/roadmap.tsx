import React, { FC } from 'react';

import { WizardPagesTypesUnion, isRegularPage } from '../../../../../domain/transactions/automaton';
import { Step } from './components/step';

import styles from './roadmap.module.css'

type Props = {
    currentpage: number,
    wizardpages: WizardPagesTypesUnion[],
};
export const Roadmap: FC<Props> = ({ currentpage, wizardpages }) => {
    return (
        <div className={styles.main}>
            {
                wizardpages.map((page, index) => 
                    <div className={styles.element} key={index}>
                        <Step iscurrent={index === currentpage} ismain={isRegularPage(page)} marker={page.marker}/>
                        {
                            index === wizardpages.length - 1
                            ? null
                            : <div className={styles.connector}></div>
                        }
                    </div>
                )
            }
        </div>
    );
};
