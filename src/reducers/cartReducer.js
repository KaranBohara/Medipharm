import { Types } from '../actions/cartActions';

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
   case Types.CART_FETCH_SUCCESS:
     return{
       ...state,
       items:[...state.items,action.payload.items]
     }
    default:
      return state;
  }
};