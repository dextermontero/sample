import { Platform, StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
    Header: {
        backgroundColor: '#16a085',
        paddingTop: Platform.OS === 'android' ? getStatusBarHeight() +5 : 0,
    },
    headerTitle: {
        paddingLeft: 10,
        marginTop: 20,
        fontSize: 22,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'sfHeavy',
    },
    cardItem: {
        fontSize: 17,
        backgroundColor: '#fff',
        width: '100%',
        marginBottom: 10,
        fontFamily: 'sfSemibold',
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 100,
    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    todoInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        padding: 10,
    },
    addTodoBtn: {
        marginVertical: 10,
    },

    todoView: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
    todoList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5,
    },
    todoName: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'grey',
        borderRadius: 6,
        padding: 10,
        fontFamily: 'sfBold',
        width: '85%',
        fontSize: 18,
        textAlignVertical: 'center',
    },
    todoDeleteBtn: {
        marginLeft: 10,
        borderRadius: 6,
        padding: 10,
        marginVertical: 5,
    },

    Counter: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    NumberCounter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterItem: {
        fontFamily: 'sfBold',
        fontSize: 80,
    },
    btnList: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    counterIncrease: {
        marginLeft: 15,
        marginRight: 15,
    },
    counterLogs: {
        borderWidth: 1,
        borderColor: '#999',
        textAlignVertical: 'top',
        borderRadius: 8,
        justifyContent: 'flex-start',
        width: 350,
        height: 250,
        padding: 10,
        color: "#333",
    },
    aboutContainer: {
        flex: 1,
        padding: 10,
    },
    aboutContent: {
        fontFamily: 'sfRegular',
        fontSize: 18,

    }, 
});