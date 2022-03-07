import React,{useEffect} from 'react';
import Navbartop from '../Navbar/Navbartop';
import {useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUserAction } from '../../actions/userActions';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
        <div className='profile-name'>Hello, {user.name}</div>
        </div>
        <div className='myprofile-options'>Your Profile <ArrowForwardIosIcon className='forward-icon'/></div>
        <div className='myprofile-options'>Your Orders <ArrowForwardIosIcon className='forward-icon'/></div>
        <div className='myprofile-options'>Your Wishlist <ArrowForwardIosIcon className='forward-icon'/></div>
        <div className='myprofile-options'>Saved Addresses <ArrowForwardIosIcon className='forward-icon'/></div>
        <div className='myprofile-options'>Returns & Exchange <ArrowForwardIosIcon className='forward-icon'/></div>
        <div className='myprofile-options'>Change Password <ArrowForwardIosIcon className='forward-icon'/></div>
        <div className='myprofile-options' onClick={handleLogout}>Logout</div>
        </div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(Account);
