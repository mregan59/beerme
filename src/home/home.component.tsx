import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Text,
    Layout,
    TopNavigationAction,
} from '@ui-kitten/components';
import { MainLayout } from '../layout';
import { AppRoute } from '../navigation/app-routes';
import { BeerList } from '../beer/beer-list';
import { Checkout } from '../checkout';
import { SettingsIcon, PersonIcon } from '../assets/icons';
import { Spacer, Calendar, FlexBox } from '../components';
import moment from 'moment';

export const Home = props => {

    const [deliveryDate, setDeliveryDate] = useState(moment().add(7, 'day'))
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
                title='Order'
                showBack
                rightControl={renderRightControl}
                leftControl={renderLeftControl}
                {...props}
            >
                <Layout level="3">
                    <ScrollView>
                        <FlexBox justifybetween style={themedStyle.dateContainer}>
                            <Text style={themedStyle.dateText} category="c2" appearance="hint">Select your Delivery Date</Text>
                            <Text style={themedStyle.dateText} category="h5">{deliveryDate.format('dddd, MMM DD, YYYY')}</Text>
                            <Spacer height={2}></Spacer>
                            < Calendar currentDate={deliveryDate} onSelect={date => setDeliveryDate(date)}></Calendar>
                            {/* <Spacer height={6}></Spacer> */}
                        </FlexBox>
                        <Spacer height={2}></Spacer>
                        <Text style={themedStyle.dateText} category="c2" appearance="hint">Select your Beers</Text>
                        <BeerList></BeerList>
                    </ScrollView>
                </Layout>
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
