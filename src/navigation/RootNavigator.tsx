// Navigation.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CreateScreen, LoginScreen, SplashScreen, TaskDetailScreen } from '../screens';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from '../constants';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
                <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} />
                <Stack.Screen name="CreateScreen" component={CreateScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;