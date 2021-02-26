import { combineReducers } from "redux";
import userReducer from './users/usersReducer'



const rootReducer = combineReducers({
 user: userReducer
});
export default rootReducer