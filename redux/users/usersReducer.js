
import { GET_USERS_REQUEST , GET_USERS_SUCCESS, GET_USERS_ERROR} from './usersTypes'

const initialState = {
    users: null,
    loading: false,
    error: null
}


const userReducer = (state = initialState, { type, payload}) =>{
    switch(type){
        case GET_USERS_REQUEST:
            return{
                loading :true
            }
        case GET_USERS_SUCCESS:
            return{
                loading:  false,
                users: payload.results,
            }
        case GET_USERS_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return  state;
    }
}

export default  userReducer;