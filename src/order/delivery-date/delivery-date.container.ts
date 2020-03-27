import { connect } from 'react-redux';
import { ThemedDeliveryDate } from './delivery-date.styles';
import { setDeliveryDate } from '../../store';

const mapStateToProps = state => {
    return state.checkoutReducer;
};

export const DeliveryDate = connect(mapStateToProps, {
    setDeliveryDate,
})(ThemedDeliveryDate);
