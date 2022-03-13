import { combineReducers } from 'redux'

import { alertReducer } from './alertReducer'
import { userReducer } from './userReducer'
import {productsReducer} from './productsReducer'

export default combineReducers({
    alert: alertReducer,
    user: userReducer,
    product: productsReducer,
})