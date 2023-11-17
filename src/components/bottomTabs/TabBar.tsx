import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { theme } from '../../constants';
import { family_set } from '../../styles/FamilySet';
import { IconButton } from 'react-native-paper';
import { calculateWidth } from '../../utils/ScreenSize';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Route = {
    name: string;
    key: string;
};

type TabBarProps = {
    state: any;
    descriptors: any;
    navigation: any;
};

const icons: Record<string, any> = {
    HomeTab: 'home',
    SearchTab: 'manage-search',
    AccountTab: 'account-box',
};

const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {

    return (
        <View style={styles.container}>

            <View style={styles.inner}>
                {state.routes.map((route: Route, index: number) => {
                    const isFocused = state.index === index;
                    const { options } = descriptors[route.key];
                    const label = options.title || route.name;
                    const icon: any = icons[route.name];

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <View style={{
                            position: 'relative',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: theme.colors.background,
                            flex: 1,
                            borderRadius: 100

                        }}
                            key={route.key}
                        >
                            <TouchableOpacity
                                key={route.key}
                                onPress={onPress}
                                style={[styles.tabButton, isFocused && styles.tabButtonFocused, {
                                    backgroundColor: isFocused ? theme.colors.primary : theme.colors.background,
                                    transform: [{ translateY: isFocused ? -20 : 0 }]
                                }]}
                            >
                                <Icon
                                    name={icon}
                                    color={isFocused ? styles.iconFocused.color : styles.icon.color}
                                    size={28}
                                />

                            </TouchableOpacity>
                            {isFocused &&
                                <View style={[styles.textContainer,{
                                    marginTop: isFocused ? -18 : -8
                                }]}>
                                    <Text
                                        style={[styles.text,
                                        isFocused ? styles.labelFocused : styles.label
                                        ]}
                                    >
                                        {label}
                                    </Text>
                                </View>
                            }
                        </View>
                    );
                })}
            </View>
        </View>
    );
};


export default TabBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
    },
    inner: {
        backgroundColor: theme.colors.background,
        width: calculateWidth(80),
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderRadius: 100,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,

        elevation: 22,

    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: 45,
        height: 45,
        borderRadius: 25,
    },
    tabButtonFocused: {
        shadowColor: 'rgba(255, 116, 97, 0.9)',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,

    },
    icon: {
        color: theme.colors.grey_lighter,
    },
    iconFocused: {
        color: theme.colors.background,
    },
    textContainer: {
        marginTop: -8,
    },
    text: {
        fontSize: 13,
        fontFamily: family_set.semibold,
    },
    label: {
        color: theme.colors.white,
    },
    labelFocused: {
        color: theme.colors.primary,
    },
});
