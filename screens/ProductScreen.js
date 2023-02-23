// src/screens/ProductScreen.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { createProduct } from '../actions/productActions';

const ProductScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const { loading, error, createSuccess } = useSelector(
        (state) => state.productReducer
    );

    useEffect(() => {
        if (createSuccess) {
            navigation.navigate('HomeScreen');
        }
    }, [createSuccess, navigation]);

    const handleSubmit = () => {
        dispatch(createProduct({ name, description, price, image }));
    };

    return (
        <Container>
            <Content>
                <Form style={styles.form}>
                    <View style={styles.imageWrapper}>
                        <Icon name='camera' style={styles.cameraIcon} />
                    </View>
                    <Item stackedLabel>
                        <Label>Name</Label>
                        <Input onChangeText={(text) => setName(text)} value={name} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Description</Label>
                        <Input
                            onChangeText={(text) => setDescription(text)}
                            value={description}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Price</Label>
                        <Input onChangeText={(text) => setPrice(text)} value={price} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Image URL</Label>
                        <Input onChangeText={(text) => setImage(text)} value={image} />
                    </Item>
                    <Button
                        style={styles.button}
                        onPress={handleSubmit}
                        disabled={loading}
                        block
                    >
                        <Text style={styles.buttonText}>
                            {loading ? 'Creating...' : 'Create'}
                        </Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 10,
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    cameraIcon: {
        fontSize: 80,
        color: '#aaa',
    },
    button: {
        backgroundColor: '#5cb85c',
        marginVertical: 20,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProductScreen;
