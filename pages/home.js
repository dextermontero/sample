/* import 'react-native-gesture-handler'; */
import React, { Component, useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
// Import Components
import Card from '../components/card';

// Styles Link
import { styles } from '../styles/style';



export default function Home( { navigation }) {
    const onPressAbout = () => {
        navigation.navigate('About');
    }

    const [ sampleApp, setApp ] = useState([
        { title: 'Todo List', name: 'todoList', id: '1'},
        { title: 'Number Counter', name: 'numberCounter', id: '2'},
        { title: 'Basic Calculator', name: 'basicCalculator', id: '3'},
    ])

    const pressHandler = (val) => {
        navigation.navigate(val);
    }

    return (
        <View style={styles.bodyScreen}>
            <FlatList 
                numColumns={2}
                data={sampleApp}
                renderItem={({ item, index }) => {
                    const lastItem = index === sampleApp.length - 1;
                    return (
                        <View style={{flex: 1, padding: 0, maxWidth: lastItem ? '50%' : '100%'}}>
                            <TouchableOpacity onPress={() => pressHandler(item.name)}>
                                <Card>
                                    <Text style={styles.cardItem}>{ item.title }</Text>
                                </Card>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <View>
                <Button title='Go to About' onPress={onPressAbout}/>        
            </View>
        </View>
    )
}