import { setCurrentPage } from '../redux/slices/userGrigInfo';


// currentPage !== (undefined || null)   This check ensures that non-serializable data is not stored in the state.

export const PrevButtonOnPress = (dispatch,currentPage) =>{

    currentPage = currentPage - 1
    currentPage !== (undefined || null) ? dispatch(setCurrentPage(currentPage) ) : null; // Dispatch an action with the updated page number
}

export const NextButtonOnPress = (dispatch,currentPage) =>{
    currentPage = currentPage + 1
    currentPage !== (undefined || null) ? dispatch(setCurrentPage(currentPage) ) : null; // Dispatch an action with the updated page number
}
 