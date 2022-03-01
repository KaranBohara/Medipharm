import React,{useEffect} from 'react';
import Navbartop from '../Navbar/Navbartop';
import {useHistory } from 'react-router-dom';
import './Account.css';

const Account = () => {
    const history=useHistory();
    const handleClick= ()=> {
        history.push('/loginclient')
    }
    const userInfo=JSON.parse(localStorage.getItem('User'));
    return (
        <div>
        <div>
            <Navbartop/>
        </div>
        <div className='myaccount-header'>
         Welcome, {userInfo?userInfo.name:''}
        </div>
        <div className='account-dashboard'>
        <div className='left-section'>
        <a href='' className='first-list link-decoration' onClick={handleClick}>Logout</a>
        </div>
        <div className='right-section'>
        </div>
        </div>
        </div>
    )
}

export default Account;
