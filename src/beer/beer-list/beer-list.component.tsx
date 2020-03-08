import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { BeerItem } from '../beer-item';
import firebase from 'firebase';
import '@firebase/firestore';
import { AppRoute } from '../../navigation/app-routes';
import { useNavigation } from '@react-navigation/native';

export const BeerList = props => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [beers, setBeers] = useState([]);
    const beersRef = firebase.firestore().collection('beers');

    const { themedStyle } = props;

    useEffect(() => {
        beersRef.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { name, description, price, quantity, ibu, abv, style_temp } = doc.data();
                list.push({
                    id: doc.id,
                    name,
                    description,
                    price,
                    quantity,
                    ibu,
                    abv,
                    style_temp
                });
            });
            setBeers(list);
        });

        if (loading) {
            setLoading(false);
        }
    }, []);

    const navigateToBeer = beer => {
        navigation.navigate(AppRoute.BEER_DETAILS, { beer: beer });
    };
    const items = beers.map(beer => {
        return (
            <BeerItem
                key={beer.id}
                onSelect={() => navigateToBeer(beer)}
                beer={beer}
            ></BeerItem>
        );
    });

    return (
        <View style={themedStyle.container}>
            {items}
        </View>
    );
};
