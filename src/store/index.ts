//Reducers
export { adminReducer } from './admin/admin.reducer';
export { beerReducer } from './beer/beer.reducer';
export { checkoutReducer } from './checkout/checkout.reducer';

//Actions
export {
    addBeerToOrder,
    removeBeerFromOrder,
    clearOrder,
    confirmOrder,
} from './checkout/checkout.actions';
export { addBeer, getBeerStyles, getBeers } from './beer/beer.actions';
//export {checkoutReducer} from './admin/admin.actions';
