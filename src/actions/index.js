import { SET_CUSTOMERS, ADD_CUSTOMER } from './types'

export const setCustomers = (customers) => {
    return {
        type: SET_CUSTOMERS,
        payload: customers
    }
}

export const fetchCustomers = () => {
    let customers = [
        {
            id: 1,
            firstName: "Sneha",
            lastName: "Sawarkar"
        }
    ]
    return (dispatch) => {
       setTimeout(()=>{
           dispatch(setCustomers(customers))
       }, 1000) 
    }
}

export const addCustomer = (customer) => {
    return {
        type: ADD_CUSTOMER,
        payload: customer
    }
}
