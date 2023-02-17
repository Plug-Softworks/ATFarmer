import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "../../styles/components/reusable/button.module.scss";

interface Button_Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: any
}

export const Button = ({ children, ...utilProps}: Button_Props) => {
    return (
        <button className={styles.button} {...utilProps}>
            {children}
        </button>
    )
}