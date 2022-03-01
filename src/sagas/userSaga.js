import { takeEvery, call, put, all } from 'redux-saga/effects'

import history from '../history'

import * as types from '../actiontypes/actionTypes'
import * as service from '../services/UserService'
import * as actions from '../actions/userActions'
import * as alert from '../actions/alertActions'

function* login({ creds }) {
    try {
        const user = yield call(service.login, creds)
        yield put(actions.userLoggedIn(user))
        yield put(alert.setAlertAction({
            text: user.message,
            color: 'success'
        }))
        history.push('/')
    } catch (e) {
        yield put(alert.setAlertAction({
            text: e.msg,
            color: 'danger'
        }))
    }
}

function* logout() {
    yield call(service.logout)
    yield put(actions.userLoggedOutAction())
    history.push('/loginclient')
}

function* watchLoginUser() {
    yield takeEvery(types.LOGIN_USER, login)
}

function* watchLogoutUser() {
    yield takeEvery(types.LOGOUT_USER, logout)
}

export function* userSaga() {
    yield all([
        watchLoginUser(),
        watchLogoutUser()
    ])
}