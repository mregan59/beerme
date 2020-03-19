import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { MainLayout } from '../../layout';
import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../../navigation/app-routes';

export const BeerDetails = props => {
    const navigation = useNavigation();
    const { beer } = props.route.params;
    console.log(beer);
    const navigateToEditBeer = () => {
        navigation.navigate(AppRoute.ADMIN_BEER_EDIT, { beer: beer });
    };
    return (
        <MainLayout showBack {...props}>
            <Text>BeerDetails</Text>
            <Button onPress={navigateToEditBeer}>Edit</Button>
        </MainLayout>
    );
};
