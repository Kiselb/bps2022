import React, { FC } from 'react';

import styles from './error.module.css';

export const Error: FC = () => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                Ошибка регистрации новой транзакции
            </div>

        </div>
    );

};
