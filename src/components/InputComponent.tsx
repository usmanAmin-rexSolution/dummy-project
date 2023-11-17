import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-paper';

import { family_set } from '../styles/FamilySet';
import { theme } from '../constants';

interface InputComponentProps {
    containerStyle?: ViewStyle;
    label?: string | undefined;
    setText?: (text: string) => void; // Update the type to 'string' instead of 'String'
    type?: 'phone' | 'password' | 'email' | 'name';
    multiline?: boolean;
}

const InputComponent: React.FC<InputComponentProps> = React.memo(({ containerStyle, setText, label, type, multiline }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [textString, setTextString] = useState('');

    const onChangeText = (text: string) => {
        setTextString(text);
        setText && setText(text); // Check if setText exists before calling it
    };

    const typeContentProp = type === 'phone' ? 'telephoneNumber' : type === 'email' ? 'emailAddress' : type === 'password' ? 'password' : 'name';
    const typeKeyboardProp = type === 'phone' ? 'phone-pad' : type === 'email' ? 'email-address' : type === 'password' ? 'visible-password' : 'name-phone-pad';
    const typeLabelProp = type === 'phone' ? 'Phone' : type === 'email' ? 'Email' : type === 'password' ? 'Password' : type == 'name' ? 'Name' : label;

    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                label={label ?? typeLabelProp}
                value={textString}
                onChangeText={text => onChangeText(text)}
                style={[styles.input, {
                    height: multiline ? 100 : 48,
                }]}
                numberOfLines={5}
                textContentType={typeContentProp}
                keyboardType={typeKeyboardProp}
                mode="outlined"
                textColor={theme.colors.black}
                placeholderTextColor={theme.colors.placeholder}
                secureTextEntry={type === 'password' ? isVisible : false} // Set secureTextEntry based on type == 'password'
                right={type === 'password' ? <TextInput.Icon icon={isVisible ? 'eye' : 'eye-off'} color={theme.colors.grey_light} style={{
                    marginTop: 6
                }} onPress={() => setIsVisible(!isVisible)} /> : null}
                multiline={multiline}
            />
        </View>
    );
});

export default InputComponent;

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    input: {
        backgroundColor: theme.colors.background,
        fontFamily: family_set.regular,
    },
});
