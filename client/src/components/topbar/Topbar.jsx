import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className='top'> 
    <div className="topLeft">
    <i className="topIcon fa-brands fa-facebook"></i>
    <i className="topIcon fa-brands fa-twitter-square"></i>
    <i className="topIcon fa-brands fa-pinterest"></i>
    <i className="topIcon fa-brands fa-instagram-square"></i>
    </div>
    <div className="topCenter">
        <ul className="topList">
        <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
       

    </div>
    <div className="topRight">
      {
        user ? (
      <img className="topImg" src="https://media.istockphoto.com/photos/happy-asian-girls-playing-together-and-having-fun-in-outdoor-picture-id530994008?k=20&m=530994008&s=612x612&w=0&h=WPrXdQinXh2Al1DTMuogcKhypKtwh1vWr1CpBXzJ7YY=" alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
          <Link className="link" to="/login">LOGIN</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/register">REGISTER</Link>
          </li>
          </ul>
        )
      }
        
        <i className="topSearchIcon fas fa-search"></i>
    </div>
    </div>
  )
}
