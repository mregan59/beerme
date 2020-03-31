import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { MainTopNavigator } from './main-top.navigator';
import { MainBottomNavigator } from './main-bottom.navigator';
import { OrderNavigator } from './order.navigator';
import { HomeNavigator } from './home.navigator';
import { BeerNavigator } from './beer.navigator';
import { AppRoute } from './app-routes';
import { BeerDetails } from '../beer/beer-details';
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
    [AppRoute.AUTH]: undefined;
    [AppRoute.HOME]: undefined;
    [AppRoute.ORDER]: undefined;
    [AppRoute.BEER_DETAILS]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (
    props: Partial<StackNavigatorProps>
): React.ReactElement => (
        <Stack.Navigator {...props} headerMode="none">
            <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
            <Stack.Screen name={AppRoute.HOME} component={HomeNavigator} />
            <Stack.Screen name={AppRoute.ORDER} component={OrderNavigator} />
            <Stack.Screen name={AppRoute.BEER_DETAILS} component={BeerDetails} />
        </Stack.Navigator>
    );
