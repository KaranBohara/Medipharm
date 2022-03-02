import axios from "axios";
const baseurl='https://medpharmacy-backend-mysql.herokuapp.com/api/v1/user/'
// const url="http://localhost:5000/api/v1/user/";

export const login = async creds => {
        const data=await axios.post(`${baseurl}login`, creds).then(response=> {return response.data})
        localStorage.setItem('user', JSON.stringify(data))
        return data;
    }

export const logout = () => {
    localStorage.removeItem('user')
}

export const checkUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}