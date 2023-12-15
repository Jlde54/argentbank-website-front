import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/header.jsx"
import { loginUser } from '../../Redux/userSlicer.jsx';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {isLoading, user, error} = useSelector((state) => state.user)
  // console.log("State isLoading : ",isLoading)
  // console.log("State user : ",user)
  // console.log("State error : ",error)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let credential= {email, password};
    // console.log("Credential : ",credential)
    dispatch(loginUser(credential)).then((result) =>{
      // console.log("result.payload : ", result.payload)
      if(result.payload){
        setEmail('');
        setPassword('');
        navigate ('/profile');
      }
    });
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
                <input type="checkbox" id="remember-me"></input>
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