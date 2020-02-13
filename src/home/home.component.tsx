import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Layout, Icon } from '@ui-kitten/components';
import { MainLayout } from '../layout';
import { AppRoute } from '../navigation/app-routes';
import { BeerList } from '../beer/beer-list';
import { Checkout } from '../checkout';

export const Home = props => {
    return (
        <View style={styles.container}>
            <MainLayout safeArea={false} showHeader={false} {...props}>
                <BeerList></BeerList>
            </MainLayout>
            <Checkout></Checkout>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
});
