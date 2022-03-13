import { Types } from '../actions/productActions';

const initialState = {
  items: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCTBYID_SUCCESS:
      return {
        ...state,
        items:action.payload.items
      }
    case Types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};