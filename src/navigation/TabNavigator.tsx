import React, { useState } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBar } from '../components';
import { HomeScreen, SearchScreen, SettingsScreen } from '../screens';
import { TabNavigatorStackParamList } from '../constants';

const Tab = createBottomTabNavigator<TabNavigatorStackParamList>();

const TabNavigator: React.FC = () => {
    const [hideBar, setHideBar] = useState(false)

    return (
        <Tab.Navigator tabBar={props => !hideBar ? <TabBar {...props} /> : <View />}>
            <Tab.Screen name="HomeTab" component={HomeScreen}
                options={{ title: 'Home', headerShown: false }}
            />
            <Tab.Screen name="SearchTab" component={SearchScreen}
                options={{ title: 'Search', headerShown: false }}
            />
            <Tab.Screen name="AccountTab" component={SettingsScreen} options={{ title: 'Account', headerShown: false }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
