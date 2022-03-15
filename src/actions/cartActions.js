export const Types={
  ADD_TO_CART : 'ADD_TO_CART',
  CART_FETCH_SUCCESS:'CART_FETCH_SUCCESS'
}
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
// export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
// export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

export const addToCart=(PId) =>({
    type: Types.ADD_TO_CART,
    PId
  });

export const fetchCart=(items)=>({
  type:Types.CART_FETCH_SUCCESS,
  payload:{items}
})
// export const removeFromCart=(productId)=> {
//   return {
//     type: REMOVE_FROM_CART,
//     productId
//   };
// }

// export const checkout=() => {
//   return {
//     type: CHECKOUT_REQUEST
//   };
// }

// export const checkoutSuccess=(cart) => {
//   return {
//     type: CHECKOUT_SUCCESS,
//     cart
//   };
// }

// export const checkoutFailure=(error)=>  {
//   return {
//     type: CHECKOUT_FAILURE,
//     error
//   };
// }