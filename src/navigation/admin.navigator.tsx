import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { Dashboard } from '../admin/dashboard';
import { BeerEdit } from '../admin/beer-edit';
import { BeerDetails } from '../admin/beer-details';
import { BeerList } from '../admin/beer-list';

const Stack = createStackNavigator();

export const AdminNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name={AppRoute.ADMIN_DASHBOARD} component={Dashboard} />
        <Stack.Screen name={AppRoute.ADMIN_BEER_LIST} component={BeerList} />
        <Stack.Screen name={AppRoute.ADMIN_BEER_EDIT} component={BeerEdit} />
        <Stack.Screen
            name={AppRoute.ADMIN_BEER_DETAILS}
            component={BeerDetails}
        />
    </Stack.Navigator>
);
