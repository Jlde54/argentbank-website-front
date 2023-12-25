import React from 'react'
import './account.css'

function Account({origin, title, amount, description})
{
    const className = origin === 'profile' ? "account account-white" : "account account-black"
    
    return (
        <section className={className}>
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">{description}</button>
            </div>
        </section>
    )
}
  
export default Account