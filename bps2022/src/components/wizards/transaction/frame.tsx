import React, { FC } from "react";
import { QuestionOutlined, LeftOutlined, RightOutlined, CheckOutlined, UndoOutlined } from '@ant-design/icons';

import { Selector } from './components/selector/selector';
import styles from './frame.module.css';

export type Props = any;

export const Frame: FC<any> = () => {
    const onOrigin = (origin: string) => { alert(origin); };
    const onTarget = (target: string) => { alert(target); };
    return (
        <div className={styles.frame}>
            <div className={styles.header}>
                Создание транзакции
            </div>
            <div className={styles.pages}>
                <Selector onOrigin={onOrigin} onTarget={onTarget}/>
            </div>
            <div className={styles.navigation}>
                <div className={styles["navigation-left"]}>
                    <div className={styles["navigation-button"]}><div><QuestionOutlined/></div></div>
                </div>
                <div className={styles["navigation-right"]}>
                    <div className={styles["navigation-button"]}><div><LeftOutlined/></div></div>
                    <div className={styles["navigation-button"]}><div><RightOutlined/></div></div>
                    <div className={styles["navigation-button"]}><div><CheckOutlined/></div></div>
                    <div className={styles["navigation-button"]}><div><UndoOutlined/></div></div>
                </div>
            </div>
        </div>
    );
};
