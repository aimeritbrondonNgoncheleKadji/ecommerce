import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';

const PaymentScreen = ({ navigation }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePay = () => {
        navigation.navigate('Confirmation', { orderId: Math.floor(Math.random() * 1000000) });
    };

    return (
        <>
            <Header title="Payment" subtitle="Please enter your payment details" />
            <View style={styles.container}>
                <TextInput
                    mode="outlined"
                    label="Card number"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                />
                <TextInput
                    mode="outlined"
                    label="Expiration date (MM/YY)"
                    value={expirationDate}
                    onChangeText={setExpirationDate}
                />
                <TextInput mode="outlined" label="CVV" value={cvv} onChangeText={setCvv} />
                <Button mode="contained" onPress={handlePay}>
                    Pay
                </Button>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default PaymentScreen;