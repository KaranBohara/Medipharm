import * as types from '../actiontypes/actionTypes'

export const registerUserAction = (inputs) =>
{
    return{
        type: types.REGISTER_USER,
        inputs
    }
}
export const userRegistered =(user)=>
{
    return{
        type:types.USER_REGISTERED,
        user
    }
}
export const loginUserAction = (inputs) => {
    return {
        type: types.LOGIN_USER,
        inputs
    }
}

export const userLoggedIn = (user) => {
    return {
        type: types.USER_LOGGEDIN,
        user
    }
}
export const logoutUserAction = () => {
    return {
        type: types.LOGOUT_USER
    }
}

export const userLoggedOutAction = () => {
    return {
        type: types.USER_LOGGEDOUT
    }
}