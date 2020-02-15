import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { MainLayout } from '../../layout';

export const BeerEdit = props => {
    return (
        <MainLayout showBack {...props}>
            <Text>BeerEdit</Text>
        </MainLayout>
    );
};
