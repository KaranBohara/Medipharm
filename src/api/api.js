import axios from "axios";
const baseurl='https://medpharmacy-backend-mysql.herokuapp.com/api/v1/'
// const baseurl='http://localhost:5000/api/v1/';
const apiCollection={
    getProduct:async function ()
    {
        const product= await axios.get(`${baseurl}product`);
        return product;
    },
    getProductById:async function (pid)
    {
        return await axios.get(`${baseurl}product/${pid}`)
    }
}
export default apiCollection;