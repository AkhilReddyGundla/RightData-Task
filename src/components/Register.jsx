import { Box, Button, TextField, Typography } from "@mui/material";
import handleRegistration from "../requestHandlers/handleRegistration";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const handleUserRegistration = async(e)=>{
        e.preventDefault(); // to prevent this default behavior to handle the form submission in JavaScript code without causing a full page reload.
        const result = await handleRegistration(email,password); // to await is used to resolve promise
        result > 0 ?  navigate("/login") : alert("Something wrong with your details")
    }



    return(
        <Box sx={{marginTop:"1rem", border: "1"}}>
            <form onSubmit = {handleUserRegistration}>
                <Box sx={{display:"flex", 
                            flexDirection:"column",
                            justifyContent : "center",
                            alignItems : "center",
                            width : "full",
                            gap : "1rem"
                        }}>

                    <Typography variant="h2">Register</Typography>

                    <Typography size = "subtitle1">Enter your information to create an account</Typography> 

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