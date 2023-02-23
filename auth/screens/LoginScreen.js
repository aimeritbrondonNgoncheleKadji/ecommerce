// src/auth/screens/LoginScreen.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import { login } from '../actions/authActions';

export default function LoginScreen() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login(email, password));
    };

    return (
        <Content contentContainerStyle={styles.container}>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input secureTextEntry onChangeText={(text) => setPassword(text)} />
                </Item>
                <Button block onPress={handleLogin} style={styles.button}>
                    <Text>Login</Text>
                </Button>
            </Form>
        </Content>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    button: {
        marginTop: 30,
    },
});
