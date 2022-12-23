import React, { FC, useState } from 'react';

import styles from './selector.module.css';

export type Props = {
    onOrigin: (origin: string) => any,
    onTarget: (target: string) => any,
}
export const Selector: FC<Props> = ({ onOrigin, onTarget }: Props) => {
    const [selector, setSelector] = useState({ origin: "", target: ""});

    const onOriginBAN = () => { setSelector({ ...selector, origin: "BAN"}); onOrigin("BAN"); };
    const onOriginBAY = () => { setSelector({ ...selector, origin: "BAY"}); onOrigin("BAY"); };
    const onOriginCAA = () => { setSelector({ ...selector, origin: "CAA"}); onOrigin("CAA"); };
    const onOriginPEA = () => { setSelector({ ...selector, origin: "PEA"}); onOrigin("PEA"); };
    const onOriginXPA = () => { setSelector({ ...selector, origin: "XPA"}); onOrigin("XPA"); };

    const onTargetBAN = () => { setSelector({ ...selector, target: "BAN"}); onTarget("BAN"); };
    const onTargetBAY = () => { setSelector({ ...selector, target: "BAY"}); onTarget("BAY"); };
    const onTargetCAA = () => { setSelector({ ...selector, target: "CAA"}); onTarget("CAA"); };
    const onTargetPEA = () => { setSelector({ ...selector, target: "PEA"}); onTarget("PEA"); };
    const onTargetXPA = () => { setSelector({ ...selector, target: "XPA"}); onTarget("XPA"); };

    return (
        <div className={styles.page}>
            <div className={styles["origin-bank-account-external"]}>
                <div className={[styles["marker"], selector.origin === "BAN"? styles["marker-active"]: ""].join(' ')} onClick={onOriginBAN}>РС Вн</div>
                <div className={styles["label"]}>Расчётный счёт внешний</div>
            </div>
            <div className={styles["origin-bank-account-internal"]}>
                <div className={[styles["marker"], selector.origin === "BAY"? styles["marker-active"]: ""].join(' ')} onClick={onOriginBAY}>РС</div>
                <div className={styles["label"]}>Расчётный счёт организации</div>
            </div>
            <div className={styles["origin-cash-account"]}>
                <div className={[styles["marker"], selector.origin === "CAA"? styles["marker-active"]: ""].join(' ')} onClick={onOriginCAA}>КС</div>
                <div className={styles["label"]}>Кассовый счёт</div>
            </div>
            <div className={styles["origin-personal-account"]}>
                <div className={[styles["marker"], selector.origin === "PEA"? styles["marker-active"]: ""].join(' ')} onClick={onOriginPEA}>ЛС</div>
                <div className={styles["label"]}>Лицевой счёт</div>
            </div>
            <div className={styles["origin-external-account"]}>
                <div className={[styles["marker"], selector.origin === "XPA"? styles["marker-active"]: ""].join(' ')} onClick={onOriginXPA}>ВС</div>
                <div className={styles["label"]}>Внешний счёт</div>
            </div>

            <div className={styles["target-bank-account-external"]}>
                <div className={[styles["marker"], selector.target === "BAN"? styles["marker-active"]: ""].join(' ')} onClick={onTargetBAN}>РС Вн</div>
                <div className={styles["label"]}>Расчётный счёт внешний</div>
            </div>
            <div className={styles["target-bank-account-internal"]}>
                <div className={[styles["marker"], selector.target === "BAY"? styles["marker-active"]: ""].join(' ')} onClick={onTargetBAY}>РС</div>
                <div className={styles["label"]}>Расчётный счёт организации</div>
            </div>
            <div className={styles["target-cash-account"]}>
                <div className={[styles["marker"], selector.target === "CAA"? styles["marker-active"]: ""].join(' ')} onClick={onTargetCAA}>КС</div>
                <div className={styles["label"]}>Кассовый счёт</div>
            </div>
            <div className={styles["target-personal-account"]}>
                <div className={[styles["marker"], selector.target === "PEA"? styles["marker-active"]: ""].join(' ')} onClick={onTargetPEA}>ЛС</div>
                <div className={styles["label"]}>Лицевой счёт</div>
            </div>
            <div className={styles["target-external-account"]}>
                <div className={[styles["marker"], selector.target === "XPA"? styles["marker-active"]: ""].join(' ')} onClick={onTargetXPA}>ВС</div>
                <div className={styles["label"]}>Внешний счёт</div>
            </div>
        </div>
    );
};
