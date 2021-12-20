import { Form, Field } from 'react-final-form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import { useHistory } from 'react-router-dom';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const Activate = () => {
    const history=useHistory();
    const onSubmit = async (values) => {
        console.log(values);
        // fetch("https://medpharma-api.herokuapp.com/users/signup", {
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
      
        fetch("http://localhost:5000/users/activate", {
          method:"PATCH",
          headers:{
          "content-type":"application/json",
          },
          body: JSON.stringify(values)
      
        }).then((res)=>res.json())
          .then((data)=>{
             console.log(data);
             history.push("/login");
        }).catch(e=>{
          console.log(e)
        })
      };
    return (
        <div className="login-container">
            <div className="image-box"><img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="login"></img></div>
            <div className="login-box">
                <div className="login-heading"><h4>Activate your account</h4>
                    <p>Enter the verification code sent to your email id to activate your account</p>
                </div>
                <div className="login-content-body">
                    <Form onSubmit={onSubmit} 
                    validate={values => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required'
          }
        if (!values.code) {
          errors.code = 'Required'
        }
        return errors
      }}
                      render={({handleSubmit,submitting})=>
                      (
                        <form onSubmit={handleSubmit}>   
                        <Field name="email" >
                     {({ input,meta}) => (
                         <div className="mobile-label">
                         <p>E-mail</p>
                             <div className="name-tab"> 
                             <input {...input} type="email" id="email" />
                             {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>}
                                     </div>
                                     </div>
                     )}
                     </Field>
                            <Field name="code" >
                            {({input,meta})=>
                            <div className="mobile-label">
                              <p>Verification code</p>
                              <div className="name-tab">
                              <input {...input} />
                              {meta.error && meta.touched && <span style={{color:"rgb(224, 1, 1)"}}>{meta.error}</span>}
                              </div>  
                            </div>
                            }
                            </Field>
                            
                            <div className="button-login">
                         <button type="submit" disabled={submitting}>
                            Activate Account
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
export default Activate;