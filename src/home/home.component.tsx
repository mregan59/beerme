import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Text,
    Layout,
    TopNavigationAction,
    Button
} from '@ui-kitten/components';
import { MainLayout } from '../layout';
import { AppRoute } from '../navigation/app-routes';
import { BeerList } from '../beer/beer-list';
import { Checkout } from '../checkout';
import { SettingsIcon, PersonIcon } from '../assets/icons';
import { Spacer, Calendar, FlexBox } from '../components';
import moment from 'moment';

export const Home = props => {
    const { themedStyle } = props;
    const navigateToSettings = () => {
        props.navigation.navigate(AppRoute.SETTINGS);
    };
    const navigateToAdmin = () => {
        props.navigation.navigate(AppRoute.ADMIN);
    };
    const navigateToOrder = () => {
        props.navigation.navigate(AppRoute.ORDER);
    };
    const renderRightControl = () => {
        return (
            <TopNavigationAction
                onPress={navigateToSettings}
                icon={SettingsIcon}
            />
        );
    };
    const renderLeftControl = () => {
        return (
            <TopNavigationAction onPress={navigateToAdmin} icon={PersonIcon} />
        );
    };


    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                padding={null}
                showTitle={false}
                showBack
                rightControl={renderRightControl}
                leftControl={renderLeftControl}
                {...props}
            >
                <Layout level="1" style={themedStyle.container}>
                    <ScrollView style={themedStyle.container}>
                        <FlexBox justifybetween >
                            <Text category="h1" appearance="hint">Orders</Text>

                        </FlexBox>
                        <Spacer height={2}></Spacer>
                        <Text category="c2" >Other Stuff</Text>
                        <Button onPress={navigateToOrder}>Start Order</Button>

                    </ScrollView>
                </Layout>
            </MainLayout>
        </View>
    );
};

