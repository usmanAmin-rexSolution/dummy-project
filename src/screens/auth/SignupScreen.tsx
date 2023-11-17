import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, SafeAreaView } from 'react-native';
import { images, theme } from '../../constants';
import { calculateWidth } from '../../utils/ScreenSize';
import { family_set } from '../../styles/FamilySet';
import { ButtonComponent, H1, H2, H3, H4, H5, Header, InputComponent, Link } from '../../components';

const SignupScreen = ({ navigation }: any) => {

    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("")

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header
                isBack
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.vectorContainer}>
                    <Image source={images.vector_signup} style={styles.vector} />
                </View>
                <H1
                    text={'Signup'}
                />
                <View>
                    <InputComponent
                        type='phone'
                        setText={setPhone}
                    />
                    <InputComponent
                        type='name'
                        setText={setName}
                    />
                    <InputComponent
                        type='password'
                        setText={setPassword}
                    />
                    <InputComponent
                        type='password'
                        label={'Confirm passwoord'}
                        setText={setConfirmPassword}
                    />
                    <ButtonComponent label={'Signup'} />
                    <Link
                        onPress={() => navigation.navigate('LoginScreen')}
                        containerStyle={{
                            alignSelf: 'center'
                        }} preText={'Already have an account?'} text='Login' />

                </View>
            </ScrollView>

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
        height: calculateWidth(50),
        width: calculateWidth(50),
        alignSelf: 'center',
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

export default SignupScreen;
