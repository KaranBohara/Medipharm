import "./Login.css";
import { Form, Button } from 'react-bootstrap';
import React,{useState,useEffect} from "react";
import { Link ,useHistory} from "react-router-dom";
import { connect } from 'react-redux';
import { loginUser } from "../../redux/actions/action";

const Login = ({ 
  loginUser, 
  loginError,
  isAuthenticated,
}) => {
  const history=useHistory();
  // const search = useLocation().search;
  // const name= new URLSearchParams(search).get("message");
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (isAuthenticated) {
        history.push("/");
      }
}, [isAuthenticated,history]);

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
    loginUser(userData);
}

  return (
    <div className="login-wrapper">
      <div className="login-container">
      <div className="image-box">
        <img
          src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
          alt="login"
        ></img>
      </div>
      <div className="login-box">
        <div className="login-heading">
          <h4>SignIn/Signup</h4>
          <p>
            Sign up or Sign in to access your orders, special offers, health
            tips and more!
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
    {(loginError) ? (
            <p>{loginError}</p>
        ) : (null)} 
          <div className="forgotpasswordbox">
            <Link to="/forgotpassword" className="link-decoration-body">
              Forgot Password ?
            </Link>
          </div>
          {/* <div className="social-media-icon-box">
            <div className="social-media-box"><img src="https://www.linkpicture.com/q/google.png" alt="facebook" />Google</div>
            <div className="social-media-box"><img src="https://www.linkpicture.com/q/facebook.png" alt="google" />Facebook</div>
          </div> */}
          <div className="new-user">
            <div className="newuser-sub1">
              <Link to="/signupclient" className="link-decoration-login">
                Create a new account
              </Link>
            </div>
            <div className="newuser-sub2">
              <Link to="/signupclient" className="link-decoration-login">
                <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
        };
const mapDispatchToProps = {
  loginUser: loginUser,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  loginError:state.userReducer.loginError
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
