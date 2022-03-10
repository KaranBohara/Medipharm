import React,{ useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Products.css";
import apiCollection from '../../../api/api';
import LoadingImage from "../../../admin/assets/loading.gif";
import {Link} from "react-router-dom"
// import Medicines from "../Filter_component/medicines.json";
let bestPrice = 0;
const Products = () => {
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMedicines=()=>
    {
     apiCollection.getProduct()
    .then(response => {
     const myMed=response.data.data;
     setMedicines(myMed);
});
    };
    useEffect(() => {
        getMedicines();
        if (medicines.length > 0) {
            setLoading(false);
          }
    }, [medicines]);
    return (<div className="products-container">
    {loading?<div className="loading-container"><img src={LoadingImage} width="65rem" height="65rem" alt="loading"/></div>:""}
                {medicines.map((item, index) => {
                    bestPrice = item.Price - ((item.Discount * item.Price) / 100);
                    return (      <Link to={`/product/${item.Category}/${item.ProductName}/${item.PId}`} className="link-decoration-body" key={index}>             
                            <div className="animate__animated animate__jackInTheBox product-box">
                                <div className="discount-tab"><span style={{backgroundColor:"green",padding:".2rem",borderRadius:".2rem"}}>{item.Discount}%OFF</span></div>
                                <div className="product-image-box"><img alt="product" src={item.Image}></img></div>
                                <div className="product-name">{item.ProductName}</div>
                                <div className="product-manufacturer">{item.Manufacturer}</div>
                                <div className="product-bestprice">Rs.{bestPrice}</div>
                                <div className="product-price">Rs.{item.Price}</div>
                            </div>
                            </Link>
                    );
                })}
            </div>);
}
export default Products;