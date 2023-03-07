import React, { FC } from 'react';

import { WizardPagesTypesUnion, isRegularPage } from '../../../../../domain/automaton/automaton';
import { Step } from './components/step';

import styles from './roadmap.module.css'

type Props = {
    current: number,
    wizard: WizardPagesTypesUnion[],
};
export const Roadmap: FC<Props> = ({ current, wizard }) => {
    return (
        <div className={styles.main}>
            {
                wizard.map((page, index) => 
                    <div className={styles.element} key={index}>
                        <Step iscurrent={index === current} ismain={isRegularPage(page)} marker={page.marker}/>
                        {
                            index === wizard.length - 1
                            ? null
                            : <div className={styles.connector}></div>
                        }
                    </div>
                )
            }
        </div>
    );
};
