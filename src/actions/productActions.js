export const Types = {
    GET_PRODUCTS_REQUEST: 'GET_PRODUCTS_REQUEST',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTBYID_REQUEST: 'GET_PRODUCTBYID_REQUEST',
    GET_PRODUCTBYID_SUCCESS: 'GET_PRODUCTBYID_SUCCESS',
  };
  
  export const getProductsRequest = () => ({
    type: Types.GET_PRODUCTS_REQUEST
  });
  
  export const getProductsSuccess = items => ({
    type: Types.GET_PRODUCTS_SUCCESS,
    payload: { items }
  });

  export const getProductRequest = (id) => ({
    type: Types.GET_PRODUCTBYID_REQUEST,
    id,
  });
  
  export const getProductSuccess = items => ({
    type: Types.GET_PRODUCTBYID_SUCCESS,
    payload: { items }
  });
