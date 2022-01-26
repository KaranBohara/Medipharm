import React,{useState,useEffect} from 'react';
import "../styles/AddProductDetails.css";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from "react-toastify";


const EditProduct = (props) => {
    const history=useHistory();
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch(`https://medpharma-api.herokuapp.com/admin/product/${props.currentId}`,
    {
      method:'Get',
      headers:
      {
        'Content-Type':'application/json'
      }
    })
        .then(response => response.json())
        .then((val)=>{
          setData(val)
        })})
    // const onSubmit = async values => {
        // await fetch("https://medpharma-api.herokuapp.com/admin/addproducts", {
        //     method: "POST",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(values),
        //   })
        //   .then((response)=>response.json())
        //     .then((data) => {        
        //       if(data.success)
        //       {
        //       toast.success(data.message)
        //       }
        //       else
        //       {
        //         toast.error(data.message)
        //       }
        //       history.push('/admin/dashboard/products')
        //     })
        //     .catch((e) => {
        //       console.log(e);
        //     });
        // };
    return (
        <div className='add-product-form'>
        <ToastContainer draggable={false} position="top-center" transition={Zoom} autoClose={3000} />
          <form>
          <div className='input-wrapper'>
            <div className='sub-input'>
            <label>Product Name</label>
              <input name="name" type="text" value={data.name}/>
            </div>
            <div className='sub-input'>
            <label>Category</label>
              <select name="category" id='category'>
                <option selected value={data.category}>{data.category}</option>
                <option value="Aayush">Aayush</option>
                <option value="Covid Essentials">Covid Essentials</option>
                <option value="Eyewear">Eyewear</option>
                <option value="Mom & Baby">Mom & Baby</option>
                <option value="Fitness">Fitness</option>
                <option value="Devices">Devices</option>
                <option value="Surgicals">Surgicals</option>
                <option value="Treatment">Treatment</option>
              </select>
            </div>
            </div>
            <div className='input-wrapper'>
            <div className='sub-input'>
            <label>Manufacturer</label>
              <input name="manufacturer" type="text" value={data.manufacturer}/>
            </div>
            <div className='sub-input'>
            <label>Price (Rs.)</label>
              <input name="price" type="text" value={data.price}/>
            </div>
            </div>
            <div className='input-wrapper'>
            <div className='sub-input'>
            <label>Discount(%)</label>
              <input name="discount" type="text" value={data.discount} />
            </div>
            <div className='sub-input'>
            <label>Availability</label>
              <select name="stock" id="stock">
              <option selected value={data.stock}>{data.stock}</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            </div>
            <div>
            <label>Description</label>
              <input name="description" value={data.description} type="textarea" />
            </div>
            <div>
            <label>Image URL</label>
              <input name="imageURL" value={data.imageURL} type="text"  />
            </div>
            <div className="product-buttons">
              <button className='add-product-button'>
                Submit
              </button>
              <button
                type="button"
                onClick="reset"
                className='reset-product-button'
              >
                Reset
              </button>
            </div>
          </form>
      </div>);
};

export default EditProduct;
