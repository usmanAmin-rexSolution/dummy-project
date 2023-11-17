import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import appStyle from '../styles/appStyle';
import { family_set } from '../styles';
import { calculateWidth } from './ScreenSize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../constants';

export const toastConfig = {
    green: ({ text1 }) => (
        <View style={[styles.container, styles.greenContainer]}>
            <Icon name={'check'} size={20} color={theme.colors.tintIcon} />
            <View style={[appStyle.flex1, appStyle.pl15]}>
                <Text style={styles.text}>{text1}</Text>
            </View>
            <TouchableOpacity style={styles.rightIconContainer}
                onPress={() => Toast.hide()}
            >
                <Icon name={'cancel'} size={20} color={theme.colors.tintIcon} />
            </TouchableOpacity>
        </View>
    ),
    blue: ({ text1 }) => (
        <View style={[styles.container, styles.blueContainer]}>
            <Icon name={'info-outline'} size={20} color={'#1F75FE'} />
            <View style={[appStyle.flex1, appStyle.pl15]}>
                <Text style={[styles.text, {
                    color: '#134698'
                }]}>{text1}</Text>
            </View>
            <TouchableOpacity style={styles.rightIconContainer}
                onPress={() => Toast.hide()}
            >
                <Icon name={'cancel'} size={20} color={theme.colors.tintIcon} />
            </TouchableOpacity>
        </View>
    ),
    red: ({ text1 }) => (
        <View style={[styles.container, styles.redContainer]}>
            <Icon name={'error'} size={20} color={'#F9A33D'} />

            <View style={[appStyle.flex1, appStyle.pl15]}>
                <Text style={[styles.text, {
                    color: '#F93D49'
                }]}>{text1}</Text>
            </View>
            <TouchableOpacity style={styles.rightIconContainer}
                onPress={() => Toast.hide()}
            >
                <Icon name={'cancel'} size={20} color={theme.colors.tintIcon} />
            </TouchableOpacity>
        </View>
    ),
    orange: ({ text1 }) => (
        <View style={[styles.container, styles.orangeContainer]}>
            <Icon name={'error'} size={20} color={'#F9A33D'} />
            <View style={[appStyle.flex1, appStyle.pl15]}>
                <Text style={[styles.text, {
                    color: '#F9A33D'
                }]}>{text1}</Text>
            </View>
            <TouchableOpacity style={styles.rightIconContainer}
                onPress={() => Toast.hide()}
            >
                <Icon name={'cancel'} size={20} color={theme.colors.tintIcon} />
            </TouchableOpacity>
        </View>
    )
};

export function ToastProvider() {
    return <Toast config={toastConfig} />;
}

export const _showToast = (type = 'green', text1, position = 'bottom', multiple = false) => {
    Toast.show({
        type,
        text1,
        position,
        visibilityTime: 4000
    });
};

const styles = StyleSheet.create({
    container: {
        width: calculateWidth(100) - 40,
        height: 60,
        elevation: 5,
        shadowColor: 'rgba(204, 204, 204, 0.25)',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1,
        backgroundColor: '#FFF',
        borderRadius: 2,
        borderLeftColor: '#1B6664',
        borderLeftWidth: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
    },
    greenContainer: {
        backgroundColor: '#EBFAF9',
    },
    blueContainer: {
        backgroundColor: '#F0F6FF',
        borderLeftColor: '#134698'
    },
    redContainer: {
        backgroundColor: '#FFEEED',
        borderLeftColor: '#E01024'
    },
    orangeContainer: {
        backgroundColor: '#FFFAF4',
        borderLeftColor: '#F9A33D'
    },
    rightIconContainer: {
        paddingRight: 10,
        paddingLeft: 15,
        paddingVertical: 20,
    },
    rightIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        tintColor: '#626A6A'
    },
    iconContainer: {

    },
    icon: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
        tintColor: '#1B6664'
    },
    text: {
        color: '#1B6664',
        fontFamily: family_set.medium,
        fontSize: 15,

    }

})
