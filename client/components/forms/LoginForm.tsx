import { Input, Button } from "../reusable";
import styles from "../../styles/components/forms/loginForm.module.scss";
import { useState } from "react";
import axios from "axios";

export const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    function handleLoginSubmit() {
        if ([...Object.values(loginData)].every(Boolean)) {
            // POST to login
            console.log(loginData)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;

        const name = e.target.name;

        setLoginData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }} className={styles.login_form}>
            <Input type={"text"} name={"username"} placeholder={"Enter username"} onChange={handleChange} />
            <Input type={"password"} name={"password"} placeholder={"Enter password"} onChange={handleChange} />
            <Button type={"submit"}>Login</Button>
        </form>
    )
}