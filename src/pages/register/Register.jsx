import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" action="">
               <label htmlFor="">UserName</label>
                <input className="registerInput" type="email" placeholder="Enter your username.." />
                <label htmlFor="">Email</label>
                <input className="registerInput" type="email" placeholder="Enter your email.." />
                <label htmlFor="">Password</label>
                <input className="registerInput" type="password" placeholder="Enter your Password" />
                <button className="registerButton">register</button>
        </form>
        <button className="registerLoginButton">
         
        <Link className="link" to="/login">Login</Link></button>
        
    </div>
  )
}
