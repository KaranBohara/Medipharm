import React, { useState } from "react";
import { Form, Field } from 'react-final-form';
import "./Filtertaskbar.css";
import categoryDataFilter from "./medicines.json";
import productsCategorydata from "../../Navbar/product.json"
const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values: any) => {
    await sleep(300)
    console.log(values);

}
const Categoriestaskbar = () => {
    return (
        <div className="filter-container">
            <div className="wrapper-container">
            <div className="filter-header">Filters</div>
            <Form onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="filter-heading-box">Availability</div>
                        <div className="filter-content-box">
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                        </div>
                        <div className="filter-heading-box">Categories</div>
                        <div className="filter-content-box">
                            <Field name="searchbar" component="input" type="search" placeholder="Search Category" />
                        </div>
                        <div className="filter-content-box">
                            <div className="filter-checkboxes">
                                <Field name="category" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                        </div>
                        <div className="filter-heading-box">Manufacturers</div>
                        <div className="filter-content-box">
                            <Field name="searchbar" component="input" type="search" placeholder="Search Manufacturer" />
                        </div>
                        <div className="filter-content-box">
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                        </div>
                        <div className="filter-heading-box">Brand</div>
                        <div className="filter-content-box">
                            <Field name="searchbar" component="input" type="search" placeholder="Search Brand" />
                        </div>
                        <div className="filter-content-box">
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                            <div className="filter-checkboxes">
                                <Field name="availability" component="input" type="checkbox" />
                                <label style={{ paddingLeft: ".5rem", fontSize: ".9rem" }}>Exclude out of stock</label>
                            </div>
                        </div>
                        <div className="filter-heading-box">Price</div>
                        <div className="filter-content-box">
                            <div className="filter-checkboxes">
                                <Field name="price" component="input" type="range" min="10" max="100" value="50" />
                            </div>
                        </div>
                        <div className="filter-heading-box">Discount</div>
                        <div className="filter-content-box">
                            <div className="filter-checkboxes">
                                <Field name="discount" component="input" type="range" min="75" max="1000" value="50" />
                            </div>
                        </div>
                    </form>
                )} />
        </div>
        </div>);
}
export default Categoriestaskbar;