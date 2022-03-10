import axios from "axios";
const baseurl='https://medpharmacy-backend-mysql.herokuapp.com/api/v1/'
// const baseurl='http://localhost:5000/api/v1/';
const apiCollection={
    getProduct:function ()
    {
        return axios.get(`${baseurl}product`);
    },
    getProductById:function (pid)
    {
        return axios.get(`${baseurl}product/${pid}`)
    }
}
export default apiCollection;