import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { SignIn, SignUp } from '../auth';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name={AppRoute.SIGN_IN} component={SignIn} />
        <Stack.Screen name={AppRoute.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
);
