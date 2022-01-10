import "./Login.css";
import { Form, Field } from "react-final-form";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorMessage,getErrorMessage]=useState("");
  const required = (value: any) => (value ? undefined : "Required");
const onSubmitlogin = async (values: any) => {
  console.log(values);
  // fetch("https://medpharma-api.herokuapp.com/users/login", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(values),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  fetch("http://localhost:5000/users/login", {
    method:"POST",
    headers:{
    "content-type":"application/json",
    },
    body: JSON.stringify(values)

  }).then((res)=>res.json())
    .then((data)=>{
       if(data.message)
       { 
        getErrorMessage(data.message);
       }
  }).catch(e=>{
    console.log(e)
  })
  setTimeout(()=>
        {
         getErrorMessage("");
        },3000)
};


  return (
    <div className="login-container">
      <div className="image-box">
        <img
          src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
          alt="login"
        ></img>
      </div>
      <div className="login-box">
        <div className={errorMessage==="" ? "":"error-container"}>{errorMessage}</div>
        <div className="login-heading">
          <h4>SignIn/Signup</h4>
          <p>
            Sign up or Sign in to access your orders, special offers, health
            tips and more!
          </p>
        </div>
        <div className="login-content-body">
          <Form
            onSubmit={onSubmitlogin}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} className="box">
                <Field name="email" validate={required}>
                  {({ input, meta }) => (
                    <div className="mobile-label">
                      <p>E-mail</p>
                      <div className="name-tab">
                        <input {...input} type="email" className="input-tab" />
                        {meta.error && meta.touched && (
                          <span className="required-error">{meta.error}</span>
                        )}
                      </div>
                    </div>
                  )}
                </Field>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <div className="mobile-label">
                      <p>Password</p>
                      <div className="name-tab">
                        <input
                          {...input}
                          type="password"
                          className="input-tab"
                        />
                        {meta.error && meta.touched && (
                          <span className="required-error">{meta.error}</span>
                        )}
                      </div>
                    </div>
                  )}
                </Field>
                <div className="button-login">
                  <button type="submit">SignIn</button>
                </div>
              </form>
            )}
          />
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
              <Link to="/signup" className="link-decoration-login">
                Create a new account
              </Link>
            </div>
            <div className="newuser-sub2">
              <Link to="/signup" className="link-decoration-login">
                <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
