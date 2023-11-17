import React, { useEffect, useState } from 'react';
import { View, StatusBar, Platform, NativeModules, StatusBarStyle } from 'react-native';
import { theme } from '../constants';

interface StatusBarProps {
    hidden?: boolean | false;
    backgroundColor?: string;
    merge?: boolean;
    hideOverlay?: boolean;
    barStyle?: StatusBarStyle;
}

const StatusBarComponent: React.FC<StatusBarProps> = ({ hidden, backgroundColor = theme.colors.background, merge = false, barStyle = 'light-content', hideOverlay = false }) => {
    const { StatusBarManager } = NativeModules;
    const [statusBarHeight, setStatusBarHeight] = useState<number | undefined>(undefined);

    const isIOS = Platform.OS === 'ios';

    useEffect(() => {
        async () => {
            await getBarHeight();
        }
    }, []);

    const getBarHeight = async () => {
        if (isIOS) {
            const height = await getStatusbarHeight();
            setStatusBarHeight(height as number);
        }
    }

    const getStatusbarHeight = async () => {
        return new Promise((resolve) => {
            StatusBarManager.getHeight((statusBarHeight: { height: number }) => {
                resolve(statusBarHeight.height);
            });
        });
    }

    return (
        <>
            {isIOS && statusBarHeight && !merge && !hideOverlay && (
                <View style={{ height: 56, backgroundColor: backgroundColor }} />
            )}
            <StatusBar hidden={hidden} translucent={merge} barStyle={barStyle} backgroundColor={backgroundColor} />
        </>
    );
};


export default StatusBarComponent;
