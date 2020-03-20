import { SET_CUSTOMERS, ADD_CUSTOMER } from '../actions/types';

const initialState = {
    customers: []
}

export default function customersReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CUSTOMERS: 
            return { customers: action.payload }

        case ADD_CUSTOMER:
            return { customers: state.customers.concat(action.payload) }

        default:
            return state;
    }
}