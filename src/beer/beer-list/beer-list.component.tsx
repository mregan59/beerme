import React, { useEffect, useState } from 'react';
import { MainLayout } from '../../layout';
import { Layout, Text, Card, Button } from '@ui-kitten/components';
import { FlexBox } from '../../components/flexbox';
import { BeerItem } from '../beer-item';
import firebase from 'firebase';
import '@firebase/firestore';
import { AppRoute } from '../../navigation/app-routes';

export const BeerList = props => {
    const [loading, setLoading] = useState(true);
    const [beers, setBeers] = useState([]);
    const beersRef = firebase.firestore().collection('beers');

    useEffect(() => {
        beersRef.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                console.log(doc);
                const { name, description, price, quantity } = doc.data();
                list.push({
                    id: doc.id,
                    name,
                    description,
                    price,
                    quantity,
                });
            });
            setBeers(list);
        });

        if (loading) {
            setLoading(false);
        }
    }, []);

    const navigateToBeer = beer => {
        props.navigation.push(AppRoute.BEER_DETAILS, { beer: beer });
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
        <Layout level="3" style={{ width: '100%', flex: 1 }}>
            {items}
            <FlexBox
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                }}
                column
            >
                <FlexBox row justifybetween flex1>
                    <Text>Date</Text>
                    <Text>Nov 16, 2020</Text>
                </FlexBox>
                <FlexBox row justifybetween flex1>
                    <Text>Total</Text>
                    <Text>$300</Text>
                </FlexBox>
            </FlexBox>
        </Layout>
    );
};
