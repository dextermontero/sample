import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Login = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>Login Screen </Text>
            <Button title="Go to About Screen" onPress={() => navigation.navigate("About")} />
            <Text></Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Login;