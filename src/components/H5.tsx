import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

import { family_set } from '../styles/FamilySet';
import { theme } from '../constants';

interface H5Props {
    containerStyle?: ViewStyle;
    style?: TextStyle;
    text?: string;
    noGutters?: Boolean;
    gutterLeft?: Boolean

}

const H5: React.FC<H5Props> = React.memo(({ text, containerStyle, style, noGutters, gutterLeft }) => {
    return (
        <View style={[styles.container, noGutters && styles.noGutters, gutterLeft && styles.gutterLeft,  containerStyle]}>
            <Text style={[styles.H5, style]}>{text}</Text>
        </View>
    );
});

export default H5;

const styles = StyleSheet.create({
    container: {
       marginBottom: 16
    },
    H5: {
        fontFamily: family_set.medium,
        fontSize: 14,
        color: theme.colors.black_light
    },
    noGutters:{
        marginBottom: 0
    },
    gutterLeft:{
        marginLeft: 8
    }
});
