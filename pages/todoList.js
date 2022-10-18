import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';

// Styles Link
import { styles } from '../styles/style';

export default function todoList({ navigation }) {
    return(
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutContent}>Todo List Here</Text>

            <Button title='go back' onPress={() => navigation.goBack()}/>
        </View>
    );
}