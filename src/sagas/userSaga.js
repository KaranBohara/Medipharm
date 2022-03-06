import { takeEvery, call, put, all } from "redux-saga/effects";

import history from "../history";

import * as types from "../actiontypes/actionTypes";
import * as service from "../services/UserService";
import * as actions from "../actions/userActions";
import * as alert from "../actions/alertActions";

function* register({ inputs }) {
    const user= yield call(service.register,inputs);
    if(user.success)
    {
        yield put(actions.userRegistered(user))
        yield put(
            alert.setAlertAction(
                {
                    text:user.message,
                    color:"success"
                }
            )
        )
        history.push('/loginclient')
    }
    else{
        yield put(
                alert.setAlertAction(
                    {
                        text:user.message,
                        color:"error"
                    }
                )
        )
        history.push('/signupclient')
    }
}
function* login({ inputs }) {
  const user = yield call(service.login, inputs);;
  if (user.success) {
    localStorage.setItem("user", JSON.stringify(user));
    yield put(actions.userLoggedIn(user));
    yield put(
      alert.setAlertAction({
        text: user.message,
        color: "success",
      })
    );
    history.push("/");
  } else {
    yield put(
      alert.setAlertAction({
        text: user.message,
        color: "error",
      })
    );
    history.push("/loginclient");
  }
}

function* logout() {
  yield call(service.logout);
  yield put(actions.userLoggedOutAction());
  history.push("/loginclient");
}
function* watchRegisterUser() {
    yield takeEvery(types.REGISTER_USER,register);
}
function* watchLoginUser() {
  yield takeEvery(types.LOGIN_USER, login);
}

function* watchLogoutUser() {
  yield takeEvery(types.LOGOUT_USER, logout);
}

export function* userSaga() {
  yield all([watchRegisterUser(), watchLoginUser(), watchLogoutUser()]);
}
