import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { MainTopNavigator } from './main-top.navigator';
import { BeerNavigator } from './beer.navigator';
import { MainNavigator } from './main.navigator';
import { AppRoute } from './app-routes';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
    [AppRoute.AUTH]: undefined;
    [AppRoute.MAIN]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (
    props: Partial<StackNavigatorProps>
): React.ReactElement => (
    <Stack.Navigator {...props} headerMode="none">
        <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
        <Stack.Screen name={AppRoute.MAIN} component={MainNavigator} />
    </Stack.Navigator>
);
