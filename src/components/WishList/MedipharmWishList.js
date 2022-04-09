import React from 'react';
import {connect} from "react-redux";
import Navbartop from "../Navbar/Navbartop";
import EmptyWishList from './EmptyWishList';
import WishList from './WishList';

const MedipharmWishList = (props) => {
    const { product } = props;
  return (
    <div>
    <div>
      <Navbartop/>
      </div>
      <div className='container-fluid p-0 mt-1 d-flex'>
      {product.wishlistItems.length? <div className='col-12'><WishList/></div>:<div className='cart-background'><EmptyWishList/></div>}
      </div>
</div>
  )
}

export default connect(
    ({product }) => ({product })
  ) (MedipharmWishList);