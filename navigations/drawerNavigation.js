import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigation, AboutNavigation, LoginNavigation, TodoListStack, NumberCounterStack, BasicCalculatorStack } from "./stackNavigation";
import TabNavigation from "./tabNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Drawer.Screen name="DrawerHome" component={TabNavigation} options={{ title: "Home" }} />
            <Drawer.Screen name="DrawerTodo" component={TodoListStack} options={{ title: "Todo List" }} />
            <Drawer.Screen name="DrawerCounter" component={NumberCounterStack} options={{ title: "Number Counter" }} />
            <Drawer.Screen name="DrawerCalculator" component={BasicCalculatorStack} options={{ title: "Basic Calculator" }} />
            <Drawer.Screen name="DrawerAbout" component={AboutNavigation} options={{ title: "About" }} />
            <Drawer.Screen name="DrawerLogin" component={LoginNavigation} options={{ title: "Login" }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;