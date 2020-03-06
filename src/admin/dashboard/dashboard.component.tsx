import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { MainLayout } from '../../layout';
import { AppRoute } from '../../navigation/app-routes';
import { useNavigation } from '@react-navigation/native';

export const Dashboard = props => {
    const navigation = useNavigation();
    useEffect(() => {
        props.getBeers();
    }, []);

    const navigateToEditBeer = beer => {
        navigation.navigate(AppRoute.ADMIN_BEER_EDIT);
    };
    return (
        <MainLayout showBack {...props}>
            <Text>{props.beers.length}</Text>
            <Button onPress={navigateToEditBeer}>ADD BEER</Button>
        </MainLayout>
    );
};
