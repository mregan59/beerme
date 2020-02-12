import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, Layout, Icon } from '@ui-kitten/components';
import { MainLayout } from '../layout/main-layout.component';
import { AppRoute } from '../navigation/app-routes';
import { BeerList } from '../beer/beer-list';
import { Checkout } from '../checkout/checkout.component';

export const Home = props => {
    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <MainLayout safeArea={false} showHeader={false} {...props}>
                <BeerList></BeerList>
            </MainLayout>
            <Checkout></Checkout>
        </View>
    );
};
