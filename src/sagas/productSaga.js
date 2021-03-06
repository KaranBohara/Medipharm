import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actions from '../actions/productActions';
import { GET_PRODUCTS_REQUEST,GET_PRODUCTBYID_REQUEST } from '../actiontypes/actionTypes';
import apiCollection from '../api/api';

function* getProducts() {
  try {
    const result = yield call(apiCollection.getProduct);
    yield put(actions.getProductsSuccess(result.data.data));
  } catch (error) {
    console.error(error);
  }
}
function* getProductById({id}) {
try{
  const result= yield call(apiCollection.getProductById,id);
  yield put(actions.getProductSuccess(result.data.data));
}
catch(err){
  console.log(err);
}
}
function* watchGetProductsRequest() {
  yield takeEvery(GET_PRODUCTS_REQUEST, getProducts);
}
function* watchGetProductRequest() {
  yield takeEvery(GET_PRODUCTBYID_REQUEST, getProductById);
}
export function* productSaga()
{
  yield all([watchGetProductsRequest(),watchGetProductRequest()]);
}
