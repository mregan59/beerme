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
import { FlexBox, Spacer } from '../components';
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
        const beers = Object.keys(order.beers);
        let quantity = 0;
        beers.forEach(beer => {
            quantity += order.beers[beer].checkoutQuantity;
        })

        return (
            <Layout level="3" style={themedStyle.order}>
                <Text category="h6">{moment(order.delivery_date).format('MMM DD')}</Text>
                <Spacer height=".5"></Spacer>
                <FlexBox style={themedStyle.innerOrder}>
                    <Text category="s2">{quantity} kegs</Text>
                    <Text category="s2">{beers.length} Flavors</Text>
                </FlexBox>
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
                    <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                        <FlexBox column justifystart h100 flex1>
                            <Text style={themedStyle.header} category="h6">Orders</Text>
                            <Spacer height="1"></Spacer>
                            <View>
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={themedStyle.slider}>
                                    {orders}
                                </ScrollView>
                            </View>
                            <Spacer height="3"></Spacer>
                            <Text style={themedStyle.header} category="h6">Newest Beers</Text>
                            <Spacer height="1"></Spacer>

                        </FlexBox>
                    </ScrollView>
                    <Button
                        style={themedStyle.button}
                        onPress={navigateToOrder}
                    >Start Order</Button>
                </Layout>
            </MainLayout>
        </View>
    );
};

