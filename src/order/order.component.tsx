import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Text,
    Layout,
    Modal,
    Button
} from '@ui-kitten/components';
import { MainLayout } from '../layout';
import { BeerList } from '../beer/beer-list';
import { Checkout } from '../checkout';
import { Spacer, Calendar, FlexBox, } from '../components';
import moment from 'moment';
import { AppRoute } from '../navigation/app-routes';

export const Order = props => {

    //const [deliveryDate, setDeliveryDate] = useState(moment().add(7, 'day'));
    const { themedStyle } = props;

    const [visible, setVisible] = useState(false);

    const toggleModal = () => {
        setVisible(!visible);
    };

    // const editDate = () => {
    //yeah lets make this its own control
    // };

    const onBack = () => {
        toggleModal()


    }

    const cancel = () => {
        toggleModal();

    }
    const discardOrder = () => {
        toggleModal();
        //props.clearOrder
        props.navigation.navigate(AppRoute.HOME)
    }

    const renderModalElement = () => (
        <Layout
            level='1'
            text
            style={themedStyle.modalContainer}>
            <Text category="p1">Are you sure you want to discard this order?</Text>
            <Spacer height="2"></Spacer>
            <FlexBox justifycenter aligncenter row>
                <Button status="basic" onPress={cancel}>Keep it</Button>
                <Spacer width="2"></Spacer>
                <Button status="danger" onPress={discardOrder}>Discard</Button>
            </FlexBox>


        </Layout>
    );

    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                padding={null}
                title='Add Beer'
                showBack
                onBack={onBack}
                {...props}
            >
                <Layout style={{ height: ' 100%', flex: .9 }} level="3">
                    <ScrollView>
                        <BeerList></BeerList>
                    </ScrollView>
                </Layout>
                <Checkout></Checkout>
                <Modal
                    backdropStyle={themedStyle.backdrop}
                    onBackdropPress={toggleModal}
                    visible={visible}>
                    {renderModalElement()}
                </Modal>
            </MainLayout>

        </View>
    );
};
