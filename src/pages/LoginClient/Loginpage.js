import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbartop from '../../components/Navbar/Navbartop';
import Login from '../../components/Login/Login';

function Loginpage() {
    return (
        <div className="container-fluid">
            <div className='row'>
                <Navbartop/>
            </div>
            <div className='row'>
                <Login/>
            </div>
        </div>
    )
}

export default Loginpage
