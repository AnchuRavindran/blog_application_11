import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" action="">
                <label htmlFor="">Email</label>
                <input className="loginInput" type="email" placeholder="Enter your email.." />
                <label htmlFor="">Password</label>
                <input className="loginInput" type="password" placeholder="Enter your Password" />
                <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link></button>
    </div>
  )
}
