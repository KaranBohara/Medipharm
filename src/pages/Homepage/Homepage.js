import React from "react";
import "./Homepage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel1 from '../../assets/kb1.png';
import Carousel2 from '../../assets/kb2.png'
import Homecarousel from "../../components/Home_slider/Homecarousel";
import Shopbycategory from "../../components/Shop_by_category_products/Shopbycategory";
import Navbartop from "../../components/Navbar/Navbartop";
import Categoryslider from "../../components/Products_page/Category_multislider/Categoryslider";
import Desktopfooter from "../../components/Desktop_footer/Desktopfooter";
const carouseData=[
    {
        mainHeading:"FREE HOME DELIVERY",
        subHeading:"Flat 25% off + 5% Medipharm + extra 5% savings on your orders.",
        imagePath:Carousel1,
        width:"100%",
        height:"100%",
        button:"Order Now"
    },
    {
        mainHeading:"Book lab tests from home",
        subHeading:"Get flat 50% off on Medipharm popular health checkups.",
        imagePath:Carousel2,
        width:"100%",
        height:"50%",
        button:"Book Now"
    },
    {
        mainHeading:"FREE HOME DELIVERY",
        subHeading:"Flat 25% off + 5% Medipharm + extra 5% savings on your orders.",
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
        <div className="container-fluid hide-component">
        <Categoryslider/>
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
        <div>
             <Desktopfooter/>
        </div>
    </div>);
}
export default Homepage;