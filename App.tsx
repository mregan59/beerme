import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/app.navigator';
import { AppRoute } from './src/navigation/app-routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './createStore';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { default as appTheme } from './custom-light-theme.json'; // <-- Import app theme

import * as firebase from 'firebase';
import { Loading } from './src/loading';
import customMapping from './src/shared/custom-mapping.json';

const theme = { ...lightTheme, ...appTheme };

const config = {
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
            setInitialRoute(user ? AppRoute.HOME : AppRoute.HOME);
        });
    }, []);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <React.Fragment>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider
                        mapping={mapping}
                        theme={theme}
                        customMapping={customMapping}
                    >
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
            </PersistGate>
        </Provider>
    );
}
