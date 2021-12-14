import "./Login.css";
import { Form, Field } from 'react-final-form';
import { render } from 'react-dom'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async (values: any) => {
  await sleep(300)
  console.log(values);

}
const required=(value:any)=>(value?undefined:"Required")
const Login = () => {
  return (
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
                
                    <Field name="Phonenumber"
                            validate={required}
                            >
                     {({ input,meta}) => (
                         <div className="mobile-label">
                         <p>Phone Number</p>
                             <div className="name-tab">
                             <div className="prefix-number">+91</div> 
                             <div className="number-box">
                             <input {...input} type="tel" id="mobile" minLength={10} maxLength={10} pattern="[0-9]{10}"/>
                             {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>}
                                     </div>
                                     </div>
                                     </div>
                     )}
                     </Field>
                <div className="button-login">
                  <button type="submit">
                   SignIn
                  </button>
                </div>
              </form>
            )}
          />
          <div className="alternate-login">Or Connect using</div>
          <div className="social-media-icon-box">
            <div className="social-media-box"><img src="https://www.linkpicture.com/q/google.png" alt="facebook" />Google</div>
            <div className="social-media-box"><img src="https://www.linkpicture.com/q/facebook.png" alt="google" />Facebook</div>
          </div>
          <div className="new-user">
            <div className="newuser-sub1"><Link to="/signup" className="link-decoration-login">Create a new account</Link></div>
            <div className="newuser-sub2"><Link to="/signup" className="link-decoration-login"><i className="fas fa-long-arrow-alt-right"></i></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;