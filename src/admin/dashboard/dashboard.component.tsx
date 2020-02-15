import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { MainLayout } from '../../layout';

export const Dashboard = props => {
    useEffect(() => {
        props.getBeers();
    }, []);
    console.log(props.beers);
    return (
        <MainLayout showBack {...props}>
            <Text>{props.beers.length}</Text>
        </MainLayout>
    );
};
