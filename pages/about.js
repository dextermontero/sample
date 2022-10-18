import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';

import { Index } from '../routes/index';

// Styles Link
import { styles } from '../styles/style';

export default function About({ navigation }) {
    return(
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutContent}>This sample react native expo-cli it's all about myself learning. </Text>

            <Button title='go back' onPress={() => navigation.goBack()}/>
        </View>
    );
}