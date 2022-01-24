import React,{useEffect,useState} from 'react';
import {Table} from "react-bootstrap";
import "../styles/Products.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import {Modal} from "react-bootstrap"
import Medilogo from "../assets/medicine.png";
import CloseIcon from '@mui/icons-material/Close';
import AddProductDetails from './AddProductDetails';

const ProductsList=()=> {
  const [loading, setLoading] = useState(true);
  const[products,setProducts]=useState([]);
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
useEffect(() => {
  if (products.length > 0) {
    setLoading(false);
  }
}, [products]);

if (loading) return <div className="spinner"><button className="btn btn-lg" type="button">
<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
Loading...
</button></div>
    return (
        <div className='products-admin-page'>
        <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="my-modal"
      >
        <Modal.Header>
          <Modal.Title>
          <div className='modal-title'>
          <img src={Medilogo} alt='medilogo' width="30px" height="30px"/>
          <span style={{marginLeft:".5rem",fontSize:"1.2rem",color:"#006692"}}>Add Product Details</span>
          <CloseIcon className='close-icon' onClick={handleClose}/>
          </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProductDetails/>
        </Modal.Body>
      </Modal>
        <div className='add-product' onClick={handleShow}>
        <AddIcon className='add-icon' />
        <span style={{marginLeft:".5rem"}}>Add a product</span>
        </div>
        <div className='search-products'>
        <input id="searchproduct" type="search"/>
        <button>Search</button>
        </div>
          <Table bordered hover className="mt-3">
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
              <th>Delete</th>
              <th>Edit</th>
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
              <td><DeleteForeverIcon className='delete-icon'/></td>
              <td><EditIcon className='edit-icon'/></td>
              </tr>)
            }
    )}
           </tbody>
           </Table>
        </div>
    )
}

export default ProductsList;
