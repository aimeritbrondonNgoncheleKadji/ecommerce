// src/screens/EditProductScreen.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import {
    Button,
    Container,
    Content,
    Form,
    Icon,
    Input,
    Item,
    Label,
} from 'native-base';
import { updateProduct } from '../actions/productActions';

const EditProductScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();

    const { product } = route.params;

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const handleUpdate = () => {
        const updatedProduct = {
            id: product.id,
            name,
            description,
            price,
            image: product.image,
        };
        dispatch(updateProduct(updatedProduct));
        navigation.navigate('ProductDetailsScreen', { productId: product.id });
    };

    return (
        <Container>
            <Content>
                <Form>
                    <View style={styles.imageContainer}>
                        <Icon name="image" style={styles.imageIcon} />
                    </View>
                    <Item stackedLabel>
                        <Label>Name</Label>
                        <Input value={name} onChangeText={setName} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Description</Label>
                        <Input value={description} onChangeText={setDescription} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Price</Label>
                        <Input value={price.toString()} onChangeText={setPrice} />
                    </Item>
                    <Button style={styles.updateButton} onPress={handleUpdate}>
                        <Label style={styles.updateButtonText}>Update</Label>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    imageContainer: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageIcon: {
        fontSize: 100,
        color: '#ccc',
    },
    updateButton: {
        margin: 20,
        backgroundColor: '#5cb85c',
        justifyContent: 'center',
    },
    updateButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default EditProductScreen;

