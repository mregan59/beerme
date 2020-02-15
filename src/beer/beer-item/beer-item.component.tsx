import React, { useState } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { FlexBox, TouchableFlexBox } from '../../components/flexbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { PlusIcon } from '../../assets/icons';

export const BeerItem = props => {
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const { beer, themedStyle } = props;

    const toggle = () => {
        setOpen(!open);
        //add or remove
    };

    const quantities = [...Array(8)].map((num, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={[
                    themedStyle.quantity,
                    quantity == index && themedStyle.quantitySelected,
                ]}
                onPress={() => setQuantity(index)}
            >
                <FlexBox justifycenter aligncenter flex1>
                    <Text
                        appearance={
                            quantity == index ? 'alternative' : 'default'
                        }
                    >
                        {index + 1}
                    </Text>
                </FlexBox>
            </TouchableOpacity>
        );
    });

    return (
        <Layout level="3" style={themedStyle.container}>
            <FlexBox w100 row aligncenter>
                <TouchableFlexBox
                    row
                    justifybetween
                    aligncenter
                    style={themedStyle.content}
                    onPress={props.onSelect}
                >
                    <Text>{beer.name}</Text>
                    <Layout style={themedStyle.price}>
                        <Text appearance="alternative">${beer.price}</Text>
                    </Layout>
                </TouchableFlexBox>
                <View style={themedStyle.addBtnContainer}>
                    <Button
                        appearance="outline"
                        icon={PlusIcon}
                        onPress={toggle}
                        status="basic"
                    ></Button>
                </View>
            </FlexBox>
            {open && (
                <FlexBox row style={themedStyle.quantityContainer}>
                    {quantities}
                </FlexBox>
            )}
        </Layout>
    );
};
