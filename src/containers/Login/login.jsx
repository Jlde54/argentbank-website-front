import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/header.jsx"
import { getToken, getUserData } from '../../Redux/userSlicer.jsx';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const isLoading = useSelector((state) => state.user.isLoading)
  const error = useSelector((state) => state.user.error)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    let credential= {email, password}
    dispatch(getToken(credential)).then((result) => {
      if(result.payload) {
        dispatch(getUserData(result.payload)).then((result) => {
          if(result.payload) {
            localStorage.setItem('rememberMe', rememberMe);
            setEmail('')
            setPassword('')
            navigate ('/profile')
          }
        })
      }
    })
  }       

  return (
    <>
    <Header />
      <main className="main bg-dark div">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required value={password} onChange={(e)=>setPassword(e.target.value)}></input>
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" onChange={()=>setRememberMe(!rememberMe)}></input>
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {error && <p className="input-error">{error}</p>}
              <button type="submit" className="sign-in-button">
                {isLoading ? "Loading ...":"Sign In"}
              </button>
            </form>
          </section>
      </main>
    </>
  );
}

export default Login;