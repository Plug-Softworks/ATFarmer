import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "../../styles/components/reusable/input.module.scss";

interface Input_Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{}

export const Input = ({ ...utilProps}: Input_Props) => {
    return (
        <div className={styles.input_wrapper}>
            <input {...utilProps} />
        </div>
    )
}