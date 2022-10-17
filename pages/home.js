import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Styles Link
import { styles } from '../styles/style';

// Components Link
import Header from "../components/header";

export default function Home() {
    const [ sampleApp, setApp ] = useState([
        { name: 'Todo List', id: '1'},
        { name: 'Number Counter', id: '2'},
        { name: 'Basic Calculator', id: '3'},
        { name: '4', id: '4'},
        { name: '5', id: '5'},
        { name: '6', id: '6'},
        { name: '7', id: '7'},
        { name: '8', id: '8'},
        { name: '9', id: '9'},
        { name: '10', id: '10'},
        { name: '11', id: '11'},
        { name: '12', id: '12'},
        { name: '13', id: '13'},
        { name: '14', id: '14'},
        { name: '15', id: '15'},
        { name: '16', id: '16'},
    ])

    const pressHandler = (val) => {
        console.log(val);
    }

    return (
        <View style={styles.bodyScreen}>
            <Header />
            <View style={styles.card}> 
                <FlatList 
                    numColumns={1}
                    data={sampleApp}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => pressHandler(item.id)}>
                            <Text style={styles.cardItem}>{ item.name }</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}