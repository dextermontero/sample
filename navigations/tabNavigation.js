import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigation, AboutNavigation, LoginNavigation } from "./stackNavigation";
const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}> 
            <Tabs.Screen name="home" component={StackNavigation} options={{ title: "Home" }} />
            <Tabs.Screen name="about" component={AboutNavigation} options={{ title: "About" }} />
            <Tabs.Screen name="login" component={LoginNavigation} options={{ title: "Login" }} />
        </Tabs.Navigator>
    );
}

export default TabNavigation;