import { GET_PRODUCTS_SUCCESS,GET_PRODUCTBYID_SUCCESS } from "../actiontypes/actionTypes";
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from '../actiontypes/actionTypes';

const initialState = {
  items: [],
  addedItems:[],
  wishlistItems:[],
  total: 0,
};

export const productsReducer = (state = initialState, action) => {
    if(action.type===GET_PRODUCTBYID_SUCCESS){
      return {
        ...state,
        items:action.payload.items
      }
    }
    if(action.type=== GET_PRODUCTS_SUCCESS){
      return {
        ...state,
        items: action.payload.items,
      }
    }
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.PId === action.id);
        let discountedPrice=(addedItem.Price-((addedItem.Price*addedItem.Discount)/100));
       let existed_item= state.addedItems.find(item=> action.id === item.PId)
       if(existed_item)
       {
        addedItem.quant += 1 
           return{
              ...state,
               total: state.total + Math.round(discountedPrice),
                }
      }
       else{
        addedItem.quant = 1;
          let newTotal = state.total + Math.round(discountedPrice);
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal,
          }
          
      }
  }
  if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.PId)
      let new_items = state.addedItems.filter(item=> action.id !== item.PId)
      let discountedPrice=(itemToRemove.Price-((itemToRemove.Price*itemToRemove.Discount)/100));
      let newTotal = state.total - (Math.round(discountedPrice) * itemToRemove.quant)
      return{
          ...state,
          addedItems: new_items,
          total: newTotal,
      }
  }
  if(action.type=== ADD_QUANTITY){
      let addedItem = state.addedItems.find(item=> item.PId === action.id);
      let discountedPrice=(addedItem.Price-((addedItem.Price*addedItem.Discount)/100));
        addedItem.quant += 1 
        let newTotal = state.total + Math.round(discountedPrice);
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedItem = state.addedItems.find(item=> item.PId === action.id) 
      let discountedPrice=(addedItem.Price-((addedItem.Price*addedItem.Discount)/100));
      if(addedItem.quant === 1){
          let new_items = state.addedItems.filter(item=>item.PId !== action.id)
          let newTotal = state.total -Math.round(discountedPrice);
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quant -= 1
          let newTotal = state.total - Math.round(discountedPrice);
          return{
              ...state,
              total: newTotal
          }
      }
      
  }
  if(action.type===ADD_TO_WISHLIST){
    let addedItem = state.items.find(item=> item.PId === action.id);
       let existed_item= state.wishlistItems.find(item=> action.id === item.PId)
       if(existed_item)
       {
           return{
              ...state,
              msg:'Item already added to WishList',
                }
      }
       else{
          return{
              ...state,
              wishlistItems: [...state.wishlistItems, addedItem],
              msg:'Item added to WishList',
          }
          
      }
  }
  if(action.type === REMOVE_FROM_WISHLIST){
    let new_items = state.wishlistItems.filter(item=> action.id !== item.PId)
    return{
        ...state,
        wishlistItems: new_items,
        msg: 'Items removed from WishList',
    }
}
  if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
  }

  if(action.type=== 'SUB_SHIPPING'){
      return{
          ...state,
          total: state.total - 6
      }
}
  
else{
  return state
  }
};