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
  fetch("https://medpharma-api.herokuapp.com/users/reset", {
    method:"POST",
    headers:{
    "content-type":"application/json",
    },
    body: JSON.stringify(values)

  }).then((res)=>res.json())
    .then((data)=>{
       console.log(data);
  }).catch(e=>{
    console.log(e)
  })

  // fetch("http://localhost:5000/users/reset", {
  //   method:"POST",
  //   headers:{
  //   "content-type":"application/json",
  //   },
  //   body: JSON.stringify(values)

  // }).then((res)=>res.json())
  //   .then((data)=>{
  //      console.log(data);
  // }).catch(e=>{
  //   console.log(e)
  // })

  

};
const Resetpassword = () => {
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
                     <Field name="password">
                     {({ input,meta}) => (
                         <div className="mobile-label">
                          <p>New Password</p>
                          <div className="name-tab"><input {...input} type="password" /> 
                          {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>} 
                         </div>
                         </div>
                     )}
                     </Field>
                     <Field name="confirmPassword">
                     {({ input,meta}) => (
                         <div className="mobile-label">
                          <p>Confirm New Password</p>
                          <div className="name-tab"><input {...input} type="password" />
                          {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>}
                         </div>
                         </div>
                     
                     )}
                     </Field>
                            <div className="button-login">
                         <button type="submit" disabled={submitting}>
                             Reset Password
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
export default Resetpassword;