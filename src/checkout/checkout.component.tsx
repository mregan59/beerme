import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import Animated from 'react-native-reanimated';

import BottomSheet from 'reanimated-bottom-sheet';
import { FlexBox } from '../components/flexbox';

const AnimatedView = Animated.View;

export const Checkout = props => {
    let bottomSheetRef = useRef(null);
    let fall = new Animated.Value(1);
    const [allowGestures, setAllowGestures] = useState(false);

    const { themedStyle } = props;

    const renderContent = () => {
        const animatedScale = Animated.interpolate(fall, {
            inputRange: [0, 1], //0 is open //1 is closed
            outputRange: [2, 1],
            //extrapolate: Animated.Extrapolate.CLAMP,
        });
        return (
            <FlexBox style={themedStyle.content} justifycenter aligncenter>
                <AnimatedView
                    style={{ transform: [{ scale: animatedScale }] }}
                ></AnimatedView>
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

    const renderHeader = () => (
        <FlexBox row justifyend aligncenter style={themedStyle.header}>
            <FlexBox style={themedStyle.total} row justifybetween aligncenter>
                <Text category="s2" appearance="alternative">
                    TOTAL
                </Text>
                <Text
                    category="s2"
                    style={{ marginHorizontal: 16 }}
                    appearance="alternative"
                >
                    6 kegs
                </Text>
                <Text category="s2" appearance="alternative">
                    $300
                </Text>
            </FlexBox>
            <Button size="large" onPress={openCheckout}>
                View Order
            </Button>
        </FlexBox>
    );
    return (
        <View style={themedStyle.container}>
            <BottomSheet
                enabledGestureInteraction={allowGestures}
                ref={bottomSheetRef}
                initialSnap={0}
                snapPoints={[100, 450, 450]}
                renderContent={renderContent}
                renderHeader={renderHeader}
                callbackNode={fall}
                onOpenEnd={onOpenEnd}
                onCloseEnd={onCloseEnd}
            />
        </View>
    );
};
