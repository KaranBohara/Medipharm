import { Types } from '../actions/productActions';

const initialState = {
  items: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_PRODUCTS_LOADING:
      return {
        ...state,
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