import React, { useRef, useState, useEffect } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import Animated from 'react-native-reanimated';

import BottomSheet from 'reanimated-bottom-sheet';
import { FlexBox, Spacer } from '../components';
import { CheckoutItem } from './checkout-item';
import { dimensions } from '../shared/variables';

//TODO get this from date picker


const AnimatedView = Animated.View;

const headerHeight = 100;
const bottomHeight = dimensions.height - 100;

export const Checkout = props => {
    let bottomSheetRef = useRef(null);
    let fall = new Animated.Value(1);
    const [allowGestures, setAllowGestures] = useState(false);

    const { themedStyle, order } = props;
    const { beers } = order;

    useEffect(() => {
        if (Object.keys(order.beers).length == 0) {
            bottomSheetRef.current.snapTo(0);
        }
    }, [order.beers])

    const renderContent = () => {
        const animatedScale = Animated.interpolate(fall, {
            inputRange: [0, 1], //0 is open //1 is closed
            outputRange: [2, 1],
            //extrapolate: Animated.Extrapolate.CLAMP,
        });

        let beerTotal = 0;
        //TODO fix this. shouldn't have to fileter
        const beerOrder = Object.keys(beers).filter(key => beers[key] != undefined).map(key => {
            const beer = beers[key];
            beerTotal += beer.quantity * beer.price;
            return (<CheckoutItem beer={beer} removeBeer={() => props.removeBeerFromOrder(beer)} />)
        })


        const confirmOrder = () => {
            props.confirmOrder({
                ...order,
                total: beerTotal
            });

            props.clearOrder();

        }


        return (
            <FlexBox style={themedStyle.content} justifystart alignstart>
                <FlexBox style={themedStyle.beersContainer}>{beerOrder}</FlexBox>
                <FlexBox style={themedStyle.totalContainer}>
                    <FlexBox style={themedStyle.totalRow} justifybetween aligncenter row>
                        <Text category="s1" appearance="alternative">Total</Text>
                        <Text category="s1" appearance="alternative">${beerTotal}</Text>
                    </FlexBox>
                    <Spacer height={1}></Spacer>
                    <FlexBox style={themedStyle.totalRow} justifybetween aligncenter row>
                        <Text category="s1" appearance="alternative">DeliveryDate</Text>
                        <Text category="s1" appearance="alternative">March 13, 2020</Text>
                    </FlexBox>
                </FlexBox>
                <Spacer height={2}></Spacer>
                <Button style={themedStyle.confirmBtn} onPress={confirmOrder}>Place Order</Button>
                {/* <AnimatedView style={{ transform: [{ scale: animatedScale }] }}
                ></AnimatedView> */}
            </FlexBox>
        );
    };

    const openCheckout = () => {
        //snapPoint index
        bottomSheetRef.current.snapTo(2);
    };

    const onOpenEnd = () => {
        setAllowGestures(true);
    };
    const onCloseEnd = () => {
        setAllowGestures(false);
    };

    const renderHeader = () => {
        let count = 0;
        Object.keys(beers).filter(key => beers[key] != undefined).forEach(item => {
            count += beers[item].checkoutQuantity;
        });
        return (<FlexBox row justifyend aligncenter style={themedStyle.header}>
            <FlexBox style={themedStyle.total} row justifybetween aligncenter>
                <Text category="s2" appearance="alternative">
                    {count} Barrels
                </Text>
            </FlexBox>
            <Button size="large" style={themedStyle.reviewBtn} onPress={openCheckout}>
                Review Order
            </Button>
        </FlexBox>)
    };


    return (
        <View style={themedStyle.container}>
            <BottomSheet
                enabledGestureInteraction={allowGestures}
                ref={bottomSheetRef}
                initialSnap={0}
                snapPoints={[headerHeight, bottomHeight, bottomHeight]}
                renderContent={renderContent}
                renderHeader={renderHeader}
                callbackNode={fall}
                onOpenEnd={onOpenEnd}
                onCloseEnd={onCloseEnd}
            />
        </View>
    );
};
