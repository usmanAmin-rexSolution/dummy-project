import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

import { family_set } from '../styles/FamilySet';
import { theme } from '../constants';

interface H2Props {
    containerStyle?: ViewStyle;
    style?: TextStyle;
    text?: string
}

const H2: React.FC<H2Props> = React.memo(({ text, containerStyle, style }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.H2, style]}>{text}</Text>
        </View>
    );
});

export default H2;

const styles = StyleSheet.create({
    container: {
       marginBottom: 16
    },
    H2: {
        fontFamily: family_set.semibold,
        fontSize: 22,
        color: theme.colors.black_light
    }
});
