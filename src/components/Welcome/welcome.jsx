import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Welcome() {

  const token = useSelector((state) => state.user.token)
  const firstName = useSelector((state) => token? state.user.firstName : null)
  const lastName = useSelector((state) => token? state.user.lastName : null)
  const fullName = firstName + ' ' + lastName + ' !'
  
  const navigate = useNavigate()


  const handleEditName = () => {
    navigate('/editUserInfo')
  }

  return (
    <div className="header">
        <h1>Welcome back<br />{fullName}</h1>
        <button className="edit-button" onClick={handleEditName}>Edit Name</button>
    </div>
  )
}

export default Welcome