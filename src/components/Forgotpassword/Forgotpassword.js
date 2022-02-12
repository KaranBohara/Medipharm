import React from "react";
import "../Login/Login.css";
import Medilogo from "../../assets/medicine.png";
import {Link} from "react-router-dom";
import LoginImage from "../../assets/needs.png"
const onSubmit = async (values) => {
  console.log(values);

}
const required=(value)=>(value?undefined:"Required")
const Forgotpassword=()=>
{
  function handleSave(event) {
    event.preventDefault();
}
    return (
      <div className="login-wrapper">
        <div className="login-container">
        <div className="image-box"> 
        <div className="medlogo"><Link to="/" className="link-decoration"><img src={Medilogo} alt={Medilogo} width="30px" height="30px"/>
        <span style={{marginLeft:".2rem"}}>
        Medipharm
        </span></Link></div>
        <div className="login-image">
      <img src={LoginImage} alt=''></img>
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
            <h4>
            Forgot Password
            </h4>
            <p>Enter your registered Email to reset your password</p>
          </div>
            <div className="login-content-body">
            <form onSubmit={handleSave} className="box">
            <div className="mobile-label">
              <p>E-mail</p>
              <div className="name-tab">
                <input  type="email"
                placeholder=""
                name="email"
                className="input-tab" />
                  {/*{errors.email ? <span className="required-error">{errors.email}</span> : null}*/}
              </div>
              </div>
                         <div className="button-login">
                      <button type="submit">
                      <span>Generate OTP</span>
                      </button>
                      </div>
                  </form>
            </div>
          </div>
        </div>
        </div>
        </div>
        );
}
export default Forgotpassword;