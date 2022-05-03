import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { AppTabRoutes } from './app.tab.routes';


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
        <Navigator initialRouteName="AppTabRoutes" screenOptions={{headerShown: false, animation: 'none'}}>
            <Screen
                name='AppTabRoutes'
                component={AppTabRoutes}
            />
            <Screen
                name='Details'
                component={Details}
            />
        </Navigator>
    )
}