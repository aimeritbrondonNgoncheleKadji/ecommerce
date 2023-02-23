// src/components/ProductList.js

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import ProductCard from './ProductCard';

export default function ProductList({ products, isAdmin }) {
    return (
        <Container>
            <Content>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ProductCard product={item} isAdmin={isAdmin} />
                    )}
                />
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
