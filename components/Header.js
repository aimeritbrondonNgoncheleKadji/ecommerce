// src/components/Header.js

import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { useSelector } from 'react-redux';

export default function AppHeader({ title, onOpenCart }) {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <Header style={styles.header}>
            <Left>
                <Button transparent>
                    <Icon name="menu" style={styles.icon} />
                </Button>
            </Left>
            <Body>
                <Title style={styles.title}>{title}</Title>
            </Body>
            <Right>
                <Button transparent onPress={onOpenCart}>
                    <Icon name="cart" style={styles.icon} />
                    {cartItems.length > 0 && (
                        <Text style={styles.badge}>{cartItems.length}</Text>
                    )}
                </Button>
            </Right>
        </Header>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
    },
    icon: {
        color: '#000',
    },
    title: {
        color: '#000',
    },
    badge: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 9,
        width: 18,
        height: 18,
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
