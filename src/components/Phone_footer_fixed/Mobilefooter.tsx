import React from "react";
import "./Mobilefooter.css";
import {
    Link
  } from "react-router-dom";
const footerData=[
    {
        footerName:"Home",
        footerIcon:<Link to="/"><i className="fas fa-home" style={{color:"black",fontSize:"1.5rem"}}></i></Link>,
    },
    {
        footerName:"Orders",
        footerIcon:<i className="fad fa-bags-shopping" style={{color:"green",fontSize:"1.5rem"}}></i>,
    }
    ,
    {
        footerName:"Membership",
        footerIcon:<i className="fas fa-notes-medical" style={{color:"orange",fontSize:"1.5rem"}}></i>,
    }
    ,
    {
        footerName:"Offers",
        footerIcon:<i className="fal fa-badge-percent" style={{color:"red",fontSize:"1.5rem"}}></i>,
    }
    ,
    {
        footerName:"Account",
        footerIcon:<Link to="/login"><i className="fas fa-user-circle" style={{color:"#33aeb1",fontSize:"1.5rem"}}></i></Link>,
    }
]
const Mobilefooter=()=>
{
    return(<div className="mobile-footer-container">
        {footerData.map((item,index)=>
        {
            return(<div className="footer-content-box" key={index}>
            <div className="footer-content-icon">{item.footerIcon}</div>
            <div className="footer-content-heading">{item.footerName}</div>
            </div>)
        })}
        
    </div>);
}
export default Mobilefooter;
