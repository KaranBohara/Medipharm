import { Form, Field } from 'react-final-form';
import { Link} from "react-router-dom";
import { useHistory } from 'react-router-dom'; 
const Signup = () => {
  const history=useHistory();
  const onSubmit = async (values) => {
    console.log(values);
    fetch("https://medpharma-api.herokuapp.com/users/signup", {
      method:"POST",
      headers:{
      "content-type":"application/json",
      "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(values)
  
    }).then((res)=>res.json())
      .then((data)=>{
         console.log(data);
         history.push("/login");
    }).catch(e=>{
      console.log(e)
    })
  
    // fetch("http://localhost:5000/users/signup", {
    //   method:"POST",
    //   headers:{
    //   "content-type":"application/json",
    //   },
    //   body: JSON.stringify(values)
  
    // }).then((res)=>res.json())
    //   .then((data)=>{
    //      console.log(data);
    //      history.push("/login");
    // }).catch(e=>{
    //   console.log(e);
    // })
  
  };
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
        if (!values.name) {
          errors.name = 'Required'
        }
        if (!values.email) {
          errors.email = 'Required'
        }
        if (!values.password) {
          errors.password = 'Required'
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = 'Required'
        } else if (values.password !== values.confirmPassword) {
          errors.confirmPassword = 'Password must match'
        }
        return errors
      }}
                      render={({handleSubmit,submitting})=>
                      (
                        <form onSubmit={handleSubmit}>   
                            <Field name="name" >
                            {({input,meta})=>
                            <div className="mobile-label">
                              <p>Name</p>
                              <div className="name-tab">
                                <input {...input} type="text" className='input-tab' />
                                {meta.error && meta.touched && <span className='required-error'>{meta.error}</span>}      
                              </div>  
                            </div>
                            }
                            </Field>
                            <Field name="email" >
                     {({ input,meta}) => (
                         <div className="mobile-label">
                         <p>E-mail</p>
                             <div className="name-tab"> 
                             <input {...input} type="email" id="email" className='input-tab'/>
                             {meta.error && meta.touched && <span className='required-error'>{meta.error}</span>}
                                     </div>
                                     </div>
                     )}
                     </Field>
                     <Field name="password">
                     {({ input,meta}) => (
                         <div className="mobile-label">
                          <p>Password</p>
                          <div className="name-tab"><input {...input} className='input-tab' type="password" /> 
                          {meta.error && meta.touched && <span className='required-error'>{meta.error}</span>} 
                         </div>
                         </div>
                     )}
                     </Field>
                     <Field name="confirmPassword">
                     {({ input,meta}) => (
                         <div className="mobile-label">
                          <p>Confirm Password</p>
                          <div className="name-tab"><input {...input} className='input-tab' type="password" />
                          {meta.error && meta.touched && <span className='required-error'>{meta.error}</span>}
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