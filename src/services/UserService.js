import axios from "axios";
const baseurl='https://medpharmacy-backend-mysql.herokuapp.com/api/v1/user/'
// const baseurl="http://localhost:5000/api/v1/user/";

export const register=async inputs=>
{
 const data=await axios.post(`${baseurl}register`,inputs).then(response=>{return response.data})
 return data;
}
export const login = async inputs => 
{
 const data=await axios.post(`${baseurl}login`, inputs).then(response=> { return response.data})
 return data;
}

export const logout = () => 
{
    localStorage.removeItem('user')
}

export const checkUser = () => 
{
    return JSON.parse(localStorage.getItem('user'))
}