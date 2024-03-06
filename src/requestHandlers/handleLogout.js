
import { loginSuccess , logout} from '../redux/slices/authSlice'
import { setCurrentPage } from '../redux/slices/userGrigInfo';
import { setUserId } from '../redux/slices/userIdSlice';


export default function handleLogoutRequest(dispatch){
    dispatch(loginSuccess(null))
    dispatch(logout(true))
    dispatch(setUserId(null))
    dispatch(setCurrentPage(null))
    navigate("/")
}