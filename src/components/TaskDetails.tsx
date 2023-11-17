import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { family_set } from '../styles/FamilySet';
import { images, theme } from '../constants';
import H3 from './H3';
import H6 from './H6';
import H4 from './H4';
import H5 from './H5';
import { Divider } from 'react-native-paper';
import appStyle from '../styles/appStyle';
import { calculateWidth } from '../utils/ScreenSize';

interface TaskDetailsProps {
    title?: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    productThumbnail?: string;
    productImages?: string[];
}

const TaskDetails: React.FC<TaskDetailsProps> = React.memo(({
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    productThumbnail,
    productImages,
}) => {

    return (
        <View style={styles.taskContainer}>
            <View>
                <View style={{
                }}>
                    <View style={[appStyle.rowBtw, appStyle.mb30]}>
                        {productThumbnail && (
                            <View style={styles.thumbnail}>
                                <Image source={{ uri: productThumbnail }} style={appStyle.imgFLuid} />
                            </View>
                        )}
                        <View style={[appStyle.flex1, appStyle.ml10]}>
                            <H3 text={title} style={styles.title} noGutters />
                            <H6 text={description} style={appStyle.mt5} />
                        </View>
                    </View>
                    <View style={appStyle.rowBtw}>
                        <H4 text='Brand' noGutters />
                        <View style={{
                            backgroundColor: theme.colors.orange_light,
                            paddingHorizontal: 10,
                            paddingVertical: 4,
                            borderRadius: 10
                        }}>
                            <H6 text={brand}
                                style={{
                                    color: theme.colors.background,
                                    fontFamily: family_set.semibold
                                }}
                                noGutters
                            />
                        </View>
                    </View>
                </View>
            </View>
            <Divider style={appStyle.mv10} />
            <View
                style={appStyle.rowBtw}
            >
                <H4 text={'Price'} />
                <View style={styles.titleRight}>
                    <H5 text={`$ ${price}`} style={{
                        color: theme.colors.blue_light
                    }}
                        noGutters
                        gutterLeft
                    />
                </View>
            </View>
            <Divider style={appStyle.mv10} />
            <View
                style={appStyle.rowBtw}
            >
                <H4 text={'Discount'} />
                <View style={styles.titleRight}>
                    <H5 text={`${discountPercentage} %`} style={{
                        color: theme.colors.orange_light
                    }}
                        noGutters
                        gutterLeft
                    />
                </View>
            </View>
            <Divider />
            <View style={appStyle.mt10}>
                <View
                    style={appStyle.rowBtw}
                >
                    <H4 text='Stock' noGutters />
                    <View
                        style={appStyle.rowCenter}
                    >
                        <Icon name={'clock-time-five'} size={24} color={theme.colors.green} />
                        <H5 text={stock?.toString()}
                            style={{
                                color: theme.colors.grey,
                                fontSize: 12
                            }}
                            noGutters
                            gutterLeft
                        />
                    </View>
                </View>
                <Divider style={appStyle.mv10} />
                <View style={appStyle.rowBtw}>

                    <H4 text='Category' noGutters />
                    <View
                        style={appStyle.rowCenter}
                    >
                        <H5 text={category}
                            style={{
                                color: theme.colors.grey,
                                fontSize: 12
                            }}
                            noGutters
                            gutterLeft
                        />
                    </View>
                </View>
                <Divider style={appStyle.mv10} />
                <View
                    style={appStyle.rowBtw}
                >
                    <H4 text='Rating' noGutters />
                    <View
                        style={appStyle.rowCenter}
                    >
                        <Icon name={'star'} size={24} color={theme.colors.yellow} />
                        <H5 text={`${rating}`} noGutters gutterLeft containerStyle={{
                            alignSelf: 'flex-end',
                            marginBottom: 4
                        }}
                            style={{
                                fontFamily: family_set.semibold
                            }}
                        />
                    </View>
                </View>
            </View>

            <View style={[appStyle.ph16,appStyle.mt30]}>
                <View style={appStyle.horizontalCategoryContainer}>
                    <ScrollView contentContainerStyle={appStyle.scroll} horizontal showsHorizontalScrollIndicator={false}>
                        {productImages?.map((item: any, index: number) => {
                            return (
                                <View style={[styles.thumbnailLg,appStyle.mr15]}  key={index}>
                                    <Image source={{ uri: item }} style={appStyle.imgFLuid} />
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
});

export default TaskDetails;

const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
        shadowColor: '#CCCCCC',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        elevation: 3,
        padding: 5,
        marginTop: 10
    },
    taskTitle: {
        color: theme.colors.black_light
    },
    checkList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    checkTitle: {
        marginLeft: 12,
        flex: 1
    },
    checks: {
        marginTop: 12,
        backgroundColor: theme.colors.white,
        borderRadius: 8,
        paddingTop: 16,
        shadowColor: '#CCCCCC',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        elevation: 3,
    },
    checkText: {
        fontSize: 18,
        fontFamily: family_set.mediumSecondary,
        color: theme.colors.black_light
    },
    thumbnail: {
        width: calculateWidth(22),
        height: calculateWidth(22),
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: theme.colors.grey_light
    },
    thumbnailLg: {
        width: calculateWidth(42),
        height: calculateWidth(42),
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: theme.colors.grey_light
    },
    title: {
        color: theme.colors.orange_light,
    },
    titleRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -8
    }
});
