import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import handleLogin from "../requestHandlers/handleLogin"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    //handling userRequest
    const handleUserLogin =async (e)=>{
        e.preventDefault();   // to prevent this default behavior to handle the form submission in JavaScript code without causing a full page reload.
        const result = await handleLogin(email,password,dispatch)
        result ? navigate("/Dashboard") : alert("Something wrong with your details")
    }

    return(
        <Box sx={{marginTop:"1rem", border: "1"}}>
            <form onSubmit = {handleUserLogin}>
                <Box sx={{display:"flex", 
                            flexDirection:"column",
                            justifyContent : "center",
                            alignItems : "center",
                            width : "full",
                            gap : "1rem"
                        }}>

                    <Typography variant="h2">Login</Typography>

                    <Typography size = "subtitle1">Enter your credentials to access your account</Typography> 

                    <TextField 
                        sx={{width: "25%"}} 
                        placeholder="Email" 
                        type="email"
                        autoComplete="email"
                        onChange={(e)=>setEmail(e.target.value)}/>

                    <TextField 
                        sx={{width: "25%"}} 
                        placeholder="Password" 
                        type="password"
                        autoComplete="password"
                        onChange={(e)=>setPassword(e.target.value)}/>

                    <Button variant="outlined" type="submit" sx={{width: "25%"}}>Submit</Button>     
                </Box>
            </form>
        </Box>
    )
}