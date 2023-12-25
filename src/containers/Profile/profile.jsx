import React from 'react';
import { useSelector } from 'react-redux';
import Header from "../../components/Header/header.jsx"
import Welcome from '../../components/Welcome/welcome.jsx';
import Account from '../../components/Account/account.jsx';
import Home from '../../containers/Home/home.jsx'
import './profile.css';

function Profile() {

    // const token = sessionStorage.getItem('token')
    // const token = useSelector((state) => state.user.token)

    return (
        // <>
        // {token &&
            <>
                <Header />
                <main className="main bg-dark div">
                    <Welcome />
                    <h2 className="sr-only">Accounts</h2>
                    <Account origin="profile" title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
                    <Account origin="profile" titlev="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
                    <Account origin="profile" title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
                </main>
            </>
        // }
        // {!token &&
        //     <Home />
        // }
        // </>
    );
}

export default Profile;