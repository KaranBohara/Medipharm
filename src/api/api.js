import axios from "axios";
const baseurl='https://medpharmacy-backend-mysql.herokuapp.com/api/v1/'
// const api='http://localhost:5000/api/v1/';
const apiCollection={
    registerUser: function (userData) {
        return axios.post(`${baseurl}user/register`, userData);
    },
    getProduct:function ()
    {
        return axios.get(`${baseurl}product`);
    },
}
export default apiCollection;