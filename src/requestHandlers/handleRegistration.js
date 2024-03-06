import axios from 'axios'


export default async function handleUserRegistration(email,password){
    const url = `https://reqres.in/api/register`;
    const body = {
        email,
        password
    }
    try{
        const response = await axios.post(url,body);
        const id = response.data.id
        
        return id;
        
    }catch(error){
        console.log(error)
        return -1;  // to indicate error
    }
}