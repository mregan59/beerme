import React, { useState } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { FlexBox, TouchableFlexBox } from '../../components/flexbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { NumberPicker } from '../../components/number-picker';

export const BeerItem = props => {
    const { beer, themedStyle } = props;

    return (
        <View>
            <FlexBox row aligncenter style={themedStyle.container}>
                <Layout style={themedStyle.card} level="1">
                    <FlexBox row aligncenter>
                        <TouchableFlexBox
                            row
                            justifybetween
                            aligncenter
                            style={themedStyle.content}
                            onPress={props.onSelect}
                        >
                            <Text>{beer.name}</Text>
                            <Layout style={themedStyle.price}>
                                <Text appearance="alternative">
                                    ${beer.price}
                                </Text>
                            </Layout>
                        </TouchableFlexBox>
                    </FlexBox>
                </Layout>
                <View style={themedStyle.addContainer}>
                    <NumberPicker value={1} max={5}></NumberPicker>
                </View>
            </FlexBox>
        </View>
    );
};
