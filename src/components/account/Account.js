import React,{useEffect} from 'react';
import Navbartop from '../Navbar/Navbartop';
import {useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUserAction } from '../../actions/userActions'
import './Account.css';
import defaultAvtar from "../../assets/profile.jpg";

const Account = (props) => {
   const {user}=props;
    const history=useHistory();
    const handleLogout = () => {
      props.dispatch(logoutUserAction())
  }
    const userInfo=JSON.parse(localStorage.getItem('User'));
    return (
        <div>
        <div className='account-tabs-container'>
        <div className='profile-container'>
        <div className='profile-account-pic'>
        <img src={defaultAvtar} alt=''/>
        </div>
        </div>
        </div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(Account);
