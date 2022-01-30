import React from 'react';
import { Form, Field } from 'react-final-form';
import "../styles/AddProductDetails.css";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from "react-toastify";

const AddProductDetails = () => {
    const history=useHistory();
    const onSubmit = async values => {
        await fetch("http://localhost:5000/admin/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(values),
          })
          .then((response)=>response.json())
            .then((data) => {        
              if(data.success)
              {
              toast.success(data.message)
              }
              else
              {
                toast.error(data.message)
              }
              history.push('/admin/dashboard/products')
            })
            .catch((e) => {
              console.log(e);
            });
        };
  return (
      <div className='add-product-form'>
      <ToastContainer draggable={false} position="top-center" transition={Zoom} autoClose={3000} />
      <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <div className='sub-input'>
          <label>Product Name</label>
            <Field
              name="name"
              component="input"
              type="text"
            />
          </div>
          <div className='sub-input'>
          <label>Category</label>
            <Field name="category" component="select">
              <option>Category</option>
              <option value="Aayush">Aayush</option>
              <option value="Covid Essentials">Covid Essentials</option>
              <option value="Eyewear">Eyewear</option>
              <option value="Mom & Baby">Mom & Baby</option>
              <option value="Fitness">Fitness</option>
              <option value="Devices">Devices</option>
              <option value="Surgicals">Surgicals</option>
              <option value="Treatment">Treatment</option>
            </Field>
          </div>
          </div>
          <div className='input-wrapper'>
          <div className='sub-input'>
          <label>Manufacturer</label>
            <Field
              name="manufacturer"
              component="input"
              type="text"
            />
          </div>
          <div className='sub-input'>
          <label>Price (Rs.)</label>
            <Field name="price" component="input" type="text" />
          </div>
          </div>
          <div className='input-wrapper'>
          <div className='sub-input'>
          <label>Discount(%)</label>
            <Field name="discount" component="input" type="text"  />
          </div>
          <div className='sub-input'>
          <label>Availability</label>
            <Field name="stock" component="select">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Field>
          </div>
          </div>
          <div>
          <label>Description</label>
            <Field name="description" component="textarea" />
          </div>
          <div>
          <label>Image URL</label>
            <Field name="imageURL" component="input" type="text"  />
          </div>
          <div className="product-buttons">
            <button className='add-product-button'>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              className='reset-product-button'
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
    </div>);
};

export default AddProductDetails;
