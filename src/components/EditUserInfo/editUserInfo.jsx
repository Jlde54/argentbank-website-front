import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Header from "../Header/header.jsx"
import Account from '../Account/account.jsx';
import { updateUserName } from '../../Redux/userSlicer.jsx';
import './editUserInfo.css'

function EditUserInfo() {

  const token = useSelector((state) => state.user.token)

  const firstName = useSelector(state => token? state.user.firstName : null)
  const lastName = useSelector(state => token? state.user.lastName : null)
  const userName = useSelector(state => token? state.user.userName : null)
  const error = useSelector(state => token? state.user.error : null)

  const [newUserName, setNewUserName] = useState(userName)

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    dispatch(updateUserName({token, newUserName})).then((result) => {
      if(result.payload) {
        navigate('/profile')
      }
    })
  }

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/profile')
  }


  return (
    <>
    <Header />
      <section className='edituserinfo'>
        <h1>Edit user info</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="userName">User name</label>
            <input type="text" id="userName" value={newUserName} onChange={(e)=>setNewUserName(e.target.value)}></input>
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
      <h2 className="sr-only">Accounts</h2>
      <Account origin="editUserInfo" title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
      <Account origin="editUserInfo" titlev="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
      <Account origin="editUserInfo" title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
    </>
  )
}

export default EditUserInfo