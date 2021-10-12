import "./Login.css";
import { Form, Field } from 'react-final-form';
import { render } from 'react-dom'
import React from "react";  
const sleep = (ms:any) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values:any) => {
  await sleep(300)
  console.log(values);
  
}
const Login=()=>
{
return(
<div className="login-container">
    <div className="image-box"><img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="login"></img></div>
    <div className="login-box">
        <div className="login-heading"><h4>SignIn/Signup</h4>
        <p>Sign up or Sign in to access your orders, special offers, health tips and more!</p>
        </div>
        <div className="login-content-body">
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className="box">
          <div className="mobile-label">
            <p>Phone Number</p>
            <div className="number-tab">
                <div className="prefix-number">+91</div>
           <div className="number-box"> <Field
              name="Phone number"
              component="input"
              type="tel"
              minlength="10"
              maxlength="10"
              placeholder="Enter your mobile no"
              id="mobile"
              required="required"
              pattern="[0-9]{10}"
            />
            </div>
            </div>
          </div>
          <div className="button-login">
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    />
        </div>
    </div>
</div>
)
}
export default Login;