import React, { useState } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { FlexBox, Badge, NumberPicker, Spacer } from '../../components';
import { View, TouchableWithoutFeedback } from 'react-native';
import { CloseIcon } from '../../assets/icons';

export const CheckoutItem = props => {
    const { beer, themedStyle } = props;

    const removeBeer = (beer) => {
        props.removeBeer(beer);
    }

    return (

        <FlexBox
            row
            justifystart
            aligncenter style={themedStyle.item}

        >

            <FlexBox>
                <Text appearance="alternative" category="s1">{beer.name}</Text>
                <Text appearance="alternative" category="c1">{beer.quantity} kegs</Text>
            </FlexBox>

            <FlexBox level="3" style={themedStyle.price}>
                <Text appearance="alternative" category="s1">
                    ${beer.price}
                </Text>
            </FlexBox>
            <Button size="small" style={themedStyle.button} status="control" onPress={removeBeer} appearance='ghost' icon={CloseIcon} />
        </FlexBox>
    );
};
