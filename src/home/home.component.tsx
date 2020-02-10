import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, Layout, Datepicker, Icon } from '@ui-kitten/components';
import { MainLayout } from '../layout/main-layout.component';
import { AppRoute } from '../navigation/app-routes';

const FacebookIcon = style => <Icon name="facebook" {...style} />;

export const Home = props => {
    const [date, setDate] = useState(new Date());
    return (
        <MainLayout {...props}>
            <Layout level="4">
                <Text>Home</Text>
                <Button
                    onPress={() =>
                        props.navigation.navigate(AppRoute.BEER_LIST)
                    }
                >
                    Go to Details
                </Button>
                <Button icon={FacebookIcon}>Login with Facebook</Button>
                <Datepicker date={date} onSelect={setDate} />
            </Layout>
        </MainLayout>
    );
};
