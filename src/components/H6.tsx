import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

import { family_set } from '../styles/FamilySet';
import { theme } from '../constants';

interface H6Props {
    containerStyle?: ViewStyle;
    style?: TextStyle;
    text?: string;
    noGutters?: Boolean;
    gutterLeft?: Boolean;
    numberOfLines?: number
}

const H6: React.FC<H6Props> = React.memo(({ text, containerStyle, style, noGutters, gutterLeft, numberOfLines }) => {
    return (
        <View style={[styles.container, noGutters && styles.noGutters, gutterLeft && styles.gutterLeft, containerStyle]}>
            <Text numberOfLines={numberOfLines} style={[styles.H6, style]}>{text}</Text>
        </View>
    );
});

export default H6;

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    H6: {
        fontFamily: family_set.regular,
        fontSize: 12,
        color: theme.colors.grey_light
    },
    noGutters: {
        marginBottom: 0
    },
    gutterLeft: {
        marginLeft: 8
    }
});
