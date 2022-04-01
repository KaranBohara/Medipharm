import React from "react";
import apiCollection from "../../../admin/api/api";
import {connect} from "react-redux";
import { getProductsRequest } from "../../../actions/productActions";
import "./Filtertaskbar.css";
import { Checkbox } from 'antd';
import { Slider} from 'antd';
const CheckboxGroup = Checkbox.Group;

const FilterTaskbar = (props) => {
    const {getProductsRequest,product}=props;
    const [checkedList, setCheckedList] = React.useState([]);
    const [stock,setStock]=React.useState([]);
    const [brand,setBrand]=React.useState([]);
    const getStockStatus=()=>
    {
        apiCollection.getStatus()
        .then(response=>
         {
           let status=[];
           const myMed=response.data.data;
           myMed.forEach(element => {
               status.push(element.Status);
           });
           setStock(status);
         })
    }
    const getManufacturers=()=>
    {
        let manufacturer=[];
        product.items.forEach(element=>
            {
                manufacturer.push(element.Manufacturer);
            })
            setBrand(manufacturer);
    }
    React.useEffect(() => {
        getStockStatus();
        getProductsRequest();
        getManufacturers();
    }, [stock]);
    const onChange=(list)=>
    {
        setCheckedList(list)
        console.log(checkedList);
    }
    const handleMin=(value)=>
    {
        console.log(value);
    }
    const handleMax=(value)=>
    {
        console.log(value);
    }
    return (
        <div className="filter-container">
        <div className="col-12 ">
        <div className="col-12 filter-header">Filters</div>
        <div className="col-12 filter-heading-box">Manufacturers</div>
        <div className="col-12 filter-content-box" style={{height:"4rem"}}>
        <CheckboxGroup options={brand} value={checkedList} onChange={onChange} />
        </div>
        <div className="col-12 filter-heading-box">Availability</div>
        <div className="col-12 filter-content-box" style={{height:"3rem"}}>
        <CheckboxGroup options={stock} value={checkedList} onChange={onChange} />
        </div>
        <div className="col-12 filter-heading-box">Price</div>
        <div className="col-12 filter-content-box">
        <Slider range defaultValue={[1, 50000]} min={1} max={50000} onChange={handleMin} onAfterChange={handleMax}/>
        </div>
        <div className="col-12 filter-heading-box">Discount</div>
        <div className="col-12 filter-content-box">
        <Slider range defaultValue={[1, 70]} min={1} max={70} onChange={handleMin} onAfterChange={handleMax}/>
        </div>
        </div> 
        </div>);
}
export default connect(
    ({ product }) => ({ product }),
    {
      getProductsRequest,
    }
  )(FilterTaskbar);