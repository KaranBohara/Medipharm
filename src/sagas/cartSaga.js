import { take, put, call, select, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions/cartActions';
import apiCollection from '../api/api';

function* getCart({PId}) {
  console.log(PId);
  try{
  const item= yield call(apiCollection.getProductById,PId)
  yield put(actions.fetchCart(item.data.data));
  }
  catch(err)
  {
    console.log(err);
  }
}

function* watchCart (){
  yield takeEvery(actions.Types.ADD_TO_CART,getCart)
}

export function* cartSaga(){
  yield all([watchCart()])
}