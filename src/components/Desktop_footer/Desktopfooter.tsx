import "./Desktopfooter.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

const footerMenu = [
    {
        mainHeading: 'Company',
        subHeading: ['About MediPharm',
            'Customers Speak',
            'In the News',
            'Career',
            'Terms and Conditions',
            'Privacy Policy',
            'Fees and Payments Policy',
            'Shipping and Delivery Policy',
            'Return, Refund and Cancellation Policy',
            'Contact']
    },
    {
        mainHeading: 'Shopping',
        subHeading: ['Browse by A-Z',
            'Browse by Manufacturers',
            'Health Articles',
            'Offers / Coupons',
            'FAQs']
    },
    {
        mainHeading: 'Social',
        subHeading: ['Patients Alike',
            'Facebook',
            'Twitter',
            'LinkedIn',
            'Youtube',
            'Refer & Earn']
    }

]
const Desktopfooter = () => {
    const [showFooter, setShowFooter] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });
    function useWindowSize() {
        useEffect(() => {

            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
                if (window.innerWidth >= 993) {
                    setShowFooter(true);
                    setSelectedIndex(-1);
                }
                else {
                    setShowFooter(false);
                }
            }

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);

        }, []);
        return windowSize;
    }
    useWindowSize();
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="desktop-footer-container">
            {footerMenu.map((item, index: number) => {
                return (<div key={index} className="col-lg-3 col-md-12 col-sm-12 items-position">
                    <li style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }} onClick={(e) => {
                        if (selectedIndex ===index)
                            setSelectedIndex(-1)
                        else {

                            setSelectedIndex(index);
                        }
                        
                    }}>{item.mainHeading}
                        <i className={showFooter || selectedIndex === index  ? "fas fa-chevron-down rotate" : "fas fa-chevron-down"}></i></li>
                    <li style={showFooter || selectedIndex === index ? { display: "flex",lineHeight:"2rem"} : { display: "none" }} >{item.subHeading.join('\n')}</li>
                </div>);
            })}
            <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center ">
                <div className="subscription-box">
                    <h6>Subscribe to Our NewsLetter</h6>
                    <p>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</p>
                    <input type="text" placeholder="Enter your Email Id"></input>
                    <input type="submit" value="Proceed"></input>
                </div>
            </div>
        </div>);
}
export default Desktopfooter;