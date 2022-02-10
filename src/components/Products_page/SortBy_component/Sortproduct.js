import React, { useState } from "react";
import "./Sortproduct.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const sortHeadings=["Popularity","High to Low","Low to High","Discount"]
const Sortproducts=()=>
{
    const [selected,setSelected]=useState(0);
    
    return(
    <div className="sort-product-container">
        {sortHeadings.map((item,index)=>{
            return(<div className="sort-option-box" onClick={()=>{setSelected(index)}} key={index} style={selected===index?{border:"2px solid green"}:{border:"1px solid rgba(92, 92, 92,0.4)"}}>{item}</div>);
        })}
    </div>);
}
export default Sortproducts;