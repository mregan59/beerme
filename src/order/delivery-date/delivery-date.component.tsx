import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Text,
    Layout,
    Button
} from '@ui-kitten/components';
import { MainLayout } from '../../layout';
import { Spacer, Calendar, FlexBox } from '../../components';
import moment from 'moment';
import { AppRoute } from '../../navigation/app-routes';

export const DeliveryDate = props => {

    //const [deliveryDate, setDeliveryDate] = useState(moment().add(7, 'day'));
    const { themedStyle, navigation } = props;

    // const editDate = () => {
    //yeah lets make this its own control
    // };

    const navigatoToBeer = () => {
        navigation.navigate(AppRoute.ORDER_LIST);
    }

    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                showBack
                {...props}
            >
                <Layout level="3">
                    <Text style={themedStyle.dateText} category="c2" appearance="hint">Select your Delivery Date</Text>
                    <Text style={themedStyle.dateText} category="h5">{props.order.delivery_date.format('dddd, MMM DD, YYYY')}</Text>
                    <Spacer height={2}></Spacer>
                    <Calendar currentDate={props.order.delivery_date} onSelect={date => props.setDeliveryDate(date)}></Calendar>
                    <Button onPress={navigatoToBeer}>Pick Beer</Button>
                </Layout>
            </MainLayout>
        </View>
    );
};
