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
import { SettingsIcon } from '../assets/icons';
import { FlexBox } from '../components/flexbox';

export const Home = props => {
    const { themedStyle } = props;
    const navigateToSettings = () => {
        props.navigation.navigate('Settings');
    };
    const renderRightControl = () => {
        return (
            <TopNavigationAction
                onPress={navigateToSettings}
                icon={SettingsIcon}
            />
        );
    };

    const editDate = () => {
        //yeah lets make this its own control
    };
    return (
        <View style={styles.container}>
            <MainLayout
                safeArea={true}
                showTitle={false}
                rightControl={renderRightControl}
                {...props}
            >
                <FlexBox row justifybetween style={themedStyle.dateContainer}>
                    <View>
                        <Text
                            appearance="alternative"
                            style={{ marginBottom: 8 }}
                            category="label"
                        >
                            Your Delivery Date
                        </Text>
                        <Text appearance="alternative" category="h4">
                            Feb 16, 2020
                        </Text>
                    </View>
                    <Button onPress={editDate}>Edit</Button>
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
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
});
