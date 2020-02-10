import React, { Fragment } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
    Layout,
    Divider,
    Icon,
    Text,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const MainLayout = props => {
    const statusBarHeight = getStatusBarHeight();
    const navigateBack = () => {
        props.navigation.goBack();
    };
    //TODO hook up navigation options
    // const { options } = scene.descriptor;
    // const title =
    //     options.headerTitle !== undefined
    //         ? options.headerTitle
    //         : options.title !== undefined
    //         ? options.title
    //         : scene.route.routeName;

    const backAction = () => (
        <TouchableOpacity onPress={navigateBack}>
            <Text>Back</Text>
        </TouchableOpacity>

        // <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    const header = () => {
        return (
            <React.Fragment>
                <TopNavigation
                    title={props.route.name}
                    alignment="center"
                    leftControl={props.showBack && backAction()}
                    rightControls={props.rightControl && props.rightControl()}
                />
                <Divider />
            </React.Fragment>
        );
    };

    if (props.safeArea) {
        return (
            <SafeAreaView style={{ flex: 1, paddingTop: statusBarHeight }}>
                {header()}
                <Layout
                    level={props.level}
                    style={{
                        flex: 1,
                        padding: props.padding ? 15 : 0,
                    }}
                >
                    {props.children}
                </Layout>
            </SafeAreaView>
        );
    } else {
        return (
            <Layout
                style={{
                    flex: 1,
                    backgroundColor: 'hotpink',
                    paddingTop: statusBarHeight,
                }}
            >
                {header()}
                <Layout
                    level={props.level}
                    style={{ flex: 1, padding: props.padding ? 15 : 0 }}
                >
                    {props.children}
                </Layout>
            </Layout>
        );
    }
};

MainLayout.defaultProps = {
    safeArea: true,
    level: '1',
};
