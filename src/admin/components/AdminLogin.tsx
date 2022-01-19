import React,{ useState } from "react";
import "../styles/Loginadmin.css";
import Medilogo from  "../assets/medicine.png";
import { Form, Field } from "react-final-form";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {useHistory} from "react-router-dom";
import {ToastContainer,toast,Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin=()=>{
  const SuccessToast=(e:any)=>
              {
                toast.success(e,
                {
                position:toast.POSITION.TOP_CENTER,
                });
              }
  const history=useHistory();
  const required = (value: any) => (value ? undefined : "*Required");
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmitlogin = async (values: any) => {
    fetch("http://localhost:5000/admin/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
            if (data.message) {
              toast.success("user");
              history.push("/admin/dashboard");       
              setErrorMessage(data.message);
            }
          })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }
    return (
      <div className="Login-page">
        <ToastContainer
        draggable={false}
        transition={Zoom}
        autoClose={8000}
        />
        <div className="admin-login-container">
          <div className="admin-login-form">
            <div className="admin-logo-login"><img src={Medilogo} alt="logo" height="25px"></img>
            <div style={{color:"#33aeb1",fontWeight:"bold",marginLeft:".4rem"}}>Medipharm</div>
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
                      <div className="input-logo">
                        <input {...input} type="email" />
                        <PersonIcon className="login-icon"/>
                        </div>
                        {meta.error && meta.touched && (
                          <span className="admin-required-error">{meta.error}</span>
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
                        <div className="input-logo">
                        <input
                          {...input}
                          type="password"
                        />
                       <LockIcon className="login-icon"/>
                        </div>
                        {meta.error && meta.touched && (
                          <span className="admin-required-error">{meta.error}</span>
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
            <div style={{marginTop:"2rem"}}>Forgot Password?</div>
          </div>
          <div className="admin-login-design">
            <h2>Welcome to the Admin Page</h2>
            <p>Login with Email-Id and secured Password.</p>
            <p style={{marginTop:"15rem",display:"flex",alignItems:"center"}}>Copyright<span style={{marginLeft:".2rem",
            marginRight:".2rem",fontSize:"1rem"}}>&#169;</span>2022 Medipharm.All Rights Reserved.</p>
          </div>
        </div>
        
      </div>
    );
}

export default AdminLogin;
