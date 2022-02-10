import axios from "axios";
const api='https://medpharma-api.herokuapp.com/';
const apiCollection={
    registerUser: function (userData) {
        return axios.post(`${api}users/signup`, userData);
    },
    loginUser: function (userData) {
        return axios.post(`${api}users/login`, userData);
    },
}
export default apiCollection;