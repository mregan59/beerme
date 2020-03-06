import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Text,
    Button,
    Layout,
    Icon,
    TopNavigationAction,
} from '@ui-kitten/components';
import { MainLayout } from '../layout';
import { AppRoute } from '../navigation/app-routes';
import { BeerList } from '../beer/beer-list';
import { Checkout } from '../checkout';
import { SettingsIcon, PersonIcon } from '../assets/icons';
import { FlexBox } from '../components/flexbox';
import { Spacer } from '../components/spacer';

export const Home = props => {
    const { themedStyle } = props;
    const navigateToSettings = () => {
        props.navigation.navigate(AppRoute.SETTINGS);
    };
    const navigateToAdmin = () => {
        props.navigation.navigate(AppRoute.ADMIN);
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

    const editDate = () => {
        //yeah lets make this its own control
    };
    return (
        <View style={styles.container}>
            <MainLayout
                safeArea={true}
                padding={null}
                showTitle={false}
                rightControl={renderRightControl}
                leftControl={renderLeftControl}
                {...props}
            >
                <FlexBox row justifybetween style={themedStyle.dateContainer}>
                    <Text category="label">YOUR DELIVERY DATE</Text>
                    <Spacer height={1}></Spacer>
                    <Text category="h3">Feb 16, 2020</Text>
                </FlexBox>
                <BeerList></BeerList>
            </MainLayout>
            <Checkout></Checkout>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
