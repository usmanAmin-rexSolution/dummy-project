import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, ScrollView, Image } from 'react-native';
import { ButtonComponent, H1, H2, H3, H4, H5, H6, Header, InputComponent, MenuComponent, TaskContainer, TaskDetails } from '../../components';
import { Product, theme } from '../../constants';
import { family_set } from '../../styles/FamilySet';
import { useRoute } from '@react-navigation/native';

const TaskDetailScreen = ({ }: any) => {

    const route = useRoute()
    const payload: Product = route?.params?.payload;

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header
                isTitle='Product details'
                alignTitle='flex-start'
                isBack
            />

            <View style={styles.scrollPree}>
                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsVerticalScrollIndicator={false}
                >
                    <TaskDetails
                        productThumbnail={payload.thumbnail}
                        title={payload.title}
                        description={payload.description}
                        price={payload.price}
                        discountPercentage={payload.discountPercentage}
                        rating={payload.rating}
                        stock={payload.stock}
                        brand={payload.brand}
                        category={payload.category}
                        productImages={payload.images}
                    />

                    {/* <View style={{
                        marginBottom: 16,
                        paddingHorizontal: 5
                    }}>
                        <ButtonComponent label={'Upload Images'} onPress={() => navigation.navigate('CategoryDetailScreen')} />
                    </View> */}
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

export default TaskDetailScreen;
