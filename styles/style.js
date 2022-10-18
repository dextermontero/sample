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

    aboutContainer: {
        flex: 1,
        padding: 10,
    },
    aboutContent: {
        fontFamily: 'sfRegular',
        fontSize: 18,

    }, 
});