import React from 'react';
import { View, Text, Button } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../pages/home';
import AboutScreen from '../pages/about';
import todoListScreen from '../pages/todoList';
import numberCounterScreen from '../pages/numberCounter';
import basicCalculatorScreen from '../pages/basicCalculator';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: '',
            }
        },
        About: {
            screen: AboutScreen,
            navigationOptions: {
                title: 'About Us',
            }
        },
        todoList: {
            screen: todoListScreen,
            navigationOptions: {
                title: 'Todo List',
            }
        },
        numberCounter: {
            screen: numberCounterScreen,
            navigationOptions: {
                title: 'Number Counter',
            }
        },
        basicCalculator: {
            screen: basicCalculatorScreen,
            navigationOptions: {
                title: 'Basic Calculator',
            }
        },
    },
    {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: "#16a085"
            }
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Index extends React.Component {
    render() {
        return <AppContainer />
    }
}

