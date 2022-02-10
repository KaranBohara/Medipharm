import React from "react";
import "../Login/Login.css";
import { Form, Field } from 'react-final-form';
import {
    Link
  } from "react-router-dom";
  const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async (values: any) => {
  await sleep(300)
  console.log(values);

}
const required=(value:any)=>(value?undefined:"Required")
const GenerateOTP=()=>
{
    return (
        <div className="login-container">
          <div className="image-box"><img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="login"></img></div>
          <div className="forgot-box">
            <div className="login-heading" style={{marginTop:"3rem"}}><h4>Forgot Password</h4>
            <p style={{marginTop:"1rem"}}>Enter the OTP sent to the registered Email to reset your password</p>
            </div>
            <div className="login-content-body" style={{marginTop:".5rem"}}>
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                  <form onSubmit={handleSubmit} className="box">
                         <Field name="OTP"
                                validate={required}
                                >
                         {({ input,meta}) => (
                             <div className="mobile-label">
                             <p>OTP</p>
                                 <div className="name-tab">
                                 <input {...input} type="text" />
                                 {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>}
                                         </div>
                                         </div>
                         )}
                         </Field>
                    <div className="button-login" style={{marginTop:"2rem"}}>
                      <button type="submit">
                      <Link to="/resetpassword" className="link-decoration">Validate OTP</Link>
                      </button>
                    </div>
                  </form>
                )}
              />
            </div>
          </div>
        </div>
        );
}
export default GenerateOTP;