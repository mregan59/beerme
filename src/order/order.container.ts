import { connect } from 'react-redux';
import { ThemedOrder } from './order.styles';
import { setDeliveryDate } from '../store';

const mapStateToProps = state => {
    return state.checkoutReducer;
};

export const Order = connect(mapStateToProps, {
    setDeliveryDate,
})(ThemedOrder);
