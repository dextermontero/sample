import React from "react";
import  { View, StyleSheet } from 'react-native';
import { styles } from "../styles/style";

export default function Card(props){
    return (
        <View style={style.cardBody}>
            <View style={style.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    cardBody: {
        padding: 10,
    },
    cardContent: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 6,
        elevation: 1,
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.4,
        shadowColor: '#333',
        shadowRadius: 3,
        height: 100,
    }
})