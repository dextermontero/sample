import React from "react";
import { View, Text, Button } from "react-native";

const AboutScreen = ({ navigation }) => {
    return(
        <View>
            <Text>About Screen</Text>
            <Button title='Go to Login' onPress={() => navigation.navigate('Login')}/>
            <Text></Text>
            <Button title="Back to Home Screen" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default AboutScreen;