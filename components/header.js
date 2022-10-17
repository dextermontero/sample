import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// Styles Link
import { styles } from '../styles/style';

export default function Header() {
    return (
        <View style={styles.Header}>
            <StatusBar style="auto" barStyle="dark-content"/>
            <Text style={styles.headerTitle}>{'Sample React Native'.toUpperCase()}</Text>
            <Text></Text>
        </View>
    )
}