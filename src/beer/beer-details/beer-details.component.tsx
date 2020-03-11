import React from 'react';
import { MainLayout } from '../../layout';
import { Text } from '@ui-kitten/components';

export const BeerDetails = props => {
    const { beer } = props.route.params;

    return (
        <MainLayout {...props} showBack padding level="2" title={beer.name}>
            <Text>{beer.description}</Text>
            <Text>{beer.quantity}</Text>
            <Text>{beer.price}</Text>
        </MainLayout>
    );
};
