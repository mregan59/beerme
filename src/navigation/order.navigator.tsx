import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { DeliveryDate } from '../order/delivery-date';
import { Order } from '../order';
import { BeerNavigator } from './beer.navigator';

const Stack = createStackNavigator();

export const OrderNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name={AppRoute.DELIVERY_DATE} component={DeliveryDate} />
        <Stack.Screen name={AppRoute.ORDER_LIST} component={Order} />
    </Stack.Navigator>
);
