import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlexAlignType, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { theme } from '../constants';
import { family_set } from '../styles/FamilySet';

interface HeaderProps {
    isBack?: Boolean;
    isTitle?: string;
    isRight?: Boolean;
    alignTitle?: FlexAlignType;
    rightComponent?: any
}

const Header: React.FC<HeaderProps> = React.memo(({ isBack, isTitle, isRight, alignTitle, rightComponent }) => {
    const navigation = useNavigation();

    return (
        <View style={{
            marginHorizontal: -16,
            marginRight: 0,
            backgroundColor: theme.colors.background
        }}>
            <Appbar.Header
                statusBarHeight={0}
                style={{
                    backgroundColor: theme.colors.background
                }}
            >
                {isBack && <Appbar.BackAction onPress={() => { navigation.goBack() }} />}
                {isTitle && <Appbar.Content title={isTitle} style={{
                    alignItems: alignTitle ? alignTitle : 'center',
                }}
                    titleStyle={{
                        fontSize: 22,
                        fontFamily: family_set.mediumSecondary,
                        fontWeight: '500',
                    }}
                />
                }
                {isRight && rightComponent}
            </Appbar.Header>
        </View>
    )
});

export default Header;