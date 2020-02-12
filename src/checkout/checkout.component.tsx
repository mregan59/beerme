import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {
    Button,
    Divider,
    Layout,
    TopNavigation,
    Text,
    Icon,
} from '@ui-kitten/components';
import Animated from 'react-native-reanimated';

import BottomSheet from 'reanimated-bottom-sheet';
import { FlexBox } from '../components/flexbox';

const AnimatedView = Animated.View;
var { height, width } = Dimensions.get('window');
export const Checkout = () => {
    let bottomSheetRef = useRef(null);
    let fall = new Animated.Value(1);

    console.log(fall);
    const renderContent = () => {
        const animatedScale = Animated.interpolate(fall, {
            inputRange: [0, 1], //0 is open //1 is closed
            outputRange: [2, 1],
            //extrapolate: Animated.Extrapolate.CLAMP,
        });
        return (
            <FlexBox style={styles.content} justifycenter aligncenter>
                <AnimatedView style={{ transform: [{ scale: animatedScale }] }}>
                    <Text>HContent</Text>
                    <Text>HContent</Text>
                    <Text>HContent</Text>
                    <Text>HContent</Text>
                </AnimatedView>
            </FlexBox>
        );
    };

    const renderHeader = () => (
        <FlexBox style={styles.header}>
            <Text>This is the header</Text>
        </FlexBox>
    );
    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bottomSheetRef}
                initialSnap={0}
                snapPoints={[100, 450, 450]}
                renderContent={renderContent}
                renderHeader={renderHeader}
                callbackNode={fall}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        // padding: 50,
        backgroundColor: 'hotpink',
    },
    header: {
        backgroundColor: 'yellow',
        height: 100,
        width: width,
    },
    content: {
        backgroundColor: 'green',
        // height: '100%',
        //alignItems: 'center',
        height: 450,
        overflow: 'visible',
        minWidth: width,
    },
});
