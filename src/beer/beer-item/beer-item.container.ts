import { connect } from 'react-redux';
import { ThemedBeerItem as BeerItemComponent } from './beer-item.styles';
import { addBeerToOrder } from '../../store';

const mapStateToProps = state => {
    return { styles: state.beerReducer.styles };
};

export const BeerItem = connect(mapStateToProps, {
    addBeerToOrder,
})(BeerItemComponent);
