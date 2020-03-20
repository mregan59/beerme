import { connect } from 'react-redux';
import { ThemedHome } from './home.styles';
import { getOrders } from '../store';

const mapStateToProps = state => {
    return state.ordersReducer;
};

export const Home = connect(mapStateToProps, {
    getOrders,
})(ThemedHome);
