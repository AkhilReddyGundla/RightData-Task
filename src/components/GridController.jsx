import { useState, useMemo, useRef } from 'react';
import {PrevButtonOnPress, NextButtonOnPress} from './GridButtonsOnClick'
import { useSelector,useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import Button from '@mui/material/Button'
import { TextField } from '@mui/material';
import { setCurrentPage } from '../redux/slices/userGrigInfo';

export default function Gridcontroller() {
    const currentPageRef = useRef(1);
    const [textFieldValue, setTextFieldValue] = useState(1);
    const totalPages = localStorage.getItem("TotalGridPages");
   
    const dispatch = useDispatch();
    
    currentPageRef.current = useSelector(state => state.gridInfo.currentPage);

    let time ;

    useMemo(()=>{
        clearTimeout(time)
        time = setTimeout(()=>{
            (textFieldValue >=1 && textFieldValue <= totalPages) ?  dispatch(setCurrentPage(textFieldValue) ) : null;
        },[50])
        
    },[textFieldValue])
    
    

    
    const currentUserPage = currentPageRef.current

    function onPressPrevious(){
        setTextFieldValue(currentUserPage-1)
        PrevButtonOnPress(dispatch,currentUserPage) 
    }

    function onPressNext(){
        setTextFieldValue(currentUserPage+1)
        NextButtonOnPress(dispatch,currentUserPage)
    }
    return (
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            
            {currentUserPage > 1 
                ? <Button variant="contained" onClick={onPressPrevious}>Previous</Button> 
                : <Button variant="contained" disabled>Previous</Button> }

            <TextField id="standard-basic" variant="standard" sx={{width : "2rem", textAlign:"center"}} value ={textFieldValue} onChange={(e)=>setTextFieldValue(e.target.value)}/>

            {currentUserPage < totalPages 
                ? <Button variant="contained" onClick={onPressNext}>Next</Button> 
                : <Button variant="contained" disabled>Next</Button> }
        </Box>
    );
}
