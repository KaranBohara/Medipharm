import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from '../../components/signup/Signup';
import Navbartop from '../../components/Navbar/Navbartop';

function Signuppage() {
    return (
        <div className="container-fluid">
        <div className='row'>
            <Navbartop/>
        </div>
        <div className='row'>
            <Signup/>
        </div>
        </div>
    )
}

export default Signuppage
