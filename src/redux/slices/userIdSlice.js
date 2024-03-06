import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id:null
}

const useIdSlice = createSlice({
    name : "User Id",
    initialState,
    reducers : {
        setUserId(state,action){
            state.id = action.payload
        }
    }
})

export const {setUserId} = useIdSlice.actions;
export default useIdSlice.reducer