
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";


import {composeWithDevTools} from 'redux-devtools-extension'

import RootReducer from "./rootReducer";

const middleWare = [thunk];

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleWare))) 

 export default store