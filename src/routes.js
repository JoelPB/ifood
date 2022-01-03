import React from "react";

//import { NativeScreenNavigationContainer } from "react-native-screens";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

import Home from './pages/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ Home }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;