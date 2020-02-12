import React from 'react';
import { MainLayout } from '../../layout';
import { BeerItem } from '../beer-item';

export const BeerDetails = props => {
    const { beer } = props.route.params;

    return (
        <MainLayout {...props} showBack padding level="2">
            <BeerItem beer={beer}></BeerItem>
        </MainLayout>
    );
};
