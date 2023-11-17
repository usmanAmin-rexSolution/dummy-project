import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, ScrollView, Image } from 'react-native';
import { ButtonComponent, H1, H2, H3, H4, H5, H6, Header, InputComponent, Link, MenuComponent, TaskContainer } from '../../components';
import { theme } from '../../constants';
import { family_set } from '../../styles/FamilySet';
import { IconButton, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { calculateWidth } from '../../utils/ScreenSize';
import ProductList from '../../components/ProductList';
import SearchProductList from '../../components/SearchProductList';

const SearchScreen = ({ navigation }: any) => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [assignee, setAssignee] = useState("")
    const [address, setAddress] = useState("")


    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View>
                <Header isTitle='Search Product' />
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={styles.searchContainer}>
                    <IconButton
                        icon={'magnify'}
                        disabled
                        iconColor={theme.colors.grey_lighter}
                    />
                    <TextInput
                        placeholder='Search..'
                        style={styles.searchInput}
                        onChangeText={(text: string) => setSearchTerm(text)}
                        value={searchTerm}
                    />
                </View>
            </View>

            <View style={styles.scrollPree}>
                <View
                    style={styles.scroll}
                >
                    {searchTerm?.length > 2 &&
                        <SearchProductList query={searchTerm} />
                    }
                    <View style={{ height: 100 }} />
                </View>
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
        marginVertical: 5,
        backgroundColor: theme.colors.white,
        width: calculateWidth(100) - 32,
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

export default SearchScreen;
