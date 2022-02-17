import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Products.css";
import apiCollection from '../../../api/api';
import LoadingImage from "../../../admin/assets/loading.gif";
// import Medicines from "../Filter_component/medicines.json";
let bestPrice = 0;
const Products = () => {
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMedicines=()=>
    {
     apiCollection.getProduct()
    .then(response => {
     const myMed=response.data;
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
                    bestPrice = item.price - ((item.discount * item.price) / 100);
                    return (                   
                            <div className="animate__animated animate__jackInTheBox product-box" key={index}>
                                <div className="discount-tab"><span style={{backgroundColor:"green",padding:".2rem",borderRadius:".2rem"}}>{item.discount}%OFF</span></div>
                                <div className="product-image-box"><img alt="noloading" src={item.imageURL}></img></div>
                                <div className="product-name">{item.name}</div>
                                <div className="product-manufacturer">{item.manufacturer}</div>
                                <div className="product-bestprice">Rs.{bestPrice}</div>
                                <div className="product-price">Rs.{item.price}</div>
                                <div className="cart-button"><button type="submit">ADD TO CART</button></div>
                            </div>
                    );
                })}
            </div>);
}
export default Products;