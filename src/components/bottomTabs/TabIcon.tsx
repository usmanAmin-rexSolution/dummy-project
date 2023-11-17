import React from 'react';
import { IconButton } from 'react-native-paper';

interface TabIconProps {
    focused: boolean;
    icon: string;
}

const TabIcon: React.FC<TabIconProps> = ({ focused, icon }) => {
    const color = focused ? '#000000' : '#CCCCCC';

    return <IconButton icon={icon} size={20} iconColor={color} />;
};

export default TabIcon;
