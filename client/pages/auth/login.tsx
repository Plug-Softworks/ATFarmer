import styles from "../../styles/pages/login.module.scss";
import { AuthFormWrapper, LoginForm } from "../../components";

export default function Login() {
    return (
        <div className={`app ${styles.login}`}>
            <div className={`content ${styles.login_content}`}>
                <AuthFormWrapper variant={"login"}>
                    <LoginForm />
                </AuthFormWrapper>
            </div>
        </div>
    )
}