import React, { FC } from 'react';

import { WizardPagesTypesUnion, } from '../../../../../domain/transactions/types';
import { Step } from './components/step';

import styles from './roadmap.module.css'

type Props = {
    currentpage: number,
    wizardpages: WizardPagesTypesUnion[],
};
// Требуется рефакторинг - определение главной страницы: ismain={?}
export const Roadmap: FC<Props> = ({ currentpage, wizardpages }) => {
    return (
        <div className={styles.main}>
            {
                wizardpages.map((page, index) => 
                    <div className={styles.element} key={index}>
                        <Step iscurrent={index === currentpage} ismain={true} marker={page.marker}/>
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
