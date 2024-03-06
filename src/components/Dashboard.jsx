// Dashboard.js
import React, { lazy,Suspense } from 'react';
import UsersGrid from './DashBoardComponents/UsersGrid';
import { Box, Typography } from '@mui/material';
import LoadingComponent from './LoadingComponent';

const UserGrid = lazy(()=>{'./DashBoardComponents/UsersGrid'}) 

const Dashboard = () => {
    return (
        <Box sx={{padding : "10px"}}>
            <Typography variant="h3">Dashboard</Typography>
            <Suspense fallback = {<LoadingComponent/>}><UsersGrid /></Suspense>
        </Box>
    );
};

export default Dashboard;
