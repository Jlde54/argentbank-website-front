import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom"
import logo from '../../assets/images/argentBankLogo.png'
import {logout} from '../../Redux/userSlicer.jsx'
import './header.css'

function Header() {

  const dispatch = useDispatch();

  // const [token, setToken] = useState(sessionStorage.getItem('token'));
  const token  = useSelector((state) => state.user.token)

  const firstName = useSelector((state) => token? state.user.firstName : null)

  const handleLogout = () => {
    // sessionStorage.removeItem('token');
    dispatch(logout());
    // setToken('');
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" onClick={handleLogout} to="/" >
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"></img>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {!token &&
          <NavLink className="main-nav-item" to="/login" >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        }
        {token &&
          <>
            <span className="main-nav-item main-nav-reduce">
              <i className="fa fa-user-circle"></i>
              {firstName}
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