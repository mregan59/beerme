import { connect } from 'react-redux';
import { ThemedCheckout as CheckoutComponent } from './checkout.styles';
import {
    addBeerToOrder,
    removeBeerFromOrder,
    confirmOrder,
    clearOrder,
} from './checkout.actions';

const mapStateToProps = state => {
    return state.checkoutReducer;
};

export const Checkout = connect(mapStateToProps, {
    addBeerToOrder,
    removeBeerFromOrder,
    confirmOrder,
    clearOrder,
})(CheckoutComponent);
