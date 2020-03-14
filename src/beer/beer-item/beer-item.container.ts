import { connect } from 'react-redux';
import { ThemedBeerItem as BeerItemComponent } from './beer-item.styles';
import { addBeerToOrder } from '../../checkout/checkout.actions';

const mapStateToProps = state => {
    return {};
};

export const BeerItem = connect(mapStateToProps, {
    addBeerToOrder,
})(BeerItemComponent);
