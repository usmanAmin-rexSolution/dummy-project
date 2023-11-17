import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

import { family_set } from '../styles/FamilySet';
import { theme } from '../constants';

interface H3Props {
    containerStyle?: ViewStyle;
    style?: TextStyle;
    text?: string;
    noGutters?: Boolean;
    gutterLeft?: Boolean
}

const H3: React.FC<H3Props> = React.memo(({ text, containerStyle, style, noGutters, gutterLeft }) => {
    return (
        <View style={[styles.container, noGutters && styles.noGutters, gutterLeft && styles.gutterLeft, containerStyle]}>
            <Text style={[styles.H3, style]}>{text}</Text>
        </View>
    );
});

export default H3;

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    H3: {
        fontFamily: family_set.semibold,
        fontSize: 18,
        color: theme.colors.black
    },
    noGutters: {
        marginBottom: 0
    },
    gutterLeft: {
        marginLeft: 8
    }
});
