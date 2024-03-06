import Box from '@mui/material/Box';
import React, { useState, useEffect, useMemo ,useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Gridcontroller from '../GridController';
import { setCurrentPage } from '../../redux/slices/userGrigInfo';
import UserDetails from './UserDetails';
import { Button } from '@mui/material';
export default function UserGrid() {


    const token = useSelector((state) => state.auth.token);
    const id = useSelector((state) => state.userId.id);

    let currentPage = useSelector((state) => state.gridInfo.currentPage);

    const [rowData, setRowData] = useState([]); 

    const [viewButtonOnClick, setViewButtOnClick] = useState(false);
    const [selectedRowData,setSelectedRowData] = useState();
    


    useEffect(() => {
        fetchData(currentPage); // Fetch data for the current page 
    }, [currentPage]);


  const dispatch = useDispatch()

  // fetching data
    const fetchData = (pageNumber) => {
        const url = `https://reqres.in/api/users?page=${pageNumber}`;
        const headers = { token, id };
        try {
            axios.get(url, { headers })
                .then((response) => {
                    setRowData(response.data.data);
                    dispatch(setCurrentPage(response.data.page))
                    localStorage.setItem('TotalGridPages',null)// using local storage to store Total pages
                    localStorage.setItem("TotalGridPages",response.data.total_pages)
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    // defining Columns of grid
    const columnDefs = useMemo(() => [
        { headerName: "Id", field: "id" },
        { headerName: "First Name", field: "first_name" },
        { headerName: "Last Name", field: "last_name" },
        { headerName: "Email", field: 'email', sortable: false },
        {
            headerName: "Actions",
            field: 'id',
            cellRenderer: (params) => <Box sx={{display : "flex",justifyContent:"space-around"}}>
            <Button variant="outlined" color="primary" onClick={() => handleViewBtn(params.data)}>View</Button>
            <Button variant="outlined" color="error" onClick={() => handleDeleteBtn(params.value)}>Delete</Button>
          </Box>,
           
        }
    ], []);
  
// Handling View Button 
    const handleViewBtn = (data)=>{
        setSelectedRowData(data)
        setViewButtOnClick(true)
    }

// handling Delete Button
    const handleDeleteBtn = async(id)=>{
        const confirm = window.confirm(`Are you sure, you want to delete this user ${id}`)
        if(confirm){
            try{
                const res = await axios.delete(`https://reqres.in/api/users/${id}`)
                console.log(res)
                setRowData(prevData => prevData.filter(user => user.id !== id));
                fetchData(currentPage)
            }catch(error){
                console.log(error)
            }
        }
    }


    // default coloum definations 
    const defaultColDef = useMemo(() => ({
        filter: true,
        sortable: true,
        flex: 1,
        floatingFilter: true,
        autoHeight: true,
        wrapText: true,
    }), []);


    
    if (viewButtonOnClick) {
        const userInformation = selectedRowData;
        return <UserDetails userInformation ={userInformation} closeWindow={setViewButtOnClick}/>;
    }




    return (
        <Box className="ag-theme-quartz">
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                domLayout='autoHeight'
                defaultColDef={defaultColDef}
                rowSelection='single'
            />
            <br /><br />
            <Gridcontroller />
        </Box>
    );
}
