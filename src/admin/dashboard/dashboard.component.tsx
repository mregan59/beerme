import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { MainLayout } from '../../layout';
import { AppRoute } from '../../navigation/app-routes';
import { useNavigation } from '@react-navigation/native';
import { BeerItem } from '../../beer/beer-item';
import { Fab } from '../../components';
import { PlusIcon } from '../../assets/icons';

export const Dashboard = props => {
    const navigation = useNavigation();
    useEffect(() => {
        props.getBeers();
    }, []);

    const navigateToAddBeer = () => {
        navigation.navigate(AppRoute.ADMIN_BEER_EDIT, { beer: null });
    };

    const navigateToBeerDetails = beer => {
        navigation.navigate(AppRoute.ADMIN_BEER_DETAILS, { beer: beer });
    };

    const { themedStyle } = props;

    const beers = props.beers.map(beer => {
        return <BeerItem beer={{ ...beer, checkoutQuantity: beer.quantity }} onSelect={() => navigateToBeerDetails(beer)}></BeerItem>
    })
    return (
        <MainLayout padding={null} level="4" showBack {...props}>
            <Fab onPress={navigateToAddBeer} icon={PlusIcon} status="info"></Fab>
            <ScrollView style={themedStyle.scrollView}>{beers}</ScrollView>


        </MainLayout>
    );
};
