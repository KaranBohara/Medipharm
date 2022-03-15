import { all } from 'redux-saga/effects'

import { userSaga } from './userSaga'
import { productSaga } from './productSaga'
import { cartSaga } from './cartSaga'

function* rootSaga() {
    yield all([
        userSaga(),
        productSaga(),
        cartSaga(),
    ])
}

export default rootSaga