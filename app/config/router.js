import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Login from '../views/login';
import Otp from '../views/otp';
import OtpValidate from '../views/otpvalidate';
import Home from '../views/home';
import DrawerCustom from '../components/drawer/drawercustom';

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();


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
            <LoginStack.Screen name='OtpValidate' component={OtpValidate}/>
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
        </HomeStack.Navigator>
    )
}

export function DrawerTabs() {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType={'front'}
        drawerStyle={{ width: undefined }}
        drawerContent={(props) => <DrawerCustom {...props} />}
        drawerContentOptions={{
            itemStyle: {
                width: 50
            }
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Search" component={<></>} />
        <Drawer.Screen name="Download" component={<></>} />
        <Drawer.Screen name="More" component={<></>} /> */}
      </Drawer.Navigator>
    );
  }