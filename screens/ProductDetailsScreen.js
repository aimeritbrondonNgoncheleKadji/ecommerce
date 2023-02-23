// src/screens/ProductDetailsScreen.js

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'native-base';
import { deleteProduct } from '../actions/productActions';

const ProductDetailsScreen = ({ route, navigation }) => {
    const { productId } = route.params;

    const dispatch = useDispatch();

    const product = useSelector((state) =>
        state.productReducer.products.find((prod) => prod.id === productId)
    );

    const handleEdit = () => {
        navigation.navigate('EditProductScreen', { product });
    };

    const handleDelete = () => {
        dispatch(deleteProduct(productId));
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.editButton} onPress={handleEdit}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </Button>
                <Button style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
    detailsContainer: {
        flex: 1,
        marginVertical: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5cb85c',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButton: {
        backgroundColor: '#5bc0de',
        marginHorizontal: 5,
    },
    editButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: '#d9534f',
        marginHorizontal: 5,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProductDetailsScreen;
