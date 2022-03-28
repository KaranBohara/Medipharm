import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actiontypes/actionTypes'
import { GET_PRODUCTS_REQUEST,GET_PRODUCTBYID_SUCCESS,GET_PRODUCTBYID_REQUEST,GET_PRODUCTS_SUCCESS } from '../actiontypes/actionTypes';
  export const getProductsRequest = () => ({
    type: GET_PRODUCTS_REQUEST
  });
  
  export const getProductsSuccess = items => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: { items }
  });

  export const getProductRequest = (id) => ({
    type: GET_PRODUCTBYID_REQUEST,
    id,
  });
  
  export const getProductSuccess = items => ({
    type: GET_PRODUCTBYID_SUCCESS,
    payload: { items }
  });

  export const addToCart= (id)=>{
      return{
          type: ADD_TO_CART,
          id
      }
  }

  export const removeItem=(id)=>{
      return{
          type: REMOVE_ITEM,
          id
      }
  }

  export const decreaseQuantity=(id)=>{
      return{
          type: SUB_QUANTITY,
          id
      }
  }

  export const increaseQuantity=(id)=>{
      return{
          type: ADD_QUANTITY,
          id
      }
  }
