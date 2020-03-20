import { combineReducers } from "redux";
import customersReducer from './customersReducer';

export default combineReducers({
    customerList: customersReducer
})
