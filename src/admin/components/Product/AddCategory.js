import React from 'react';
import { Form, Field } from 'react-final-form';
import "../../styles/AddProductDetails.css";
import apiCollection from '../../api/api';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from "react-toastify";

const AddCategory = () => {
    const history=useHistory();
    const onSubmit = async(values) => {
      apiCollection.addCategory(values)
      .then((data) => {        
              if(data.data.success)
              {
              toast.success(data.data.message)
              }
              else
              {
                toast.error(data.data.message)
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
        <div className='input-add-category'>
          <label style={{marginBottom:".5rem"}}>Category</label>
            <Field name="Category" component="input">
            </Field>
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
}

export default AddCategory