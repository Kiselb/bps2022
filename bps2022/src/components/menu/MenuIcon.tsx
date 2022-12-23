import React from "react";
import styles from "./MenuIcon.module.css";

export const MenuIcon = function(icon: React.FunctionComponent<any>) {
    return React.createElement(icon, { className: styles.antdicon });
}
