import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Header from "../Header/header.jsx"
import Account from '../Account/account.jsx';
import Login from '../../containers/Login/login.jsx'
import './editUserInfo.css'

function EditUserInfo() {

  const token = useSelector(state => state.Token.value)
  const firstName = useSelector(state => state.FirstName.value)
  const lastName = useSelector(state => state.LastName.value)
  const userName = useSelector(state => state.UserName.value)
  const error = useSelector(state => state.Error.value)

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const profileResponse = await fetch('http://localhost:3001/api/v1/user/profile',
        {
          method: 'PUT',
          headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer' + token},
          body: JSON.stringify({userName})
        })
        const dataProfile = await profileResponse.json();
        dispatch({
          type:"userName/getUserName",
          payload:userName
        })
        sessionStorage.setItem('userName', dataProfile.body.userName);
        navigate('/profile')
  }
  catch {
    dispatch({
      type:"error/getError",
      payload:'Invalid access'
    })
  }
  }

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/profile')
  }

  const handleUserName = (e) => {
    dispatch({
      type:"userName/getUserName",
      payload:e.target.value
    })
  }

  return (
    <>
    {token &&
    <>
    <Header />
      <section className='edituserinfo'>
        <h1>Edit user info</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="userName">User name</label>
            <input type="text" id="userName" value={userName} onChange={handleUserName}></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" value={firstName} readOnly></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" value={lastName} readOnly></input>
          </div>
          {error && <p className="input-error">{error}</p>}
          <div className="input-wrapper">
            <button type="submit" className="sign-in-button" onClick={handleSave}>Save</button>
            <button type="submit" className="sign-in-button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </section>
      <Account origin="editUserInfo"/>
    </>
  }
  {!token &&
            <Login />
        }
  </>
  )
}

export default EditUserInfo