import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Text,
    Layout,
} from '@ui-kitten/components';
import { MainLayout } from '../layout';
import { BeerList } from '../beer/beer-list';
import { Checkout } from '../checkout';
import { Spacer, Calendar, FlexBox } from '../components';
import moment from 'moment';

export const Order = props => {

    const [deliveryDate, setDeliveryDate] = useState(moment().add(7, 'day'));
    const { themedStyle } = props;

    // const editDate = () => {
    //yeah lets make this its own control
    // };

    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                padding={null}
                title='Order'
                showBack
                {...props}
            >
                <Layout level="3">
                    <ScrollView>
                        <FlexBox justifybetween style={themedStyle.dateContainer}>
                            <Text style={themedStyle.dateText} category="c2" appearance="hint">Select your Delivery Date</Text>
                            <Text style={themedStyle.dateText} category="h5">{deliveryDate.format('dddd, MMM DD, YYYY')}</Text>
                            <Spacer height={2}></Spacer>
                            <Calendar currentDate={deliveryDate} onSelect={date => setDeliveryDate(date)}></Calendar>
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
