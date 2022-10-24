import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Styles Link
import { styles } from '../styles/style';

export default function TodoList({ navigation }) {
    const [ text, setTodoList ] = useState(''); 
    const [ todoList, setTodo ] = useState([
        { name: 'Todo List', id: '1'},
        { name: 'Number Counter', id: '2'},
        { name: 'Basic Calculator', id: '3'},
    ])

    const pressDelete = (id) => {
        setTodo((prevTodos) => {
            return prevTodos.filter( todo => todo.id != id);
        });
    }

    const onChangeText = (text) => {
        setTodoList(text);
    }

    const submitHandler = (text) => {

        if(text.length >= 3) {
            setTodo((prevTodos) => {
                return [
                    { name: text, id: Math.random().toString() },
                    ...prevTodos
                ]
            });
            Keyboard.dismiss();
        }

    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.aboutContainer}>
                <View style={styles.todo}>
                    <TextInput style={styles.todoInput} onChangeText={onChangeText} placeholder="Add Todo" />
                    <View style={styles.addTodoBtn}>
                        <Button title="Add Todo" onPress={() => submitHandler(text)}/>
                    </View>
                </View> 
                <View style={styles.todoView}>
                    <FlatList 
                            numColumns={1}
                            data={todoList}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => pressDelete(item.id)}>
                                    <View style={styles.todoList}>
                                        <Text style={styles.todoName}>{ item.name }</Text>
                                        <Text style={styles.todoDeleteBtn}>
                                            <FontAwesome name="trash-o" size={24} color="#c0392b" />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}