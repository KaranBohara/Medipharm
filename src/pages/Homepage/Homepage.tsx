import React from "react";
import "./Homepage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homecarousel from "../../components/Home_slider/Homecarousel";
import Shopbycategory from "../../components/Shop_by_category_products/Shopbycategory";
import Navbartop from "../../components/Navbar/Navbartop";
const carouseData=[
    {
        mainHeading:"FREE HOME DELIVERY",
        subHeading:"Flat 25% off + 5% Medipharm + extra 5% savings on your orders.Save an additional 7% over & above all promotional offers, along with a higher maximum capping.",
        imagePath:"https://i.ibb.co/kSZzZqN/kb1.png",
        width:"100%",
        height:"100%",
        button:"Order Now"
    },
    {
        mainHeading:"Book lab tests from home",
        subHeading:"Get flat 50% off on Medipharm popular health checkups.",
        imagePath:"https://i.ibb.co/d4mtQ7B/kb2.png",
        width:"100%",
        height:"50%",
        button:"Book Now"
    },
    {
        mainHeading:"FREE HOME DELIVERY",
        subHeading:"Flat 25% off + 5% Medipharm + extra 5% savings on your orders.Save an additional 7% over & above all promotional offers, along with a higher maximum capping.",
        imagePath:"https://i.ibb.co/BLjNCzS/2.png",
        width:"100%",
        height:"100%",
        button:"Order Now"
    }
]

const Homepage=()=>

{
    return(<div >
        <div>
            <Navbartop/>
        </div>
        <div>
            <Homecarousel data={carouseData[0]}/>
        </div>
        <div >
            <Shopbycategory/>
        </div>
        <div>
            <Homecarousel data={carouseData[1]}/>
        </div>
    </div>);
}
export default Homepage;