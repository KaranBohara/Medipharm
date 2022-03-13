import { takeEvery, call, put, fork, all } from 'redux-saga/effects';
import * as actions from '../actions/productActions';
import apiCollection from '../api/api';

function* getProducts() {
  try {
    const result = yield call(apiCollection.getProduct);
    yield put(actions.getProductsSuccess(result.data.data));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetProductsRequest() {
  yield takeEvery(actions.Types.GET_PRODUCTS_REQUEST, getProducts);
}
export function* productSaga()
{
  yield all([watchGetProductsRequest()]);
}
