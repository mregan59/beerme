import { connect } from 'react-redux';
import { Dashboard as DashboardComponent } from './dashboard.component';
import { getBeers } from './../../beer/beer.actions';

const mapStateToProps = state => {
    return state.beerReducer;
};

export const Dashboard = connect(mapStateToProps, {
    getBeers,
})(DashboardComponent);
