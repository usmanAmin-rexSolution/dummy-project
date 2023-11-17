// components/ProductList.tsx
import React, { useEffect, useState, useCallback, memo } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/productReducer';
import { fetchProducts } from '../redux/actions/productActions';
import { Product, theme } from '../constants';
import TaskContainer from './TaskContainer';
import H4 from './H4';
import { useNavigation } from '@react-navigation/native';

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state: RootState) => state.product);
    const navigation = useNavigation()
    const [page, setPage] = useState<number>(0);

    const fetchData = useCallback(() => {
        dispatch(fetchProducts(page));
    }, [dispatch, page]);

    useEffect(() => {
        fetchData();
    }, [fetchData]); // Include fetchData in the dependency array

    const loadMore = useCallback(() => {
        // Increment the page when more products are requested
        setPage((prevPage) => prevPage + 1);
    }, []);

    const renderFooter = () => {
        return loading ? <ActivityIndicator size="large" color={theme.colors.orange_light} /> : null;
    };

    return (
        <View>
            {error && <H4 text={`Error: {${error}}`} />}
            <FlatList
                data={products}
                keyExtractor={(item: Product, index: number) => index.toString()}
                renderItem={({ item }: { item: Product }) => (
                    <TaskContainer
                        onPress={() => navigation.navigate('TaskDetailScreen', {
                            payload: item
                        })}
                        productThumbnail={item.thumbnail}
                        title={item.title}
                        description={item.description}
                        brand={item.brand}
                        category={item.category}
                        price={item.price}
                        discountPercentage={item.discountPercentage}
                    />
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.8}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
};

export default memo(ProductList);
