import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { Button } from 'react-native-paper';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../actions/cartActions';

const CartScreen = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const totalPrice = items.reduce((total, item) => total + item.quantity * item.product.price, 0);

    const handleIncrement = (id) => { dispatch(incrementQuantity(id)); };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const renderItem = ({ item }) => (
        <CartItem
            item={item}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
        />
    );

    if (items.length === 0) {
        return (
            <View style={styles.container}>
                <Text>Your cart is empty</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderItem} />
            <Text style={styles.totalPrice}>Total: {totalPrice} €</Text>
            <Button mode="contained" onPress={() => { }}>
                Checkout
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

export default CartScreen;