import React, { FC, useState } from 'react';

import { TransactionGroupSelector } from '../../../../../domain/transactions/automaton';
import styles from './selector.module.css';

export type Props = {
    origin: TransactionGroupSelector | null,
    target: TransactionGroupSelector | null,
    onOrigin: (origin: TransactionGroupSelector) => void,
    onTarget: (target: TransactionGroupSelector) => void,
}
export const Selector: FC<Props> = ({ origin, target, onOrigin, onTarget }: Props) => {
    const [selector, setSelector] = useState({ origin: origin, target: target});

    const onOriginBANKACCOUNTEXTERNAL = () => { setSelector(selector => ({ ...selector, origin: "BANKACCOUNTEXTERNAL"})); onOrigin("BANKACCOUNTEXTERNAL"); };
    const onOriginBANKACCOUNTINTERNAL = () => { setSelector(selector => ({ ...selector, origin: "BANKACCOUNTINTERNAL"})); onOrigin("BANKACCOUNTINTERNAL"); };
    const onOriginCASHACCOUNT = () => { setSelector(selector => ({ ...selector, origin: "CASHACCOUNT"})); onOrigin("CASHACCOUNT"); };
    const onOriginPERSONALACCOUNT = () => { setSelector(selector => ({ ...selector, origin: "PERSONALACCOUNT"})); onOrigin("PERSONALACCOUNT"); };
    const onOriginEXTERNALACCOUNT = () => { setSelector(selector => ({ ...selector, origin: "EXTERNALACCOUNT"})); onOrigin("EXTERNALACCOUNT"); };
    const onOriginCOFFERACCOUNT = () => { setSelector(selector => ({ ...selector, origin: "COFFERACCOUNT"})); onOrigin("COFFERACCOUNT"); };
    const onOriginEXPENSE = () => { setSelector(selector => ({ ...selector, origin: "EXPENSE", target: "EXPENSE"})); onOrigin("EXPENSE"); onTarget("EXPENSE")};

    const onTargetBANKACCOUNTEXTERNAL = () => { setSelector(selector => ({ ...selector, target: "BANKACCOUNTEXTERNAL"})); onTarget("BANKACCOUNTEXTERNAL"); };
    const onTargetBANKACCOUNTINTERNAL = () => { setSelector(selector => ({ ...selector, target: "BANKACCOUNTINTERNAL"})); onTarget("BANKACCOUNTINTERNAL"); };
    const onTargetCASHACCOUNT = () => { setSelector(selector => ({ ...selector, target: "CASHACCOUNT"})); onTarget("CASHACCOUNT"); };
    const onTargetPERSONALACCOUNT = () => { setSelector(selector => ({ ...selector, target: "PERSONALACCOUNT"})); onTarget("PERSONALACCOUNT"); };
    const onTargetEXTERNALACCOUNT = () => { setSelector(selector => ({ ...selector, target: "EXTERNALACCOUNT"})); onTarget("EXTERNALACCOUNT"); };
    const onTargetCOFFERACCOUNT = () => { setSelector(selector => ({ ...selector, target: "COFFERACCOUNT"})); onTarget("COFFERACCOUNT"); };
    const onOriginINCOME = () => { setSelector(selector => ({ ...selector, origin: "INCOME", target: "INCOME"})); onOrigin("INCOME"); onTarget("INCOME")};

    return (
        <div className={styles.page}>
            <div className={styles["origin-bank-account-external"]} onClick={onOriginBANKACCOUNTEXTERNAL}>
                <div className={[styles["marker"], selector.origin === "BANKACCOUNTEXTERNAL"? styles["marker-active"]: ""].join(' ')}>РС Вн</div>
                <div className={styles["label"]}>Отправить с расчётного счёта внешнего</div>
            </div>
            <div className={styles["origin-bank-account-internal"]} onClick={onOriginBANKACCOUNTINTERNAL}>
                <div className={[styles["marker"], selector.origin === "BANKACCOUNTINTERNAL"? styles["marker-active"]: ""].join(' ')}>РС</div>
                <div className={styles["label"]}>Отправить с расчётного счёта организации</div>
            </div>
            <div className={styles["origin-cash-account"]} onClick={onOriginCASHACCOUNT}>
                <div className={[styles["marker"], selector.origin === "CASHACCOUNT"? styles["marker-active"]: ""].join(' ')}>КС</div>
                <div className={styles["label"]}>Выдать из кассы</div>
            </div>
            <div className={styles["origin-personal-account"]} onClick={onOriginPERSONALACCOUNT}>
                <div className={[styles["marker"], selector.origin === "PERSONALACCOUNT"? styles["marker-active"]: ""].join(' ')}>ЛС</div>
                <div className={styles["label"]}>Списать с лицевого счёта (Клиента)</div>
            </div>
            <div className={styles["origin-external-account"]} onClick={onOriginEXTERNALACCOUNT}>
                <div className={[styles["marker"], selector.origin === "EXTERNALACCOUNT"? styles["marker-active"]: ""].join(' ')}>ВС</div>
                <div className={styles["label"]}>Отправить с внешнего счёта</div>
            </div>
            <div className={styles["origin-coffer-account"]} onClick={onOriginCOFFERACCOUNT}>
                <div className={[styles["marker"], selector.origin === "COFFERACCOUNT"? styles["marker-active"]: ""].join(' ')}>ЯЧ</div>
                <div className={styles["label"]}>Выдать из ячейки</div>
            </div>
            <div className={styles["expenses"]} onClick={onOriginEXPENSE}>
                <div className={[styles["marker"], selector.origin === "EXPENSE"? styles["marker-active"]: ""].join(' ')}>Р</div>
                <div className={styles["label"]}>Расход</div>
            </div>

            <div className={styles["target-bank-account-external"]} onClick={onTargetBANKACCOUNTEXTERNAL}>
                <div className={[styles["marker"], selector.target === "BANKACCOUNTEXTERNAL"? styles["marker-active"]: ""].join(' ')}>РС Вн</div>
                <div className={styles["label"]}>Принять на расчётный счёт внешний</div>
            </div>
            <div className={styles["target-bank-account-internal"]} onClick={onTargetBANKACCOUNTINTERNAL}>
                <div className={[styles["marker"], selector.target === "BANKACCOUNTINTERNAL"? styles["marker-active"]: ""].join(' ')}>РС</div>
                <div className={styles["label"]}>Принять на расчётный счёт организации</div>
            </div>
            <div className={styles["target-cash-account"]} onClick={onTargetCASHACCOUNT}>
                <div className={[styles["marker"], selector.target === "CASHACCOUNT"? styles["marker-active"]: ""].join(' ')}>КС</div>
                <div className={styles["label"]}>Внести в кассу</div>
            </div>
            <div className={styles["target-personal-account"]} onClick={onTargetPERSONALACCOUNT}>
                <div className={[styles["marker"], selector.target === "PERSONALACCOUNT"? styles["marker-active"]: ""].join(' ')}>ЛС</div>
                <div className={styles["label"]}>Начислить на лицевой счёт (Клиенту)</div>
            </div>
            <div className={styles["target-external-account"]} onClick={onTargetEXTERNALACCOUNT}>
                <div className={[styles["marker"], selector.target === "EXTERNALACCOUNT"? styles["marker-active"]: ""].join(' ')}>ВС</div>
                <div className={styles["label"]}>Принять на внешний счёт</div>
            </div>
            <div className={styles["target-coffer-account"]} onClick={onTargetCOFFERACCOUNT}>
                <div className={[styles["marker"], selector.target === "COFFERACCOUNT"? styles["marker-active"]: ""].join(' ')}>ЯЧ</div>
                <div className={styles["label"]}>Принять в ячейку</div>
            </div>
            <div className={styles["income"]} onClick={onOriginINCOME}>
                <div className={[styles["marker"], selector.origin === "INCOME"? styles["marker-active"]: ""].join(' ')}>Д</div>
                <div className={styles["label"]}>Доход</div>
            </div>
        </div>
    );
};
