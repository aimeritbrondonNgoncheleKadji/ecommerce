import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Body, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { auth, firestore } from '../services/firebase';

export default function ProductCard({ product, isAdmin }) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleDelete = () => {
        firestore.collection('products').doc(product.id).delete();
    };

    const handleEdit = () => {
        // Navigate to Edit Product Screen
    };

    return (
        <Card>
            <CardItem header bordered>
                <Text>{product.title}</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>{product.description}</Text>
                    <Text note>{product.price} €</Text>
                </Body>
            </CardItem>
            <CardItem footer bordered>
                {isAdmin ? (
                    <>
                        <Button transparent onPress={handleEdit}>
                            <Text>Edit</Text>
                        </Button>
                        <Button transparent onPress={handleDelete}>
                            <Text>Delete</Text>
                        </Button>
                    </>
                ) : (
                    <Button block onPress={handleAddToCart}>
                        <Text>Add to Cart</Text>
                    </Button>
                )}
            </CardItem>
        </Card>
    );
}
