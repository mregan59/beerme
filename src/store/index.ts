//Reducers
export { adminReducer } from './admin/admin.reducer';
export { beerReducer } from './beer/beer.reducer';
export { checkoutReducer } from './checkout/checkout.reducer';
export { ordersReducer } from './orders/orders.reducer';

//Actions
export {
    addBeerToOrder,
    removeBeerFromOrder,
    clearOrder,
    confirmOrder,
    setDeliveryDate,
} from './checkout/checkout.actions';
export { addBeer, getBeerStyles, getBeers } from './beer/beer.actions';
export { getOrders } from './orders/orders.actions';
//export {checkoutReducer} from './admin/admin.actions';
