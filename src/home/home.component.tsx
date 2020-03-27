import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Text,
    Layout,
    TopNavigationAction,
    Button,
} from '@ui-kitten/components';
import { MainLayout } from '../layout';
import { AppRoute } from '../navigation/app-routes';
import { SettingsIcon, PersonIcon } from '../assets/icons';
import { FlexBox } from '../components';
import moment from 'moment';

export const Home = props => {

    useEffect(() => {
        if (props.orders.length == 0) {
            props.getOrders();
        }
    }, [])

    const { themedStyle } = props;

    const navigateToAdmin = () => {
        props.navigation.navigate(AppRoute.ADMIN);
    };

    const navigateToOrder = () => {
        props.navigation.navigate(AppRoute.ORDER);
    };

    const renderRightControl = () => {
        return (
            <TopNavigationAction
                onPress={navigateToAdmin}
                icon={PersonIcon}
            />
        );
    };


    const orders = props.orders.map(order => {
        console.log(order);
        return (
            <Layout level="3" style={themedStyle.order}>
                <Text>{order.brewery}</Text>
                <Text>${order.total}</Text>
                <Text>{moment(order.delivery_date).format('MMM DD, YYYY')}</Text>
                <Text>{Object.keys(order.beers).length} barrels</Text>
            </Layout>
        )
    })



    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                padding={null}
                tabPadding
                showTitle={false}
                rightControl={renderRightControl}
                {...props}
            >

                <Layout level="1" style={themedStyle.container}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <FlexBox column justifybetween h100 flex1 style={{ backgroundColor: 'orange' }}>
                            <Text category="h1" appearance="hint">Orders</Text>

                            <ScrollView horizontal style={themedStyle.slider}>
                                {orders}
                            </ScrollView>
                            <Button onPress={navigateToOrder}>Start Order</Button>
                        </FlexBox>
                    </ScrollView>
                </Layout>
            </MainLayout>
        </View>
    );
};

