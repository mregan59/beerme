import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AppRoute } from './app-routes';
import { Home } from '../home';
import { Settings } from '../settings';
import { OrderHistory } from '../order-history';
import { SettingsIcon, HomeIcon, OrderIcon } from '../assets/icons';
import { BeerNavigator } from './beer.navigator';
import { TopTabs } from './top-tabs';

const TopTab = createMaterialTopTabNavigator();

export const MainTopNavigator = (): React.ReactElement => (
    <TopTab.Navigator
        swipeEnabled={false}
        tabBar={props => <TopTabs {...props} />}
    >
        <TopTab.Screen
            name={AppRoute.ORDER_HISTORY}
            component={OrderHistory}
            options={{ title: 'Orders', tabBarIcon: OrderIcon }}
        />
        <TopTab.Screen
            name={AppRoute.HOME}
            component={BeerNavigator}
            options={{ title: 'Beer', tabBarIcon: HomeIcon }}
        />
        <TopTab.Screen
            name={AppRoute.SETTINGS}
            component={Settings}
            options={{ title: 'Settings', tabBarIcon: SettingsIcon }}
        />
    </TopTab.Navigator>
);
