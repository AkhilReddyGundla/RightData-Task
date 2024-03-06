import { AppBar, Box, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import handleLogoutRequest from '../requestHandlers/handleLogout';

export default function Header() {


    const dispatch = useDispatch();

    function handleLogoutButton() {
        handleLogoutRequest(dispatch);
    }


    // Check if the user is logged in to determine authentication status
    const isLogin = useSelector((state) => state.auth.isAuthenticated)
    const [value, setValue] = useState(0);



    const tabsBeforeDashBoard =
        <Tabs onChange={(e, val) => setValue(val)} textColor='inherit' value={value}>
            <Tab key="register" component={Link} to="/" label="Register" />, //key for uniquly identify
            <Tab key="login" component={Link} to="/login" label="Login" />
        </Tabs>
        
    const tabsOnDashBoard = <Tab key="logout" component={Link} to="/" label="Logout" onClick={handleLogoutButton} />

    return (
        <>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography variant='h4'>RightData</Typography>
                    <Box sx={{ marginLeft: "auto" }}>
                        {!isLogin ? tabsBeforeDashBoard : tabsOnDashBoard}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}