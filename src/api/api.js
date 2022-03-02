import axios from "axios";
const baseurl='https://medpharmacy-backend-mysql.herokuapp.com/api/v1/'
// const api='http://localhost:5000/api/v1/';
const apiCollection={
    registerUser: function (userData) {
        return axios.post(`${baseurl}user/register`, userData);
    },
    loginUser:async function (userData) {
        return axios.post(`${baseurl}user/login`, userData)
    },
    getProduct:function ()
    {
        return axios.get(`${baseurl}product`);
    },
    logout:function ()
    {
        localStorage.removeItem("user");
    }
}
export default apiCollection;