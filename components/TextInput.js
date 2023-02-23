// src/components/TextInput.js

import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Label } from 'native-base';

export default function TextInput({
    label,
    value,
    onChangeText,
    secureTextEntry,
}) {
    return (
        <Item style={styles.item} floatingLabel>
            <Label>{label}</Label>
            <Input
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </Item>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
    },
    input: {
        paddingHorizontal: 10,
    },
});
