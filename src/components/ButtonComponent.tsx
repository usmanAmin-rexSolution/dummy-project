import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

import { family_set } from '../styles/FamilySet';

interface ButtonComponentProps {
    containerStyle?: ViewStyle;
    label?: string | undefined;
    onPress?: () => void;
    mode?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = React.memo(({ containerStyle, onPress, label, mode }) => {

    return (
        <View style={[styles.container, containerStyle]}>
            <Button
                onPress={onPress}
                style={{
                    borderRadius: 12,
                }}
                labelStyle={{
                    fontFamily: family_set.semibold,
                    fontWeight: '600',
                    fontSize: 16,
                    lineHeight: 26,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                mode={'contained' ?? mode}
                contentStyle={{
                    height: 48,
                }}
            >
                {label}
            </Button>
        </View>
    );
});

export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
});
