import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { BeerDetails } from '../beer/beer-details';
import { BeerList } from '../beer/beer-list';
import { Home } from '../home';

const Stack = createStackNavigator();

export const BeerNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name={AppRoute.HOME} component={Home} />
        <Stack.Screen name={AppRoute.BEER_LIST} component={BeerList} />
        <Stack.Screen name={AppRoute.BEER_DETAILS} component={BeerDetails} />
    </Stack.Navigator>
);
