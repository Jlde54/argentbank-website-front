import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Welcome() {

    const firstName = useSelector(state => state.FirstName.value)
    const lastName = useSelector(state => state.LastName.value)
    const fullName = firstName + ' ' + lastName + ' !'
    
    const navigate = useNavigate()

    const handleEditName = () => {
      navigate('/editUserInfo')
  }

  return (
    <div className="header">
        <h1>Welcome back<br />{fullName}</h1>
        <button className="edit-button"onClick={handleEditName}>Edit Name</button>
    </div>
  )
}

export default Welcome