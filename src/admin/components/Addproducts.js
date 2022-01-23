import React,{useEffect,useState} from 'react';
import {Table} from "react-bootstrap";
import "../styles/Products.css";
const Addproducts=()=> {
  const[products,setProducts]=useState("");
  useEffect(() => {
    const url = "https://medpharma-api.herokuapp.com/admin/productslist";
    const fetchData = async () => {
      try {
        const response = await fetch(url,{
          method: "GET",
          headers: {
          "content-type": "application/json",
                   },
                  });
        const product = await response.json();
        setProducts(product);
        console.log(product);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
}, []);
    return (
        <div className='products-admin-page'>
          <Table striped bordered hover className="mt-3">
           <thead>
             <tr>
              <th>PID</th>
              <th>Product</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Manufacturer</th>
              <th>Price</th>
              <th>Discount</th>
             </tr>
           </thead>
           <tbody>
          {products.map((val,index)=>
            {
              return(
                <tr key={index}>
                <td>{val.productId}</td>
                <td><img src={val.imageURL} alt={val.name} width="60px" height="60px"/></td>
                <td>{val.name}</td>
                <td>{val.stock}</td>
                <td>{val.category}</td>
                <td>{val.manufacturer}</td>
                <td>Rs.{val.price}</td>
                <td>Rs.{val.discount}</td>
                </tr>
              )
            })}
           </tbody>
           </Table>
        </div>
    )
}

export default Addproducts;
