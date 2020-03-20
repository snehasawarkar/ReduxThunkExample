import React, { useState } from 'react';

export default function CustomerList({ customers, addCustomer }){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [id, setId] = useState("");

    const handleChange = (setState, event) => {
        setState(event.target.value);
    }

    const handleSubmit = (event) => {
        addCustomer(
            { 
                id: id,
                firstName: firstName,
                lastName: lastName
            }
        )

        event.preventDefault();
    }
    return (
        <div>
            {
                customers.map(customer => <div>{customer.id} {customer.firstName} {customer.lastName} </div>)
            }
            <form onSubmit={handleSubmit}>
                <div>
                    Id:
                    <input onChange={handleChange.bind(null, setId)} type="text" name="id" />
                </div>
                <div>
                    First Name:
                    <input onChange={handleChange.bind(null, setFirstName)} type="text" name="firstname" />
                </div>
                <div>
                    Last Name:
                    <input onChange={handleChange.bind(null, setLastName)} type="text" name="lastname" />
                </div>
                <input type="submit" value="Submit" />
            </form>
            {/* <button onClick={handleClick}>Add customer</button> */}
        </div>
    )
}