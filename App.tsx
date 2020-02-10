import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/app.navigator';
import { AppRoute } from './src/navigation/app-routes';

const Stack = createStackNavigator();

import * as firebase from 'firebase';
import { Loading } from './src/loading';
var config = {
    apiKey: 'AIzaSyDV5cPugR7MOmAo09cd70ffqK-heAQLhvk',
    authDomain: 'six-brothers.firebaseapp.com',
    databaseURL: 'https://six-brothers.firebaseio.com',
    projectId: 'six-brothers',
    storageBucket: 'six-brothers.appspot.com',
    messagingSenderId: '564264904689',
    appId: '1:564264904689:web:e8b58d1b05d8a209a6c650',
    measurementId: 'G-VS8LLE81WZ',
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default function App(props) {
    const [initialRoute, setInitialRoute] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setInitialRoute(user ? AppRoute.HOME : AppRoute.AUTH);
        });
    }, []);
    return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <SafeAreaProvider>
                    {initialRoute ? (
                        <NavigationContainer>
                            <AppNavigator initialRouteName={initialRoute} />
                        </NavigationContainer>
                    ) : (
                        <Loading></Loading>
                    )}
                </SafeAreaProvider>
            </ApplicationProvider>
        </React.Fragment>
    );
}
