import styles from "../../styles/pages/login.module.scss";
import { AuthFormWrapper, SignupForm } from "@/components";

export default function Signup(): JSX.Element {
    return (
        <div className={`app ${styles.login}`}>
            <div className={`content ${styles.login_content}`}>
                <AuthFormWrapper variant={'signup'}>
                    <SignupForm />
                </AuthFormWrapper>
            </div>
        </div>
    )
}