import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

import { family_set } from '../styles/FamilySet';
import { theme } from '../constants';

interface H1Props {
    containerStyle?: ViewStyle;
    style?: TextStyle;
    text?: string
}

const H1: React.FC<H1Props> = React.memo(({ text, containerStyle, style }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.h1, style]}>{text}</Text>
        </View>
    );
});

export default H1;

const styles = StyleSheet.create({
    container: {
       marginBottom: 16
    },
    h1: {
        fontFamily: family_set.boldSecondary,
        fontSize: 28,
        color: theme.colors.black
    }
});
