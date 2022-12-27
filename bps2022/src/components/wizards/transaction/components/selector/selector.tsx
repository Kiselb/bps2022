import React, { FC, useState } from 'react';

import { TransactionGroupSelector } from '../../../../../domain/automaton/automaton';
import styles from './selector.module.css';

export type Props = {
    onOrigin: (origin: TransactionGroupSelector) => void,
    onTarget: (target: TransactionGroupSelector) => void,
}
export const Selector: FC<Props> = ({ onOrigin, onTarget }: Props) => {
    const [selector, setSelector] = useState({ origin: "", target: ""});

    const onOriginBAN = () => { setSelector(selector => ({ ...selector, origin: "BAN"})); onOrigin("BAN"); };
    const onOriginBAY = () => { setSelector(selector => ({ ...selector, origin: "BAY"})); onOrigin("BAY"); };
    const onOriginCAA = () => { setSelector(selector => ({ ...selector, origin: "CAA"})); onOrigin("CAA"); };
    const onOriginPEA = () => { setSelector(selector => ({ ...selector, origin: "PEA"})); onOrigin("PEA"); };
    const onOriginXPA = () => { setSelector(selector => ({ ...selector, origin: "XPA"})); onOrigin("XPA"); };

    const onTargetBAN = () => { setSelector(selector => ({ ...selector, target: "BAN"})); onTarget("BAN"); };
    const onTargetBAY = () => { setSelector(selector => ({ ...selector, target: "BAY"})); onTarget("BAY"); };
    const onTargetCAA = () => { setSelector(selector => ({ ...selector, target: "CAA"})); onTarget("CAA"); };
    const onTargetPEA = () => { setSelector(selector => ({ ...selector, target: "PEA"})); onTarget("PEA"); };
    const onTargetXPA = () => { setSelector(selector => ({ ...selector, target: "XPA"})); onTarget("XPA"); };

    return (
        <div className={styles.page}>
            <div className={styles["origin-bank-account-external"]}>
                <div className={[styles["marker"], selector.origin === "BAN"? styles["marker-active"]: ""].join(' ')} onClick={onOriginBAN}>РС Вн</div>
                <div className={styles["label"]}>Отправить с расчётного счёта внешнего</div>
            </div>
            <div className={styles["origin-bank-account-internal"]}>
                <div className={[styles["marker"], selector.origin === "BAY"? styles["marker-active"]: ""].join(' ')} onClick={onOriginBAY}>РС</div>
                <div className={styles["label"]}>Отправить с расчётного счёта организации</div>
            </div>
            <div className={styles["origin-cash-account"]}>
                <div className={[styles["marker"], selector.origin === "CAA"? styles["marker-active"]: ""].join(' ')} onClick={onOriginCAA}>КС</div>
                <div className={styles["label"]}>Выдать из кассы</div>
            </div>
            <div className={styles["origin-personal-account"]}>
                <div className={[styles["marker"], selector.origin === "PEA"? styles["marker-active"]: ""].join(' ')} onClick={onOriginPEA}>ЛС</div>
                <div className={styles["label"]}>Списать с лицевого счёта (Клиента)</div>
            </div>
            <div className={styles["origin-external-account"]}>
                <div className={[styles["marker"], selector.origin === "XPA"? styles["marker-active"]: ""].join(' ')} onClick={onOriginXPA}>ВС</div>
                <div className={styles["label"]}>Отправить с внешнего счёта</div>
            </div>

            <div className={styles["target-bank-account-external"]}>
                <div className={[styles["marker"], selector.target === "BAN"? styles["marker-active"]: ""].join(' ')} onClick={onTargetBAN}>РС Вн</div>
                <div className={styles["label"]}>Принять на расчётный счёт внешний</div>
            </div>
            <div className={styles["target-bank-account-internal"]}>
                <div className={[styles["marker"], selector.target === "BAY"? styles["marker-active"]: ""].join(' ')} onClick={onTargetBAY}>РС</div>
                <div className={styles["label"]}>Принять на расчётный счёт организации</div>
            </div>
            <div className={styles["target-cash-account"]}>
                <div className={[styles["marker"], selector.target === "CAA"? styles["marker-active"]: ""].join(' ')} onClick={onTargetCAA}>КС</div>
                <div className={styles["label"]}>Внести в кассу</div>
            </div>
            <div className={styles["target-personal-account"]}>
                <div className={[styles["marker"], selector.target === "PEA"? styles["marker-active"]: ""].join(' ')} onClick={onTargetPEA}>ЛС</div>
                <div className={styles["label"]}>Начислить на лицевой счёт (Клиенту)</div>
            </div>
            <div className={styles["target-external-account"]}>
                <div className={[styles["marker"], selector.target === "XPA"? styles["marker-active"]: ""].join(' ')} onClick={onTargetXPA}>ВС</div>
                <div className={styles["label"]}>Принять на внешний счёт</div>
            </div>
        </div>
    );
};
