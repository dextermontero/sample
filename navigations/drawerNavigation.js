import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigation, AboutNavigation, LoginNavigation } from "./stackNavigation";
import TabNavigation from "./tabNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Drawer.Screen name="DrawerHome" component={TabNavigation} options={{ title: "Home" }} />
            <Drawer.Screen name="DrawerAbout" component={AboutNavigation} options={{ title: "About" }} />
            <Drawer.Screen name="DrawerLogin" component={LoginNavigation} options={{ title: "Login" }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;