import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Text, Button, TextInput } from 'react-native';

// Styles Link
import { styles } from '../styles/style';

export default function NumberCounter({ navigation }) {
    const [ counter, setCounter ] = useState(0);
    const [ logs, setLogs ] = useState("");

    const onPressDecrease = () => {
        if(counter === 0){
            setLogs("Counter cannot decrease");
        }else{
            setCounter(counter - 1);
            setLogs("Counter Decrease by 1");
        }
    }

    const onPressIncrease = () => {
        setCounter(counter + 1);
        setLogs("Counter Increase by 1");
    }

    const onPressReset = () => {
        setCounter(0);
        setLogs("Counter Reset");
    }
    return(
        <View style={styles.Counter}>
            <View style={styles.NumberCounter}>
                <Text style={styles.counterItem}>{counter}</Text>
                <View style={styles.btnList}>
                    <Text style={styles.counterDecrease}>
                        <Button title="Decrease" onPress={onPressDecrease}/>
                    </Text>
                    <Text style={styles.counterIncrease}>
                        <Button title="Increase" onPress={onPressIncrease}/>
                    </Text>
                    <Text style={styles.counterReset}>
                        <Button title="Reset" style={styles.btnReset} onPress={onPressReset}/>
                    </Text>
                </View>
                <View style={styles.logViews}>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    style={styles.counterLogs}
                    editable={false}
                    value={logs}
                />
                </View>
            </View>
        </View>
    );
}