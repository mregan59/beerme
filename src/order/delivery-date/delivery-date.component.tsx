import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Text,
    Layout,
    Button
} from '@ui-kitten/components';
import { MainLayout } from '../../layout';
import { Spacer, BottomButton, FlexBox } from '../../components';
import { Calendar } from '@ui-kitten/components';
import { MomentDateService } from '@ui-kitten/moment';
import moment from 'moment';

import { AppRoute } from '../../navigation/app-routes';

const dateService = new MomentDateService();
const max = moment().add(21, 'days');
const startDate = moment();
const min = moment();

export const DeliveryDate = props => {

    //const [deliveryDate, setDeliveryDate] = useState(moment().add(7, 'day'));
    const { themedStyle, navigation } = props;

    const [date, setDate] = React.useState(startDate);

    // const editDate = () => {
    //yeah lets make this its own control
    // };

    const navigatoToBeer = () => {
        props.setDeliveryDate(date)
        navigation.navigate(AppRoute.ORDER_LIST);
    }

    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                showBack
                title="Set Delivery Date"
                {...props}
            >
                <Layout level="1">
                    <FlexBox aligncenter justifycenter>
                        {/* <Text style={themedStyle.dateText} category="h5" >Select your Delivery Date</Text> */}
                        <Text style={themedStyle.dateText} category="h6" status="primary">{date.format('dddd, MMM DD, YYYY')}</Text>
                    </FlexBox>
                    <Spacer height={3}></Spacer>
                    <Calendar
                        max={max}
                        min={min}
                        dateService={dateService}
                        date={date}
                        onSelect={setDate}
                    />
                    {/* <Calendar currentDate={props.order.delivery_date} onSelect={date => props.setDeliveryDate(date)}></Calendar> */}
                </Layout>
            </MainLayout>
            <BottomButton onPress={navigatoToBeer}>Pick Beer</BottomButton>
        </View>
    );
};
