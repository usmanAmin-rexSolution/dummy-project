import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { family_set } from '../styles/FamilySet';
import { theme } from '../constants';
import H3 from './H3';
import H6 from './H6';
import H4 from './H4';
import H5 from './H5';
import { useNavigation } from '@react-navigation/native';
import { calculateWidth } from '../utils/ScreenSize';
import appStyle from '../styles/appStyle';

interface TaskContainerProps {
    title?: string;
    description?: string;
    assignedTo?: string;
    dateRange?: string;
    price?: number;
    discountPercentage?: number;
    productRating?: number;
    productStock?: number;
    brand?: string;
    category?: string;
    productThumbnail?: string;
    productImages?: string[];
    onPress?: () => void;
}

const TaskContainer: React.FC<TaskContainerProps> = React.memo(({ onPress, title, description, price, discountPercentage, brand, category, productThumbnail }) => {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            style={styles.taskContainer}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View>
                <View style={appStyle.rowBtw}>
                    {productThumbnail && (
                        <View style={styles.thumbnail}>
                            <Image source={{ uri: productThumbnail }} style={appStyle.imgFLuid} />
                        </View>
                    )}
                    <View style={[appStyle.flex1, appStyle.ml10]}>
                        <H3 text={title} style={styles.title} noGutters />
                        <H6 numberOfLines={2} text={description} style={appStyle.mt5} />
                    </View>
                </View>

                <View style={[appStyle.rowBtw, appStyle.mv10]}>
                    <H4 text={category} noGutters />
                    <View style={{
                        backgroundColor: theme.colors.green,
                        paddingHorizontal: 10,
                        paddingVertical: 4,
                        borderRadius: 10
                    }}>
                        <H6 text={brand}
                            style={{
                                color: theme.colors.background,
                                fontFamily: family_set.semibold,
                            }}
                            noGutters
                        />
                    </View>

                </View>
            </View>
            <View style={appStyle.rowBtw}>
                <View>
                    <View style={appStyle.rowCenter}>
                        <Icon name={'price-check'} size={24} color={theme.colors.blue_light} />
                        <H5 text={`$${price?.toString()}`} style={{
                            color: theme.colors.blue_light
                        }}
                            noGutters
                            gutterLeft
                        />
                    </View>
                </View>
                <View style={appStyle.rowCenter}>
                    <View
                        style={appStyle.rowCenter}
                    >
                        <H4 text={`${discountPercentage?.toString()}% discount`} style={{
                            color: theme.colors.orange_light,
                        }}
                            noGutters
                            gutterLeft
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
});

export default TaskContainer;


const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        backgroundColor: theme.colors.white,
        borderRadius: 12,
        shadowColor: '#CCCCCC',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        elevation: 3,
        padding: 16,
        marginTop: 10
    },
    title: {
        color: theme.colors.orange_light,
    },
    thumbnail: {
        width: calculateWidth(22),
        height: calculateWidth(22),
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: theme.colors.grey_light
    }
});
