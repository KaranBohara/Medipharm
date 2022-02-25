import axios from "axios";
const baseurl='http://localhost:5000/api/v1/';
const apiCollection=
{
    addProduct:(product)=>
    {
     return axios.post(`${baseurl}product`,product)
    },
    getProduct:()=>
    {
      return axios.get(`${baseurl}product`);
    },
    addCategory:(product)=>
    {
      return axios.post(`${baseurl}category`,product);
    },
    getCategory:()=>
    {
      return axios.get(`${baseurl}category`);
    },
    getStatus:()=>
    {
      return axios.get(`${baseurl}stockstatus`);
    }
}
export default apiCollection;