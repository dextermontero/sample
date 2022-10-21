import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Button } from 'react-native';

// Styles Link
import { styles } from '../styles/style';

export default function TodoList({ navigation }) {
    return(
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutContent}>Todo List Here</Text>

            <Button title='go back' onPress={() => navigation.goBack()}/>
        </View>
    );
}