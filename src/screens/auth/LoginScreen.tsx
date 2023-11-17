import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, ScrollView } from 'react-native';
import { images, theme } from '../../constants';
import { calculateWidth } from '../../utils/ScreenSize';
import { family_set } from '../../styles/FamilySet';
import { ButtonComponent, H1, H5, InputComponent, Link } from '../../components';

const LoginScreen = ({ navigation }: any) => {

    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [loginType, setLoginType] = useState(0)

    const onPressToggleLoginType = () => {
        if (loginType == 0) {
            setLoginType(1)
            return
        }

        setLoginType(0)
        return
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.vectorContainer}>
                <Image source={images.vector_login} style={styles.vector} />
            </View>
            <H1
                text={'Login'}
            />

            <View style={{
                flex: 1
            }}>
                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <InputComponent
                            type='phone'
                            setText={setPhone}
                        />
                        <InputComponent
                            type='password'
                            setText={setPassword}
                        />
                        {loginType == 0 &&
                            <Link
                                onPress={() => navigation.navigate('ForgotPasswordScreen')}
                                text='Forgot Password?' />
                        }
                        <ButtonComponent label={'Login'} onPress={() => navigation.navigate('HomeScreen')} />
                        {loginType == 0 &&
                            <Link
                                onPress={() => navigation.navigate('SignupScreen')}
                                containerStyle={{
                                    alignSelf: 'center'
                                }} preText={'New to Spotter?'} text='Register' />
                        }

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 16
                        }}>
                            <View style={{
                                width: calculateWidth(40),
                                height: 1,
                                backgroundColor: theme.colors.grey_lighter
                            }} />
                            <View>
                                <H5 text='OR'
                                    style={{
                                        color: theme.colors.grey_light
                                    }}
                                    containerStyle={{
                                        width: calculateWidth(8),
                                        marginBottom: 0,
                                        alignItems: 'center'
                                    }} />
                            </View>
                            <View style={{
                                width: calculateWidth(40),
                                height: 1,
                                backgroundColor: theme.colors.grey_lighter
                            }} />
                        </View>
                        <Link
                            onPress={onPressToggleLoginType}
                            containerStyle={{
                                alignSelf: 'center',
                            }} style={{
                                textDecorationLine: 'underline',
                                textDecorationColor: theme.colors.black_light,
                                fontFamily: family_set.semibold
                            }} text={`Login as ${loginType == 0 ? 'Admin' : 'User'}`} />

                    </View>
                </ScrollView>
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
    scroll: {
        flexGrow: 1
    }

});

export default LoginScreen;
