import { useState,useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Products.css";
// import Medicines from "../Filter_component/medicines.json";
let bestPrice = 0;
const Products = () => {
    const [medicines, setMedicines] = useState([]);
    const getMedicines = () => {
        axios.get('http://localhost:5000/product')
.then(response => {
console.log(response.data);
const myMed=response.data;
setMedicines(myMed);
});
    };

    useEffect(() => {
        getMedicines();
    }, []);
    return (<div className="products-container">
                {medicines.map((item, index) => {
                    bestPrice = item.Price - ((item.Discount * item.Price) / 100);
                    return (                   
                            <div className="animate__animated animate__jackInTheBox product-box" key={index}>
                                <div className="discount-tab"><span style={{backgroundColor:"green",padding:".2rem",borderRadius:".2rem"}}>{item.Discount}%OFF</span></div>
                                <div className="product-image-box"><img alt="noloading" src={item.imageURL}></img></div>
                                <div className="product-name">{item.MedicineName}</div>
                                <div className="product-manufacturer">{item.Manufacturers}</div>
                                <div className="product-bestprice">Rs.{bestPrice}</div>
                                <div className="product-price">Rs.{item.Price}</div>
                                <div className="cart-button"><button type="submit">ADD TO CART</button></div>
                            </div>
                    );
                })}
            </div>);
}
export default Products;