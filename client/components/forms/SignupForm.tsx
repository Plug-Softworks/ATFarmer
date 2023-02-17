import { Input, Button } from "../reusable";
import styles from "../../styles/components/forms/loginForm.module.scss";
import { useState, useEffect } from "react";

export const SignupForm = (): JSX.Element => {
    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        location: "",
        password: "",
        confirmPassword: ""
    });

    // fetch the user's location data
    useEffect(() => {
        if (navigator.geolocation) {
            // disable location field and polyfill location field
            
        } else {
            // enable manual location
        }
    }, [])

    function handleSignup() {
        console.log(signupData)
        if ([...Object.values(signupData)].every(Boolean) && (signupData.password === signupData.confirmPassword)) {
            // [POST]
            console.log(signupData);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const type = e.target.type;

        const name = e.target.name;

        const value = type == "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;


        setSignupData((prevData)=> {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }} className={`${styles.login_form}`}>
            <Input type={"text"} onChange={handleChange} name={"username"} placeholder="Enter username" />
            <Input type={"email"} onChange={handleChange} name={"email"} placeholder="Enter email" />
            <Input type={"text"} onChange={handleChange} name={"location"} placeholder="Enter location" />
            <Input type={"password"} onChange={handleChange} name={"password"} placeholder="Enter password" />
            <Input type={"password"} onChange={handleChange} name={"confirmPassword"} placeholder="Confirm Password" />
            <Button type={"submit"} onClick={handleSignup}>Register</Button>
        </form>
    )
}