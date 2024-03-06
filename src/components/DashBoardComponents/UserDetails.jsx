import {Typography,Box, Container,Button} from '@mui/material'


export default function UserDetails({userInformation,closeWindow}){
    return (
        <>
                <Container sx={{background:"#e3f2fd", width: '40%', minWidth: '200px', marginLeft:"auto", marginRight:"auto",borderRadius:"10px", padding:"20px"}}>

                    <Button onClick={()=>closeWindow(false)} sx={{ fontWeight: 'bold', position:"end" }}>Back</Button>
                    <Box sx={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                            <img src={userInformation.avatar} alt="User" style={{ borderRadius: '10px' }} />
                            <Box sx={{paddingTop:"10px", display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                                <Typography variant="h6" color="initial">User Id : {userInformation.id}</Typography>
                                <Typography variant="h6" color="initial">First Name : {userInformation.first_name}</Typography>
                                <Typography variant="h6" color="initial">Last Name : {userInformation.last_name}</Typography>
                                <Typography variant="h6" color="initial">Email : {userInformation.email}</Typography>
                            </Box>
                            
                    </Box>
                </Container>
                
        </>
    )
}