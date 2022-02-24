import React,{useState} from "react";
import "../styles/Loginadmin.css";
import Medilogo from "../assets/medicine.png";
import { Form, Field } from "react-final-form";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingImage from "../assets/loading.gif";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const required = (value) => (value ? undefined : "*Required");
  const onSubmitlogin = async (values) => {
    setLoading(true)
     await fetch("https://medpharma-api.herokuapp.com/admin/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then((response)=>response.json())
      .then((data) => {        
        if(data.success)
        {
        localStorage.setItem('userInfo',JSON.stringify(data));
        toast.success(data.message)
        history.push('/admin/dashboard')
        setLoading(false)
        }
        else
        {
          setLoading(false)
          toast.error(data.message)
          history.push('/admin/login')
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="Login-page">
     {loading?<div className="add-class"><img src={LoadingImage} width="35%" height="35%" alt="loading"/></div>:""}
      <ToastContainer draggable={false} position="top-center" transition={Zoom} autoClose={3000} />
      <div className="admin-login-container">
        <div className="admin-login-design">
          <h2>Welcome to the Admin Page</h2>
          <p>Login with Email-Id and secured Password.</p>
          <p
            style={{
              marginTop: "25rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            Copyright
            <span
              style={{
                marginLeft: ".2rem",
                marginRight: ".2rem",
                fontSize: "1rem",
              }}
            >
              &#169;
            </span>
            2022 Medipharm.All Rights Reserved.
          </p>
        </div>
        <div className="admin-login-form">
          <div className="admin-logo-login">
            <img src={Medilogo} alt="logo" height="25px"></img>
            <div
              style={{
                color: "#33aeb1",
                fontWeight: "bold",
                marginLeft: ".4rem",
                cursor:"pointer"
              }}
            >
              Medipharm
            </div>
          </div>
          <div className="admin-login-content">
            <Form
              onSubmit={onSubmitlogin}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="admin-box">
                  <Field name="email" validate={required}>
                    {({ input, meta }) => (
                      <div className="admin-mobile-label">
                        <p>E-mail</p>
                        <div className="admin-name-tab">
                            <input {...input} type="email" />    
                          {meta.error && meta.touched && (
                            <span className="admin-required-error">
                              {meta.error}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </Field>
                  <Field name="password" validate={required}>
                    {({ input, meta }) => (
                      <div className="admin-mobile-label">
                        <p>Password</p>
                        <div className="admin-name-tab">
                            <input {...input} type="password" />
                          {meta.error && meta.touched && (
                            <span className="admin-required-error">
                              {meta.error}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </Field>
                  <div className="admin-button-login">
                    <input type="submit" value="Login"></input>
                  </div>
                </form>
              )}
            />
          </div>
          <div className="admin-forgot-box">Forgot Password?</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;