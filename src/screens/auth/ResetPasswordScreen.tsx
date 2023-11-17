import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';
import { images, theme } from '../../constants';
import { calculateWidth } from '../../utils/ScreenSize';
import { family_set } from '../../styles/FamilySet';
import { ButtonComponent, H1, Header, InputComponent } from '../../components';

const ResetPasswordScreen = ({ navigation }: any) => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header
                isBack
            />
            <View style={styles.vectorContainer}>
                <Image source={images.vector_reset} style={styles.vector} />
            </View>
            <H1
                text={'Reset Password'}
            />
            <View>
                <InputComponent
                    type='password'
                    setText={setPassword}
                />
                <InputComponent
                    type='password'
                    label={'Confirm password'}
                    setText={setConfirmPassword}
                />
                <ButtonComponent
                    onPress={() => navigation.navigate('LoginScreen')}
                    label={'Submit'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 16
    },
    vectorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: calculateWidth(90),
        width: calculateWidth(90),
        alignSelf: 'center',
        paddingTop: 20
    },
    vector: {
        flex: 1,
        resizeMode: 'contain'
    },
    h1: {
        fontFamily: family_set.boldSecondary,
        fontSize: 30,
        color: theme.colors.black
    },

});

export default ResetPasswordScreen;
