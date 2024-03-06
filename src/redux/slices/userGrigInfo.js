import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage : 0,
} 

const userGridInfo = createSlice({
    name : "Grid information",
    initialState,
    reducers : {
        setCurrentPage(state,actions){
            state.currentPage = actions.payload
        }
    }
})

export const {setCurrentPage} = userGridInfo.actions;
export default userGridInfo.reducer