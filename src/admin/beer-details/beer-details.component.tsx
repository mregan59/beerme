import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { MainLayout } from '../../layout';

export const BeerDetails = props => {
    return (
        <MainLayout showBack {...props}>
            <Text>BeerDetails</Text>
        </MainLayout>
    );
};
