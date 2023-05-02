import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = () => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar--item active">
                <Link className="navbar--link" to="/">
                    <img className="navbar--image" src={require("../../images/header.png")} alt="CDL LOGO" />
                </Link>
            </li>

            <div className="navbar--links--container">

                <li className="navbar--item active">
                    <Link className="navbar--link" to="/">Home</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" to="/about">About</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" to="/sources">Sources</Link>
                </li>

                {
                    localStorage.getItem("current_user")
                        ? <li className="navbar--item navbar--logout">
                            <Link className="navbar--link" to="" onClick={() => {
                                localStorage.removeItem("current_user")
                                window.alert("You have been logged out")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                        </li>
                        : <li className="navbar--item navbar--login">
                            <Link className="navbar--link" to="/login" onClick={() => {
                                navigate("/login")
                            }}>Login</Link>
                        </li>
                }

            </div>

        </ul>
    )
}