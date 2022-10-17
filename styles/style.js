import { Platform, StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        
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
        fontFamily: 'sfHeavy',
    },
    card: {
        flex: 2,
        flexDirection: 'row',
        padding: 10,
    },
    cardItem: {
        flex: 1,
        fontSize: 17,
        backgroundColor: '#ecf0f1',
        width: '100%',
        marginBottom: 10,
        fontFamily: 'sfSemibold',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
        height: 100,
    }
});