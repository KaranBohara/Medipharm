import "./Signup.css";
import { Form, Field } from 'react-final-form';
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
axios.post("http://localhost:5000/api/users/signup",values)
.then(response=>console.log(response.data))
 console.log(values);
};
const Signup = () => {
    return (
        <div className="login-container">
            <div className="image-box"><img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="login"></img></div>
            <div className="login-box">
                <div className="login-heading"><h4>SignIn/Signup</h4>
                    <p>Sign up or Sign in to access your orders, special offers, health tips and more!</p>
                </div>
                <div className="login-content-body">
                    <Form onSubmit={onSubmit} 
                    validate={values => {
        const errors = {}
        if (!values.Name) {
          errors.Name = 'Required'
        }
        if (!values.Phonenumber) {
          errors.Phonenumber = 'Required'
        }
        if (!values.Password) {
          errors.Password = 'Required'
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = 'Required'
        } else if (values.Password !== values.confirmPassword) {
          errors.confirmPassword = 'Password must match'
        }
        return errors
      }}
                      render={({handleSubmit,submitting})=>
                      (
                        <form onSubmit={handleSubmit}>   
                            <Field name="Name" >
                            {({input,meta})=>
                            <div className="mobile-label">
                              <p>Name</p>
                              <div className="name-tab">
                              <input {...input} />
                              {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>}
                              </div>  
                            </div>
                            }
                            </Field>
                            <Field name="Phonenumber" >
                     {({ input,meta}) => (
                         <div className="mobile-label">
                         <p>Phone Number</p>
                             <div className="name-tab"> 
                             <input {...input} type="tel" id="mobile" minLength={10} maxLength={10} pattern="[0-9]{10}"/>
                             {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>}
                                     </div>
                                     </div>
                     )}
                     </Field>
                     <Field name="Password">
                     {({ input,meta}) => (
                         <div className="mobile-label">
                          <p>Password</p>
                          <div className="name-tab"><input {...input} type="password" /> 
                          {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>} 
                         </div>
                         </div>
                     )}
                     </Field>
                     <Field name="confirmPassword">
                     {({ input,meta}) => (
                         <div className="mobile-label">
                          <p>Confirm Password</p>
                          <div className="name-tab"><input {...input} type="password" />
                          {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>}
                         </div>
                         </div>
                     
                     )}
                     </Field>
                            <div className="button-login">
                         <button type="submit" disabled={submitting}>
                             Create Account
                         </button>
                     </div>
                         
                        </form>
                       
                      )}
                      />
                    <div className="new-user">
                        <div className="newuser-sub1"><Link to="/login" className="link-decoration-login">Registered member! <span style={{ fontWeight: "bold" }}> SignIn</span></Link></div>
                        <div className="newuser-sub2"><Link to="/login" className="link-decoration-login"><i className="fas fa-long-arrow-alt-right"></i></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;