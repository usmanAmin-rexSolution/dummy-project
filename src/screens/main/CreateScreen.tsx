import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, ScrollView, Image } from 'react-native';
import { ButtonComponent, H1, H2, H3, H4, H5, H6, Header, InputComponent, Link, TaskContainer } from '../../components';
import { Product, theme } from '../../constants';
import { family_set } from '../../styles/FamilySet';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/productActions';
import { _showToast } from '../../utils/ToastUtils';

const CreateScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    const [discountPercentage, setDiscountPercentage] = useState(0)
    const [rating, setRating] = useState(0)
    const [stock, setStock] = useState(0)
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [images, setImages] = useState([])

    const handleAddProduct = async () => {

        try {
            const newProduct: Product = {
                id: 1,
                title,
                description: desc,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                thumbnail,
                images
            };

            dispatch(
                addProduct(newProduct)
            );

            _showToast("green", "Product added.")
            navigation.goBack()
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View>
                <View>
                    <Header isTitle='Add a product' />
                </View>
            </View>

            <View style={styles.scrollPree}>
                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{
                        flex: 1
                    }}>
                        <InputComponent
                            type='name'
                            label={'Title'}
                            setText={setTitle}
                        />
                        <InputComponent
                            type='name'
                            label={"Price"}
                            setText={setPrice}
                        />
                        <InputComponent
                            type='name'
                            label={'Discount'}
                            setText={setDiscountPercentage}
                        />
                        <InputComponent
                            type='name'
                            label={'Rating'}
                            setText={setRating}
                        />
                        <InputComponent
                            type='name'
                            label={'Stock'}
                            setText={setStock}
                        />
                        <InputComponent
                            type='name'
                            label={'Brand'}
                            setText={setBrand}
                        />
                        <InputComponent
                            type='name'
                            label={'Category'}
                            setText={setCategory}
                        />
                        <InputComponent
                            type='name'
                            label={'Description'}
                            setText={setDesc}
                            multiline
                        />
                    </View>
                    <ButtonComponent label={'Submit'} onPress={handleAddProduct} />
                    <View style={{ height: 100 }} />
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

export default CreateScreen;
