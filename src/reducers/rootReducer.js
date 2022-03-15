import { combineReducers } from 'redux'

import { alertReducer } from './alertReducer'
import { userReducer } from './userReducer'
import {productsReducer} from './productsReducer'
import { cartReducer } from './cartReducer'

export default combineReducers({
    alert: alertReducer,
    user: userReducer,
    product: productsReducer,
    cart:cartReducer,
})