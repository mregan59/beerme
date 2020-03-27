import { connect } from 'react-redux';
import { ThemedBeerList as BeerListComponent } from './beer-list.styles';
import { getBeers } from '../../store';

const mapStateToProps = state => {
    return { ...state.beerReducer, ...state.checkoutReducer };
};

export const BeerList = connect(mapStateToProps, {
    getBeers,
    //getBeerStyles,
})(BeerListComponent);
