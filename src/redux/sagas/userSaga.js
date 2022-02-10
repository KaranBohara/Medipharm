import { put, takeLatest } from 'redux-saga/effects';
import setAuthToken from "../../utils/setAuthToken";
import API from "../../api/api";

function* loginUser(userData) {
    try {
        const json = yield API.loginUser(userData.userData)
            .then(res => {
                const user  = res.data;
                localStorage.setItem("User", JSON.stringify(user.info));
                setAuthToken(user.info.accessToken);
                return (user);
            })
            .catch(err => {
                throw err.response.data;
            });
        yield put({
            type: "SET_CURRENT_USER",
            json: json
        });
    }
    catch (error) {
        yield put({
            type: 'SET_CURRENT_USER_FAILED',
            error
        })
    }

}

function* logOutUser() {
    localStorage.removeItem("User");
    setAuthToken(false);
    yield put({
        type: "SET_CURRENT_USER",
        json: {},
    });
}

export default function* actionLoginUser() {
    yield takeLatest('LOGIN_USER', loginUser)
    yield takeLatest('LOGOUT_USER', logOutUser)
}
