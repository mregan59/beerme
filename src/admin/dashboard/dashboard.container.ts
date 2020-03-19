import { connect } from 'react-redux';
import { ThemedDashboard } from './dashboard.styles';
import { getBeers } from './../../beer/beer.actions';

const mapStateToProps = state => {
    return state.beerReducer;
};

export const Dashboard = connect(mapStateToProps, {
    getBeers,
})(ThemedDashboard);
