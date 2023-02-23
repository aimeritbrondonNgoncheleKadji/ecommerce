// src/screens/HomeScreen.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { listProducts } from '../actions/productActions';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productReducer.products);
    const { loading, error } = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Loading...</Text>
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <>
                    <FlatList
                        data={productList}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ProductCard product={item} navigation={navigation} />
                        )}
                        numColumns={2}
                    />
                    <Button
                        style={styles.addButton}
                        onPress={() => navigation.navigate('ProductScreen')}
                    >
                        <Icon name='add' />
                    </Button>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    addButton: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: '#5cb85c',
    },
});

export default HomeScreen;
