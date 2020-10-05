import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import Login from '../views/login';
import Otp from '../views/otp';
import Home from '../views/home';
import ProgramDetail  from '../views/programdetail';

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();

export function LoginScreens() {
    return (
        <LoginStack.Navigator
        mode='modal'
        initialRouteName='Login'
        screenOptions={{
            headerShown: false
        }}>
            <LoginStack.Screen name='Login' component={Login}/>
            <LoginStack.Screen name='Otp' component={Otp}/>
        </LoginStack.Navigator>
    )
}


export function HomeScreens() {
    return (
        <HomeStack.Navigator
        initialRouteName='home'
        screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name='home' component={Home}/>
            <HomeStack.Screen name='programdetail' component={ProgramDetail}/>
        </HomeStack.Navigator>
    )
}