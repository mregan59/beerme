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

export const HomeNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name={AppRoute.HOME} component={Home} />
        <Stack.Screen name={AppRoute.ADMIN} component={AdminNavigator} />
    </Stack.Navigator>
);
