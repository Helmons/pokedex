import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';


const { Navigator, Screen } = createNativeStackNavigator()

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: string
            Details: string
        }
    }
}

export function AppStackRoutes() {
    return (
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false, animation: 'none'}}>
            <Screen
                name='Home'
                component={Home}
            />
            <Screen
                name='Details'
                component={Details}
            />
        </Navigator>
    )
}