import React from 'react';
import { Layout, Text, } from '@ui-kitten/components';
import { FlexBox, Badge, NumberPicker, Spacer } from '../../components';
import { View, TouchableWithoutFeedback } from 'react-native';

export const BeerItem = props => {
    const { beer, themedStyle, quantity = 1000 } = props;

    const onAddBeer = (beer, quantity) => {
        props.addBeerToOrder(beer, quantity);
    }

    const style = props.styles.find(s => s.id == beer.style);

    return (
        <View>
            <FlexBox row aligncenter style={themedStyle.container}>
                <TouchableWithoutFeedback onPress={props.onSelect}>
                    <Layout style={themedStyle.card} level="1">
                        <FlexBox column>
                            <FlexBox
                                row
                                justifybetween
                                alignstart
                                style={themedStyle.content}
                            >
                                <FlexBox>
                                    <Text category="s1">{beer.name}</Text>
                                    <Text appearance="hint" category="c1">Last delivered Oct 14, 2019</Text>
                                </FlexBox>
                                <Layout level="3" style={themedStyle.price}>
                                    <Text category="s1">
                                        ${beer.price}
                                    </Text>
                                </Layout>
                            </FlexBox>
                            <Spacer height={1.5}></Spacer>
                            <FlexBox row>
                                <Badge color={'#2176AC'}>{style && style.style}</Badge>
                                <Spacer width={.5}></Spacer>
                                <Badge>IBU {beer.ibu}</Badge>
                                <Spacer width={.5}></Spacer>
                                <Badge>ABV {beer.abv}%</Badge>
                                <Spacer width={.5}></Spacer>
                                <Badge>{beer.quantity} barrels</Badge>
                            </FlexBox>
                        </FlexBox>
                    </Layout>
                </TouchableWithoutFeedback>
                <View style={themedStyle.addContainer}>
                    <NumberPicker onChange={(value) => onAddBeer(beer, value)} value={beer.checkoutQuantity} max={quantity}></NumberPicker>
                </View>
            </FlexBox>
        </View>
    );
};
