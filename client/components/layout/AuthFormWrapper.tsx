import styles from "../../styles/components/layout/authFormWrapper.module.scss";

interface AuthFormWrapper_Props {
    variant?: "login" | "signup"
    children?: any
}

export const AuthFormWrapper = ({ variant, children}: AuthFormWrapper_Props): JSX.Element => {
    return (
        <div className={styles.auth_form_wrapper}>
            <div className={styles.auth_form_title_bar}>
                <h2>Smart Farmer {variant}</h2>
            </div>
            {children}
        </div>
    )
}