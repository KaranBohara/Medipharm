export const Types = {
    GET_PRODUCTS_REQUEST: 'GET_PRODUCTS_REQUEST',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  };
  
  export const getProductsRequest = () => ({
    type: Types.GET_PRODUCTS_REQUEST
  });
  
  export const getProductsSuccess = items => ({
    type: Types.GET_PRODUCTS_SUCCESS,
    payload: { items }
  });