import axios from 'axios'
import { GET_USERS_REQUEST , GET_USERS_SUCCESS, GET_USERS_ERROR} from './usersTypes'

export const getUsers = () => async (dispatch) =>{
    try {
        dispatch({type: GET_USERS_REQUEST})
        const { data } = await axios.get('https://randomuser.me/api/');
        console.log(data)
        dispatch({ type: GET_USERS_SUCCESS , payload: data })
    } catch (error) {
        dispatch({ type: GET_USERS_ERROR, payload: error })
    }
} 