import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, ViewStyle, View } from 'react-native';
import { theme } from '../constants';

interface ContainerProps<T> {
    children?: React.ReactNode;
    useScrollView?: boolean;
    skipSafeareaView?: boolean;
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
}

const Container = <T,>({ children, useScrollView, style, contentContainerStyle, skipSafeareaView }: ContainerProps<T>) => {
    const renderContent = () => {
        if (useScrollView) {
            return (
                <ScrollView contentContainerStyle={[styles.contentContainer, contentContainerStyle]}>
                    {children}
                </ScrollView>
            );
        }

        return (
            <View style={[styles.contentContainer, contentContainerStyle]}>
                {children}
            </View>
        );
    };

    if (skipSafeareaView) {
        return (
            <View style={[styles.skipContainer, contentContainerStyle]}>
                {children}
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, style]}>
            {renderContent()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    skipContainer: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
    },
});

export default Container;
