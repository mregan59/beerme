import React from 'react';
import { View, Text } from 'react-native';
import { MainLayout } from '../layout';

export const Settings = props => {
    return (
        <MainLayout showBack {...props}>
            <Text>Settings</Text>
        </MainLayout>
    );
};
