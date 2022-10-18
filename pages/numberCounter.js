import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';

// Styles Link
import { styles } from '../styles/style';

export default function numberCounter({ navigation }) {
    return(
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutContent}>Number Counter Here</Text>

            <Button title='go back' onPress={() => navigation.goBack()}/>
        </View>
    );
}