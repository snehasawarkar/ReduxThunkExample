import React from 'react';

export default function CustomerList({ customers, addCustomer }){
    const handleClick = () => {
        addCustomer(
            { 
                id: 2,
                firstName: "Umar",
                lastName: "Siddiqui"
            }
        )
    }
    return (
        <div>
            {
                customers.map(customer => <div> {customer.firstName} </div>)
            }
            <button onClick={handleClick}>Add customer</button>
        </div>
    )
}