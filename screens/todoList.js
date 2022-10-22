import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Styles Link
import { styles } from '../styles/style';

export default function TodoList({ navigation }) {
    const [ sampleApp, setApp ] = useState([
        { name: 'Todo List', id: '1'},
        { name: 'Number Counter', id: '2'},
        { name: 'Basic Calculator', id: '3'},
    ])

    const pressHandler = (val) => {
        console.log(val);
    }
    return(
        <View style={styles.aboutContainer}>
            <View style={styles.todo}>
                <TextInput style={styles.todoInput} placeholder="Add Todo" />
                <View style={styles.addTodoBtn}>
                    <Button title="Add Todo"/>
                </View>
            </View>
            <View style={styles.todoItem}>
                <FlatList 
                        numColumns={1}
                        data={sampleApp}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressHandler(item.id)}>
                                <Text style={styles.todoList}>{ item.name }</Text>
                            </TouchableOpacity>
                        )}
                    />               
                <View>
                <FlatList 
                        numColumns={1}
                        data={sampleApp}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressHandler(item.id)}>
                                <Text style={styles.delTodoBtn}>
                                    <FontAwesome name="trash-o" size={24} color="#c0392b" />
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>

        </View>
    );
}