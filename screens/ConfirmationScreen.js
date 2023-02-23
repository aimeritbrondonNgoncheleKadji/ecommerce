import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../components/Header';

const ConfirmationScreen = ({ navigation, route }) => {
    const { orderId } = route.params;

    const handleGoToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <>
            <Header title="Confirmation" showBackButton={false} />
            <View style={styles.container}>
                <Text style={styles.message}>
                    Your order (#{orderId}) has been confirmed. Thank you for shopping with us!
                </Text>
                <Button mode="contained" onPress={handleGoToHome}>
                    Go to Home
                </Button>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default ConfirmationScreen;