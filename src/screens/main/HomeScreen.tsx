import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, ScrollView, Image } from 'react-native';
import { ButtonComponent, H1, H2, H4 } from '../../components';
import { theme } from '../../constants';
import { family_set } from '../../styles/FamilySet';
import ProductList from '../../components/ProductList';
import { useAuth } from '../../context';
import appStyle from '../../styles/appStyle';

const HomeScreen = ({ navigation }: any) => {
    const { user, login, logout } = useAuth()

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={{
                marginTop: 16
            }}>
                <View style={appStyle.rowBtw}>
                    <View>
                        <H1 text='Home' containerStyle={{ marginBottom: 5 }} />
                        <H4 text={'New products'} style={styles.desc} />
                    </View>
                    {user &&
                        <View>
                            <ButtonComponent label={'Add'} onPress={() => navigation.navigate("CreateScreen")} />
                        </View>
                    }
                </View>

            </View>
            <View>
                <H2 text='All Products' containerStyle={{ marginBottom: 0, marginTop: 16 }} />
            </View>

            <View style={styles.scrollPree}>
                <ProductList />
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
    desc: {
        color: theme.colors.primary,
        fontSize: 14
    },
    searchContainer: {
        flex: 1,
        marginTop: 5,
        backgroundColor: theme.colors.white,
        height: 52,
        borderRadius: 28,
        shadowColor: '#CCCCCC',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center'

    },
    searchInput: {
        fontSize: 14,
        color: theme.colors.black,
        fontFamily: family_set.regular,
        paddingRight: 16,
        height: 52,
    },
    scrollPree: {
        flex: 1,
    },
    scroll: {
        flexGrow: 1
    },

});

export default HomeScreen;
