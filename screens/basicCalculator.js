import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Button } from 'react-native';

// Styles Link
import { styles } from '../styles/style';

export default function BasicCalculator({ navigation }) {
    return(
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutContent}>Basic Calculator Here</Text>
            <Text></Text>
            <Button title='go back' onPress={() => navigation.goBack()}/>
        </View>
    );
}