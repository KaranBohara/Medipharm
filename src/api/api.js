import axios from "axios";
const api='https://medpharma-api.herokuapp.com/';
// const api='http://localhost:5000/';
const apiCollection={
    registerUser: function (userData) {
        return axios.post(`${api}users/signup`, userData);
    },
    loginUser: function (userData) {
        return axios.post(`${api}users/login`, userData);
    },
    getProduct:function ()
    {
        return axios.get(`${api}product`);
    }
}
export default apiCollection;