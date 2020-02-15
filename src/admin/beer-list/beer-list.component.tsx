import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { MainLayout } from '../../layout';

export const BeerList = props => {
    return (
        <MainLayout showBack {...props}>
            <Text>BeerList</Text>
        </MainLayout>
    );
};
