import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { BeerItem } from '../beer-item';
import firebase from 'firebase';
import '@firebase/firestore';
import { AppRoute } from '../../navigation/app-routes';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@ui-kitten/components'

export const BeerList = props => {
    const navigation = useNavigation();

    const { themedStyle } = props;

    useEffect(() => {
        props.getBeers()
    }, []);

    const navigateToBeer = beer => {
        navigation.navigate(AppRoute.BEER_DETAILS, { beer: beer });
    };
    if (props.beers.length == 0) {
        return <Text>Loading</Text>
    }

    const items = props.beers.map(beer => {
        let checkoutQuantity = 0;
        const checkoutBeer = props.order[beer.id]
        if (checkoutBeer != undefined && checkoutBeer) {
            checkoutQuantity = checkoutBeer.checkoutQuantity;
        }
        return (
            <BeerItem
                key={beer.id}
                onSelect={() => navigateToBeer(beer)}
                beer={{ ...beer, checkoutQuantity }}
            ></BeerItem>
        );
    });
    console.log('ITEMS');

    return (
        <View style={themedStyle.container}>
            {items}
        </View>
    );
};
