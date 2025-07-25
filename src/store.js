import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

import {
  productListReducer,
  productDetailReducer,
} from './reducer/ProductReducer'

import { cartReducer } from './reducer/CartReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
})

const middleware = [thunk]

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
}

const store = legacy_createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store
