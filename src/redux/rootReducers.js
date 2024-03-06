import { combineReducers} from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import userIdReducer from './slices/userIdSlice'
import gridInfoReducer from "./slices/userGrigInfo";


const rootReducer = combineReducers({
    auth : authReducer,    // slice of the state :  reducer function responsible for managing that slice of state
    userId : userIdReducer,
    gridInfo : gridInfoReducer,
    
})


export default rootReducer; 