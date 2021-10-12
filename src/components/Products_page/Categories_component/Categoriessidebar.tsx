import React, { useState } from "react";
import productsCategorydata from "../../Navbar/product.json";
import "../Filter_component/Filtertaskbar.css";
const Filterproducts = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (<div className="categories-container" style={{ marginBottom: "3rem" }}>
    <div className="wrapper-container">
    <div className="filter-header">
      Categories
    </div>
    <div style={{ height: "15rem", overflowY: "auto" }}>
      {productsCategorydata.map((item, index: number) => {
        return (<>
          <div className="categories-menus" onClick={(e) => {
            if (selectedIndex === index)
              setSelectedIndex(-1)
            else {

              setSelectedIndex(index);
            }

          }}>
            <div className="right-icon"><i className={selectedIndex === index ? "fas fa-chevron-right half-rotate" : "fas fa-chevron-right"}></i>
            </div>
            <div className="category-name">{item.navTitle}
            </div>
          </div>
          <li style={selectedIndex === index ? { display: "flex", lineHeight: "2rem", whiteSpace: "pre", textAlign: "left", paddingLeft: "1.5rem" } : { display: "none" }} >{item.subCategories.join('\n')}</li>
        </>
        );
      })}
    </div>
  </div>
  </div>);
}
export default Filterproducts;