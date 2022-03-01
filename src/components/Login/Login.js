import "./Login.css";
import React,{useState} from "react";
import { connect } from 'react-redux'
import { loginUserAction } from '../../actions/userActions.js'
import { Link} from "react-router-dom";
import Medilogo from "../../assets/medicine.png";
import LoginImage from "../../assets/needs.png"

const Login = ({login}) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
function handleChange(event) {
    const { name, value } = event.target;
    setUserData(prevData => ({
        ...prevData,
        [name]: value
    }));
    setErrors(prevData => ({
        ...prevData,
        [name]: ""
    }));
}

function formIsValid() {
    const { email, password } = userData;
    const errors = {};

    if (!email) errors.email = "*Email is required";
    if (!password) errors.password = "*Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
}

function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    login(userData)
}

  return (
    <div className="login-wrapper">
      <div className="login-container">
      <div className="image-box"> 
      <div className="medlogo"><Link to="/" className="link-decoration"><img src={Medilogo} alt={Medilogo} width="30px" height="30px"/>
      <span style={{marginLeft:".2rem"}}>
      Medipharm
      </span></Link>
      </div>
      <div className="login-image">
      <img src={LoginImage} alt=''/>
      </div>
      </div>
      <div className="login-wrap">
      <div className="login-box">
      <div className="mobile-logo">
      <Link to="/" className="link-decoration-body"><img src={Medilogo} alt={Medilogo} width="30px" height="30px"/>
      <span style={{marginLeft:".2rem"}}>
      Medipharm
      </span></Link>
      </div>
        <div className="login-heading">
        <h2>Welcome to Medpharmacy</h2>
          <p>
          New user?<span> <Link to="/signupclient" className="link-decoration-login">Signup here.</Link></span>
          </p>
          
        </div>
        <div className="login-content-body">
        <form onSubmit={handleSave} className="box">
                    <div className="mobile-label">
                      <p>E-mail</p>
                      <div className="name-tab">
                        <input  type="email"
                        placeholder=""
                        name="email"
                        value={userData.email}
                        onChange={handleChange} className="input-tab" />
                          {errors.email ? <span className="required-error">{errors.email}</span> : null}
                      </div>
                    </div>
                    <div className="mobile-label">
                      <p>Password</p>
                      <div className="name-tab">
                        <input
                        type="password"
                        placeholder=""
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                          className="input-tab"
                        />
                        {errors.password ? <span className="required-error">{errors.password}</span> : null}
                      </div>
                    </div>
                <div className="button-login">
                  <button type="submit"><span>SignIn</span></button>
                </div>
              </form>
          <div className="forgotpasswordbox">
            <Link to="/forgotpassword" className="link-decoration-body">
              Forgot Password ?
            </Link>
          </div>
          {/* <div className="social-media-icon-box">
            <div className="social-media-box"><img src="https://www.linkpicture.com/q/google.png" alt="facebook" />Google</div>
            <div className="social-media-box"><img src="https://www.linkpicture.com/q/facebook.png" alt="google" />Facebook</div>
          </div> */}
        </div>
      </div>
      </div>
    </div>
    </div>
  );
        };

        const mapDispatchToProps = dispatch => {
          return {
              login: (creds) => {
                  dispatch(loginUserAction(creds))
              }
          }
      }
      
      export default connect(null, mapDispatchToProps)(Login)