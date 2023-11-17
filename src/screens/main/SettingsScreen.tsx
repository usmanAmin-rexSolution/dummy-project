import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ButtonComponent, Header, InputComponent } from '../../components';
import { theme } from '../../constants';
import { family_set } from '../../styles/FamilySet';
import { ScrollView } from 'react-native';
import { useAuth } from '../../context';
import appStyle from '../../styles/appStyle';
import { _showToast } from '../../utils/ToastUtils';


const SettingsScreen = ({ navigation }: any) => {
    const { user, login, logout } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onLogin = async () => {
        if (!_validate()) {
            return
        }

        const result = await login(email, password)
        if (result.success) {
            _showToast('green', "Logged in successfully")
        }
    }

    const _validate = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            _showToast('blue', "Invalid email address")
            return false;
        }
        // Password length validation
        if (password.length < 6) {
            _showToast('blue', "Password must be at least 6 characters")
            return false;
        }

        return true;
    }



    return (
        <View style={[styles.container, {
            backgroundColor: user ? theme.colors.background : theme.colors.white,
            marginTop: 0,
            marginHorizontal: 0,
            marginBottom: 0
        }]}>
            <SafeAreaView />
            <Header isTitle='Account' />
            <View style={[styles.container, {
                backgroundColor: user ? theme.colors.orange_light : theme.colors.background,
            }]}>
                {user &&
                    <View style={styles.logoContainer}>
                        <Icon
                            name={'account'}
                            color={theme.colors.background}
                            size={52}
                        />
                    </View>
                }
                {user &&
                    <View style={{
                        alignItems: 'center',
                        marginTop: 5
                    }}>
                        <Text style={styles.profileTitle}>{user?.name}</Text>
                        <Text style={styles.profileDesc}>{user?.email}</Text>
                    </View>
                }
                <View style={appStyle.flex1}>
                    <ScrollView
                        contentContainerStyle={styles.scroll}
                        showsVerticalScrollIndicator={false}
                    >
                        {!user &&
                            <>
                                <View style={[appStyle.mt20, appStyle.aiCenter]}>
                                    <Text style={[styles.profileTitle, {
                                        color: theme.colors.orange_light
                                    }]}>Login</Text>
                                </View>
                                <View style={[appStyle.ph16, appStyle.mt20]}>
                                    <InputComponent
                                        type='email'
                                        label={'Email'}
                                        setText={setEmail}
                                    />
                                    <InputComponent
                                        type='password'
                                        label={"Password"}
                                        setText={setPassword}
                                    />
                                </View>

                                <View style={styles.navContainer}>
                                    <ButtonComponent label={'Submit'} onPress={onLogin} />
                                </View>
                            </>
                        }
                        {user &&
                            <View style={styles.navContainer}>
                                <TouchableOpacity style={[styles.navItem, {
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12
                                }]}
                                    onPress={() => logout()}
                                >
                                    <View style={styles.navItemLeft}>
                                        <Icon
                                            name={'logout'}
                                            color={theme.colors.primary}
                                            size={28}
                                        />
                                        <Text style={styles.navTitle}>Log out</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    </ScrollView>
                </View>
                <View style={{ height: 120 }} />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        backgroundColor: theme.colors.background,
        flex: 1,
        paddingTop: 30
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 50,
        marginBottom: 20,
        borderRadius: 40,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    logoContainer: {
        width: 80,
        height: 80,
        padding: 5,
        borderWidth: 2,
        borderColor: theme.colors.background,
        backgroundColor: theme.colors.orange_light,
        borderRadius: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -40,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    statsContainer: {
        borderRadius: 12,
        backgroundColor: theme.colors.background,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    statsItem: {
        paddingHorizontal: 16,
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1
    },
    statsTitle: {
        fontSize: 15,
        fontFamily: family_set.semibold,
        color: theme.colors.black_light,
        textTransform: 'uppercase',
        marginTop: 7
    },
    statsSubtitle: {
        fontSize: 20,
        fontFamily: family_set.black,
        letterSpacing: 1.3,
        color: theme.colors.secondary,
        textTransform: 'uppercase',
    },
    border: {
        width: 3,
        height: '100%',
        backgroundColor: theme.colors.orange_light
    },
    navContainer: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 16
    },
    navItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 5,
    },
    navItemLeft: {
        flexDirection: 'row',
        paddingRight: 12,
        alignItems: 'center',
        flex: 1
    },
    navTitle: {
        fontSize: 15,
        fontFamily: family_set.semibold,
        color: theme.colors.grey,
        textTransform: 'capitalize',
        marginLeft: 15
    },
    profileTitle: {
        fontSize: 22,
        fontFamily: family_set.semibold,
        color: theme.colors.background,
        textTransform: 'capitalize',
    },
    profileDesc: {
        fontSize: 14,
        fontFamily: family_set.medium,
        color: theme.colors.background,
    },
    profileNumber: {
        fontSize: 14,
        fontFamily: family_set.mediumSecondary,
        color: theme.colors.white,
        marginTop: 5
    },
    scroll: {
        flexGrow: 1
    }
});

export default SettingsScreen;
