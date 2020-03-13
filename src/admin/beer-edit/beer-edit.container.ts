import { connect } from 'react-redux';
import { BeerEdit as BeerEditComponent } from './beer-edit.component';
import { addBeer, getBeerStyles } from './../../beer/beer.actions';

const mapStateToProps = state => {
    return state.beerReducer;
};

export const BeerEdit = connect(mapStateToProps, {
    addBeer,
    getBeerStyles,
})(BeerEditComponent);
