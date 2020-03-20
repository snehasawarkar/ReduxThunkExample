import { connect } from 'react-redux';
import { fetchCustomers, addCustomer } from '../actions';
import customerList from '../components/CustomerList';

const mapDispatchToProps = (dispatch) => {
    dispatch(fetchCustomers());
    return {
        addCustomer: (customer) => dispatch(addCustomer(customer))
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customerList.customers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(customerList);
