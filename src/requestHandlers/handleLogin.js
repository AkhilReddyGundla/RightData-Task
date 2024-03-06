import axios from 'axios'
import { loginSuccess } from '../redux/slices/authSlice';

import { setUserId } from '../redux/slices/userIdSlice';

export default async function handleUserRegistration(email,password,dispatch){
    const url = `https://reqres.in/api/login`;
    const body = {
        email,
        password
    }
    
    try{                                                               // I think password validation is missing
        const response = await axios.post(url,body);
        const data = response.data;
        const token = data.token;
        dispatch(loginSuccess(token))
        dispatch(setUserId(email))
        return 1;
    }catch(error){
        console.log(error)
        return 0
    }
}