import React from "react";
import "./Mobilefooter.css";
import {Link} from "react-router-dom";
const Mobilefooter=()=>
{
    return(<div className="mobile-footer-container">
          <div className="footer-content-box" >
            <div className="footer-content-icon"><Link to="/"><i className="fas fa-home" style={{color:"black",fontSize:"1.5rem"}}></i></Link></div>
            <div className="footer-content-heading">Home</div>
            </div>
            <div className="footer-content-box" >
            <div className="footer-content-icon"><i className="fad fa-bags-shopping" style={{color:"green",fontSize:"1.5rem"}}></i></div>
            <div className="footer-content-heading">Orders</div>
            </div>
            <div className="footer-content-box" >
            <div className="footer-content-icon"><i className="fas fa-notes-medical" style={{color:"orange",fontSize:"1.5rem"}}></i></div>
            <div className="footer-content-heading">Membership</div>
            </div>
            <div className="footer-content-box" >
            <div className="footer-content-icon"><i className="fal fa-badge-percent" style={{color:"red",fontSize:"1.5rem"}}></i></div>
            <div className="footer-content-heading">Offers</div>
            </div>
            <div className="footer-content-box" >
            <div className="footer-content-icon"><Link to="/loginclient"><i className="fas fa-user-circle" style={{color:"#33aeb1",fontSize:"1.5rem"}}></i></Link></div>
            <div className="footer-content-heading">Account</div>
            </div>
    </div>);
}
export default Mobilefooter;
