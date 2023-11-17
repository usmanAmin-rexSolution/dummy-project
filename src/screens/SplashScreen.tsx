import React, { useEffect } from 'react';
import { StyleSheet, Text, Animated, Image } from 'react-native';
import { SplashScreenProps, theme } from '../constants';
import { Container, H1, StatusBarComponent } from '../components';

const SplashScreen = ({ navigation }: SplashScreenProps) => {
    const fadeAnim = new Animated.Value(1);

    useEffect(() => {

        const navigateToTab1 = () => {
            navigation.replace('TabNavigator'); // Update to pass an object with the 'name' property
        };

        const startAnimation = () => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000, // Animation duration in milliseconds
                useNativeDriver: true,
            }).start(navigateToTab1);
        };

        const timer = setTimeout(startAnimation, 2000); // Wait for 3 seconds before starting animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <Container
            contentContainerStyle={styles.container}
            skipSafeareaView
        >
            <StatusBarComponent merge hidden />
            <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
                <H1 text='Splash' style={{
                    color: theme.colors.orange_light
                }} />
            </Animated.View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99
    },
    contentContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    splash: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
});

export default SplashScreen;
