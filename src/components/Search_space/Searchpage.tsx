import React,{useState} from "react";
import {Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Searchpage.css";
import Medicines from "../Products_page/Filter_component/medicines.json";
let bestPrice = 0;
const Searchpage=()=>
{
    const [mobileSearch,setmobileSearch]=useState('');
    return(<div className="search-product-box">
        <div className="mobile-search-tab" style={{backgroundColor:"#F3F7FB"}}>
            <div className="col-1 d-flex justify-content-center align-items-center"><Link to="/"><i className="fal fa-long-arrow-left"></i></Link></div>
            <div className="col-11"> <div className="search-box">
                    <input type="search" onChange={(e)=>{
                       setmobileSearch(e.target.value)
                    }} placeholder="Search here..."></input>
                </div></div>
        </div>
        <div className={mobileSearch!==''?"search-results-box":"search-box-hidden"}>
        {Medicines.map((item)=>
        {
            bestPrice = item.Price - ((item.Discount * item.Price) / 100);
        return(<div className="row" style={{border:"1px solid rgb(240, 240, 240)"}}>
            <div className="col-3 d-flex align-items-center justify-content-center" style={{height:"9rem",borderRight:"1px solid rgb(240, 240, 240)"}}><img src={item.src}></img></div>
            <div className="col-9">
                <div className="row"><div className="product-name" style={{marginTop:"1rem",height:"2.5rem"}}>{item.MedicineName}</div></div>
                <div className="row"><div className="product-manufacturer" style={{marginTop:".3rem",height:"1.3rem"}}>{item.Manufacturers}</div></div>
                <div className="row"><div className="product-bestprice" style={{marginTop:".3rem",height:"1.3rem"}}>Rs.{bestPrice}</div></div>
                <div className="row shopping-bag"><img src="https://www.linkpicture.com/q/add-to-basket.png" ></img></div>
            </div>
        </div>);})
}
</div>
    </div>
    );
}
export default Searchpage;