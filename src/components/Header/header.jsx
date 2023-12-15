import { NavLink } from "react-router-dom"
import logo from '../../assets/images/argentBankLogo.png'
import './header.css'
import { useState } from "react";

const getUser = () => {
  let user = sessionStorage.getItem('user')
  console.log("User dans header.jsx : ", user)
}

function Header() {

  const [user, setUser] = useState(getUser());

  console.log("User : ",user)

  const handleLogout = () => {
    sessionStorage.clear();
    setUser('');
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" onClick={handleLogout} to="/" >
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"></img>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {!user &&
          <NavLink className="main-nav-item" to="/login" >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        }
        {user &&
          <>
            <span className="main-nav-item main-nav-reduce">
              <i className="fa fa-user-circle"></i>
              {user.firstName}
            </span>
            <NavLink className="main-nav-item" onClick={handleLogout} to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        }
      </div>
    </nav>
  )
}
  
export default Header