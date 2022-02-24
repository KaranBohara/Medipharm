import React,{useEffect,useState} from 'react';
import {Table} from "react-bootstrap";
import "../styles/Products.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import AddProductDetails from './AddProductDetails';
import EditProduct from './EditProduct';
import {Modal} from "react-bootstrap"
import Medilogo from "../assets/medicine.png";
import LoadingImage from "../assets/loading.gif";

const handleDelete=(id)=>
   {
    fetch(`http://localhost:5000/product/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(window.location.reload(true))
   }

const ProductsList=()=> {
  const [loading, setLoading] = useState(true);
  const [currentId,setCurrentId]=useState(0);
  const [products,setProducts]=useState([]);
  const [show,setShow] = useState(false);
  const [editModal,setEditModal]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () =>  setShow(true);
  const handleEdit=(id)=>
  {
  console.log(id);
  setEditModal(true);
  setCurrentId(id)
  }
  const handleEditClose=()=>setEditModal(false);
  useEffect(() => {
    const url = "http://localhost:5000/product";
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
      <Modal
      show={editModal}
      size="lg"
      onHide={handleEditClose}
      backdrop="static"
      keyboard={false}
      dialogClassName="my-modal"
    >
      <Modal.Header>
        <Modal.Title>
        <div className='modal-title'>
        <img src={Medilogo} alt='medilogo' width="30px" height="30px"/>
        <span style={{marginLeft:".5rem",fontSize:"1.2rem",color:"#006692"}}>Edit Product Details</span>
        <CloseIcon className='close-icon' onClick={handleEditClose}/>
        </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <EditProduct currentId={currentId}/>
      </Modal.Body>
    </Modal>
    <div className='col-12 d-flex'>
        <div className='add-product' onClick={handleShow}>
        <AddIcon className='add-icon' />
        <span style={{marginLeft:".5rem"}}>Add Product</span>
        </div>
        <div className='add-product' onClick={handleShow}>
        <AddIcon className='add-icon' />
        <span style={{marginLeft:".5rem"}}>Add Category</span>
        </div>
        <div className='add-product' onClick={handleShow}>
        <AddIcon className='add-icon' />
        <span style={{marginLeft:".5rem"}}>Add Manufacturer</span>
        </div>
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
           {products.map((val)=>
            {
            return(
              <tr key={val.productId}>
              <td>{val.productId}</td>
              <td><img src={val.imageURL} alt={val.name} width="60px" height="60px"/></td>
              <td>{val.name}</td>
              <td>{val.stock}</td>
              <td>{val.category}</td>
              <td>{val.manufacturer}</td>
              <td>Rs.{val.price}</td>
              <td>{val.discount}%</td>
              <td><DeleteForeverIcon onClick={()=>handleDelete(val.productId)} className='delete-icon'/></td>
              <td><EditIcon onClick={()=>handleEdit(val.productId)} className='edit-icon'/></td>
              </tr>)
            }
    )}
           </tbody>
           </Table>
           {loading?<div style={{width:"100%",marginTop:"5rem"}}><img src={LoadingImage} width="65rem" height="65rem" alt="loading"/></div>:""}
        </div>
    )
}

export default ProductsList;
