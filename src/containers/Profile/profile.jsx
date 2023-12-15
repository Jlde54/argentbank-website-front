import React from 'react';
import { useSelector } from 'react-redux';
import Header from "../../components/Header/header.jsx"
import Welcome from '../../components/Welcome/welcome.jsx';
import Account from '../../components/Account/account.jsx';
import Login from '../../containers/Login/login.jsx'
import './profile.css';

function Profile() {

    const token = useSelector(state => state.Token.value)

    return (
        <>
        {token &&
            <>
                <Header />
                <main className="main bg-dark">
                    <Welcome />
                    <Account origin="profile"/>
                </main>
            </>
        }
        {!token &&
            <Login />
        }
        </>
    );
}

export default Profile;