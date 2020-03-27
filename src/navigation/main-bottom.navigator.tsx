import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRoute } from './app-routes';
import { Home } from '../home';
import { Settings } from '../settings';
import { OrderHistory } from '../order-history';
import { LayoutIcon, PersonIcon, PlusIcon } from '../assets/icons';
import { BottomTabs } from './bottom-tabs';
import { HomeNavigator } from './home.navigator';

const BottomTab = createBottomTabNavigator();

export const MainBottomNavigator = (): React.ReactElement => (
    <BottomTab.Navigator tabBar={props => <BottomTabs {...props} />}>
        <BottomTab.Screen
            name={AppRoute.ORDER_HISTORY}
            component={OrderHistory}
            options={{ title: 'Orders', tabBarIcon: LayoutIcon }}
        />
        <BottomTab.Screen
            name={AppRoute.HOME}
            component={HomeNavigator}
            options={{ title: 'Beer', tabBarIcon: PlusIcon }}
        />
        <BottomTab.Screen
            name={AppRoute.SETTINGS}
            component={Settings}
            options={{ title: 'Settings', tabBarIcon: PersonIcon }}
        />
    </BottomTab.Navigator>
);
