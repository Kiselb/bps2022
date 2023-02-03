import React, { FC, useState } from 'react';

import { TransactionGroupSelector } from '../../../../../domain/automaton/automaton';
import styles from './selector.module.css';

export type Props = {
    origin: TransactionGroupSelector | null,
    target: TransactionGroupSelector | null,
    onOrigin: (origin: TransactionGroupSelector) => void,
    onTarget: (target: TransactionGroupSelector) => void,
}
export const Selector: FC<Props> = ({ origin, target, onOrigin, onTarget }: Props) => {
    const [selector, setSelector] = useState({ origin: origin, target: target});

    const onOriginBAE = () => { setSelector(selector => ({ ...selector, origin: "BAE"})); onOrigin("BAE"); };
    const onOriginBAI = () => { setSelector(selector => ({ ...selector, origin: "BAI"})); onOrigin("BAI"); };
    const onOriginCAA = () => { setSelector(selector => ({ ...selector, origin: "CAA"})); onOrigin("CAA"); };
    const onOriginPAC = () => { setSelector(selector => ({ ...selector, origin: "PAC"})); onOrigin("PAC"); };
    const onOriginXAC = () => { setSelector(selector => ({ ...selector, origin: "XAC"})); onOrigin("XAC"); };
    const onOriginCOA = () => { setSelector(selector => ({ ...selector, origin: "COA"})); onOrigin("COA"); };

    const onTargetBAE = () => { setSelector(selector => ({ ...selector, target: "BAE"})); onTarget("BAE"); };
    const onTargetBAI = () => { setSelector(selector => ({ ...selector, target: "BAI"})); onTarget("BAI"); };
    const onTargetCAA = () => { setSelector(selector => ({ ...selector, target: "CAA"})); onTarget("CAA"); };
    const onTargetPAC = () => { setSelector(selector => ({ ...selector, target: "PAC"})); onTarget("PAC"); };
    const onTargetXAC = () => { setSelector(selector => ({ ...selector, target: "XAC"})); onTarget("XAC"); };
    const onTargetCOA = () => { setSelector(selector => ({ ...selector, target: "COA"})); onTarget("COA"); };

    return (
        <div className={styles.page}>
            <div className={styles["origin-bank-account-external"]}>
                <div className={[styles["marker"], selector.origin === "BAE"? styles["marker-active"]: ""].join(' ')} onClick={onOriginBAE}>РС Вн</div>
                <div className={styles["label"]}>Отправить с расчётного счёта внешнего</div>
            </div>
            <div className={styles["origin-bank-account-internal"]}>
                <div className={[styles["marker"], selector.origin === "BAI"? styles["marker-active"]: ""].join(' ')} onClick={onOriginBAI}>РС</div>
                <div className={styles["label"]}>Отправить с расчётного счёта организации</div>
            </div>
            <div className={styles["origin-cash-account"]}>
                <div className={[styles["marker"], selector.origin === "CAA"? styles["marker-active"]: ""].join(' ')} onClick={onOriginCAA}>КС</div>
                <div className={styles["label"]}>Выдать из кассы</div>
            </div>
            <div className={styles["origin-personal-account"]}>
                <div className={[styles["marker"], selector.origin === "PAC"? styles["marker-active"]: ""].join(' ')} onClick={onOriginPAC}>ЛС</div>
                <div className={styles["label"]}>Списать с лицевого счёта (Клиента)</div>
            </div>
            <div className={styles["origin-external-account"]}>
                <div className={[styles["marker"], selector.origin === "XAC"? styles["marker-active"]: ""].join(' ')} onClick={onOriginXAC}>ВС</div>
                <div className={styles["label"]}>Отправить с внешнего счёта</div>
            </div>
            <div className={styles["origin-coffer-account"]}>
                <div className={[styles["marker"], selector.origin === "COA"? styles["marker-active"]: ""].join(' ')} onClick={onOriginCOA}>ЯЧ</div>
                <div className={styles["label"]}>Выдать из ячейки</div>
            </div>

            <div className={styles["target-bank-account-external"]}>
                <div className={[styles["marker"], selector.target === "BAE"? styles["marker-active"]: ""].join(' ')} onClick={onTargetBAE}>РС Вн</div>
                <div className={styles["label"]}>Принять на расчётный счёт внешний</div>
            </div>
            <div className={styles["target-bank-account-internal"]}>
                <div className={[styles["marker"], selector.target === "BAI"? styles["marker-active"]: ""].join(' ')} onClick={onTargetBAI}>РС</div>
                <div className={styles["label"]}>Принять на расчётный счёт организации</div>
            </div>
            <div className={styles["target-cash-account"]}>
                <div className={[styles["marker"], selector.target === "CAA"? styles["marker-active"]: ""].join(' ')} onClick={onTargetCAA}>КС</div>
                <div className={styles["label"]}>Внести в кассу</div>
            </div>
            <div className={styles["target-personal-account"]}>
                <div className={[styles["marker"], selector.target === "PAC"? styles["marker-active"]: ""].join(' ')} onClick={onTargetPAC}>ЛС</div>
                <div className={styles["label"]}>Начислить на лицевой счёт (Клиенту)</div>
            </div>
            <div className={styles["target-external-account"]}>
                <div className={[styles["marker"], selector.target === "XAC"? styles["marker-active"]: ""].join(' ')} onClick={onTargetXAC}>ВС</div>
                <div className={styles["label"]}>Принять на внешний счёт</div>
            </div>
            <div className={styles["target-coffer-account"]}>
                <div className={[styles["marker"], selector.target === "COA"? styles["marker-active"]: ""].join(' ')} onClick={onTargetCOA}>ВС</div>
                <div className={styles["label"]}>Принять в ячейку</div>
            </div>
        </div>
    );
};
