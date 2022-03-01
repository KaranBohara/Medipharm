import axios from "axios";
// const api='https://medpharma-api.herokuapp.com/';
const api='http://localhost:5000/api/v1/';
const apiCollection={
    registerUser: function (userData) {
        return axios.post(`${api}user/register`, userData);
    },
    loginUser:async function (userData) {
        return axios.post(`${api}user/login`, userData)
    },
    getProduct:function ()
    {
        return axios.get(`${api}product`);
    },
    logout:function ()
    {
        localStorage.removeItem("user");
    }
}
export default apiCollection;