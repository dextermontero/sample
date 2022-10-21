import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import About from "../screens/about";
import Login from "../screens/login";
import BasicCalculator from "../screens/basicCalculator";
import TodoList from "../screens/todoList";
import NumberCounter from "../screens/numberCounter";

import { CustomizeHeader } from "./customizeHeader";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={CustomizeHeader}>
            <Stack.Screen name="Home" component={Home} options={{ title: "Home" }}/>
            <Stack.Screen name="TodoList" component={TodoList} options={{ title: "Todo List" }}/>
            <Stack.Screen name="NumberCounter" component={NumberCounter} options={{ title: "Number Counter" }}/>
            <Stack.Screen name="BasicCalculator" component={BasicCalculator} options={{ title: "Basic Calculator" }}/>
        </Stack.Navigator>
    );
}

const AboutNavigation = () => {
    return (
        <Stack.Navigator screenOptions={CustomizeHeader}>
            <Stack.Screen name="About" component={About} options={{ title: "About" }}/>
        </Stack.Navigator>
    );
}

const LoginNavigation = () => {
    return (
        <Stack.Navigator screenOptions={CustomizeHeader}>
            <Stack.Screen name="Login" component={Login} options={{ title: "Login" }}/>
        </Stack.Navigator>
    );
}


export { StackNavigation, AboutNavigation, LoginNavigation };