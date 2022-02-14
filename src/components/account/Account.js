import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { logOutUser } from "../../redux/actions/action";
import Navbartop from '../Navbar/Navbartop';
import { Link,useHistory } from 'react-router-dom';
import './Account.css';

const Account = ({
    logOutUser,
    isAuthenticated,
}) => {
    const history=useHistory();
    useEffect(() => {
    }, [isAuthenticated,history]);
    const handleClick= ()=> {
        logOutUser();
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
        <a className='first-list link-decoration' onClick={handleClick}>Logout</a>
        </div>
        <div className='right-section'>
        </div>
        </div>
        </div>
    )
}
const mapDispatchToProps = {
    logOutUser: logOutUser,
};

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    isAuthenticated: state.userReducer.isAuthenticated,
});
export default connect(mapStateToProps, mapDispatchToProps)(Account);
