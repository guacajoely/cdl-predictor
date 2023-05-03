import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    })

    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("current_user", JSON.stringify({
                        id: createdUser.id
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (event) => {
        event.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (event) => {
        const copy = { ...user }
        copy[event.target.id] = event.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="header">Register for CDL Match Predictor</h1>

                <fieldset>
                    <label htmlFor="username"> Username </label>
                    <input onChange={updateUser}
                        type="text" id="username" className="form-control"
                        placeholder="" required autoFocus />
                </fieldset>

                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="" required />
                </fieldset>

                <fieldset>
                    <label htmlFor="password"> Password </label>
                    <input onChange={updateUser}
                        type="text" id="password" className="form-control"
                        placeholder="" required />
                </fieldset>

                <fieldset>
                    <button className="register--button" type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}