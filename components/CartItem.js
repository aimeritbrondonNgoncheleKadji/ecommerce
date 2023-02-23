// src/components/CartItem.js

import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Text, Body, Right, Button, Icon } from 'native-base';
import { removeFromCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';

export default function CartItem({ product }) {
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
    };

    return (
        <ListItem>
            <Body>
                <Text>{product.title}</Text>
                <Text note>{product.price} €</Text>
            </Body>
            <Right>
                <Button transparent onPress={handleRemoveFromCart}>
                    <Icon name="trash" style={styles.icon} />
                </Button>
            </Right>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    icon: {
        color: 'red',
    },
});
