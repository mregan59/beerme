import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { BeerDetails } from '../beer/beer-details';
import { BeerList } from '../beer/beer-list';
import { Home } from '../home';
import { Order } from '../order';
import { Settings } from '../settings';
import { AdminNavigator } from './admin.navigator';

const Stack = createStackNavigator();

export const MainNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name={AppRoute.HOME} component={Home} />
        <Stack.Screen name={AppRoute.BEER_LIST} component={BeerList} />
        <Stack.Screen name={AppRoute.SETTINGS} component={Settings} />
        <Stack.Screen name={AppRoute.BEER_DETAILS} component={BeerDetails} />
        <Stack.Screen name={AppRoute.ADMIN} component={AdminNavigator} />
        <Stack.Screen name={AppRoute.ORDER} component={Order} />
    </Stack.Navigator>
);
