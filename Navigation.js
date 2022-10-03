import React from "react";
import Main from './components/Main'
import FullInfo from './components/FullInfo'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator();
export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={Main}
                option={{title: 'Glavnaya'}}
            />
            <Stack.Screen
                name='FullInfo'
                component={FullInfo}
                option={{title: 'State'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}