import React, { useState } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { FlexBox, TouchableFlexBox } from '../../components/flexbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';

export const BeerItem = props => {
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const { beer } = props;

    const toggle = () => {
        setOpen(!open);
        //add or remove
    };

    const quantities = [...Array(8)].map((num, index) => {
        return (
            <TouchableOpacity
                style={[
                    {
                        borderColor: 'black',
                        borderWidth: 1,
                        padding: 10,
                        marginHorizontal: 5,
                    },
                    quantity == index && { backgroundColor: 'green' },
                ]}
                onPress={() => setQuantity(index)}
            >
                <View>
                    <Text>{index + 1}</Text>
                </View>
            </TouchableOpacity>
        );
    });

    return (
        <FlexBox style={{ marginVertical: 5, padding: 0 }}>
            <FlexBox w100 row aligncenter>
                <TouchableFlexBox
                    row
                    justifybetween
                    aligncenter
                    style={{
                        padding: 0,
                        marginRight: 0,
                        width: 280,
                    }}
                    onPress={props.onSelect}
                >
                    <Text>{beer.name}</Text>
                    <Layout
                        level="4"
                        style={{
                            padding: 6,
                            marginRight: 10,
                        }}
                    >
                        <Text>${beer.price}</Text>
                    </Layout>
                </TouchableFlexBox>
                <View>
                    <Button onPress={toggle} status="primary" status="danger">
                        +
                    </Button>
                </View>
            </FlexBox>
            {open && <FlexBox row>{quantities}</FlexBox>}
        </FlexBox>
    );
};
