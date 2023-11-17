// Navigation.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, TaskDetailScreen } from '../screens';
import CategoryDetailScreen from '../screens/main/CategoryDetailScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} options={{
                headerShown: false,
            }}
            />
            <Stack.Screen name="CategoryDetailScreen" component={CategoryDetailScreen} options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
    );
};

export default HomeNavigator;