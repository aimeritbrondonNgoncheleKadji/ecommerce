// src/components/Spinner.js

import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'native-base';

export default function Spinner() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    );
}
