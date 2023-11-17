// components/SearchProductList.tsx
import React, { useEffect, useState, useCallback, memo } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'; // Import lodash
import { RootState } from '../redux/reducers/productReducer';
import { searchProducts } from '../redux/actions/productActions';
import { Product, theme } from '../constants';
import TaskContainer from './TaskContainer';
import H4 from './H4';
import { useNavigation } from '@react-navigation/native';

interface SearchProductListProps {
    query: string;
}

const SearchProductList: React.FC<SearchProductListProps> = ({ query }) => {
    const dispatch = useDispatch();
    const { searchResults, loading, error } = useSelector((state: RootState) => state.searchResults);
    const navigation = useNavigation();

    // Debounce the fetchData function
    const debouncedFetchData = useCallback(
        _.debounce(() => {
            dispatch(searchProducts(query));
        }, 500), // Adjust the delay time as needed (in milliseconds)
        [dispatch, query]
    );

    useEffect(() => {
        debouncedFetchData(); // Use the debounced function here
    }, [debouncedFetchData]);

    const renderFooter = () => {
        return loading ? <ActivityIndicator size="large" color={theme.colors.orange_light} /> : null;
    };

    return (
        <View>
            {error && <H4 text={`Error: {${error}}`} />}
            <FlatList
                data={searchResults}
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
                onEndReachedThreshold={0.8}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
};

export default memo(SearchProductList);
