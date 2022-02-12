import React, { useState } from 'react';
import { Link,useHistory} from "react-router-dom";
import { Form} from 'react-bootstrap';
import apiCollection from "../../api/api";
import { toast } from "react-toastify";
import Medilogo from "../../assets/medicine.png";

const Signup = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const history=useHistory();
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
      const { name, email, password, confirmPassword } = userData;
      const errors = {};

      if (!name) errors.name = "*Name is required.";
      if (!email) errors.email = "*Email is required";
      if (!password) errors.password = "*Password is required";
      if (!confirmPassword) errors.confirmPassword = "*Confirm password is required"
      if (password!==confirmPassword) errors.confirmPassword='*Password does not match'

      setErrors(errors);
      return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
      event.preventDefault();
      setUserData({ name: "", email: "", password: "", confirmPassword: "" });
      if (!formIsValid()) return;
      apiCollection.registerUser(userData)
          .then(() => {
              toast.success("Register Success!!!")
              history.push("/loginclient");
          })
          .catch((err) => {
              console.log(err.response);
          })
        }
    return (
        <div className="login-wrapper">
        <div className="login-container">
        <div className="image-box"> 
        <div className="medlogo"><Link to="/" className="link-decoration"><img src={Medilogo} alt={Medilogo} width="30px" height="30px"/>
        <span style={{marginLeft:".2rem"}}>
        Medipharm
        </span></Link></div>
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
                Sign up to access your orders, special offers, health
                tips and more!
              </p>
            </div>
                <div className="login-content-body">
                <Form onSubmit={handleSave}>
                <div className="mobile-label">
                              <p>Name</p>
                              <div className="name-tab">
                                <input type="text"
                                placeholder=""
                                name="name"
                                value={userData.name}
                                onChange={handleChange} className='input-tab' />
                                {errors.name ? <span className='required-error'>{errors.name}</span> : null}
                              </div>  
                            </div>
                <div className="mobile-label">
                         <p>E-mail</p>
                        <div className="name-tab"> 
                             <input type="email"
                             placeholder=""
                             name="email"
                             value={userData.email}
                             onChange={handleChange} className='input-tab'/>
                             {errors.email ? <span className='required-error'>{errors.email}</span> : null}
                                     </div>
                                     </div>
                     
                         <div className="mobile-label">
                          <p>Password</p>
                          <div className="name-tab"><input type="password"
                          placeholder=""
                          name="password"
                          value={userData.password}
                          onChange={handleChange} className='input-tab' /> 
                          {errors.password? <span className='required-error'>{errors.password}</span>: null} 
                         </div>
                         </div>

                         <div className="mobile-label">
                          <p>Confirm Password</p>
                          <div className="name-tab"><input type="password"
                          placeholder=""
                          name="confirmPassword"
                          value={userData.confirmPassword}
                          onChange={handleChange} className='input-tab' />
                          {errors.confirmPassword? <span className='required-error'>{errors.confirmPassword}</span>:null}
                         </div>
                         </div>
                <div className="button-login">
                <button type="submit">
                    <span>
                    Create Account
                    </span>
                </button>
            </div>
            </Form>
                    <div className="new-user">
                        <div className="newuser-sub1"><Link to="/loginclient" className="link-decoration-login">Registered member! <span style={{ fontWeight: "bold" }}> SignIn</span></Link></div>
                        <div className="newuser-sub2"><Link to="/loginclient" className="link-decoration-login"><i className="fas fa-long-arrow-alt-right"></i></Link></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Signup;