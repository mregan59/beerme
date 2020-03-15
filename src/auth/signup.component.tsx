import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { AppRoute } from '../navigation/app-routes';
import { Input, Button, Icon, Text } from '@ui-kitten/components';
import { useInput } from '../util/hooks';
import { MainLayout } from '../layout';
import { Spacer } from '../components/spacer';
import { FlexBox } from '../components/flexbox';
import { useNavigation } from '@react-navigation/native';
export const SignUp = props => {
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const {
        value: password,
        bind: bindPassword,
        reset: resetPassword,
    } = useInput('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigation = useNavigation();

    const signUp = () => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password);
            resetEmail();
            resetPassword();
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    const onIconPress = () => {
        setPasswordVisible(!passwordVisible);
    };

    const renderIcon = style => (
        <Icon {...style} name={passwordVisible ? 'eye-off' : 'eye'} />
    );

    const navigateToSignUp = () => {
        navigation.navigate(AppRoute.SIGN_IN);
    };

    return (
        <MainLayout showTitle={false} {...props}>
            <Text style={{ textAlign: 'center' }} category="h1">
                Sign Up
            </Text>
            <Spacer height={4}></Spacer>
            <Input size="large" placeholder="Email" {...bindEmail} />
            <Spacer height={1}></Spacer>
            <Input
                size="large"
                secureTextEntry={!passwordVisible}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                onIconPress={onIconPress}
                icon={renderIcon}
                {...bindPassword}
            />
            <Spacer height={4}></Spacer>
            <Button size="large" status="primary" onPress={signUp}>
                Sign Up
            </Button>
            <Spacer height={2}></Spacer>
            <FlexBox row aligncenter justifycenter>
                <Text category="p1">Already have an account?</Text>
                <Spacer width={0.5}></Spacer>
                <TouchableOpacity onPress={navigateToSignUp}>
                    <Text status="primary" category="s1">
                        Sign In
                    </Text>
                </TouchableOpacity>
            </FlexBox>
        </MainLayout>
    );
};
