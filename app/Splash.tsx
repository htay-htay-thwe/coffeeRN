import { ThemeContext } from '@/context/ThemeContext';
import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { ImageBackground, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import coffee_cover from "../assets/images/coffee_cover.png";

const Splash = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);
    const router = useRouter();
    const Container = Platform.OS === 'android' ? View : SafeAreaView;

    return (
        <Container style={{ flex: 1 }}>
            <ImageBackground
                source={coffee_cover}
                resizeMode="cover"
                style={styles.backgroundImage}
            >
                <Text style={styles.intro}>Fall In Love with Coffee in Blissful Delight!</Text>
                <Text style={styles.welcome}>Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>
                <Pressable style={styles.started}>
                    <Text onPress={() => router.push('/Coffee')} style={styles.startedText}>Get Started</Text>
                </Pressable>
            </ImageBackground>
        </Container>
    );
}

function createStyles(theme: any) {
    return StyleSheet.create({
        backgroundImage: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: "70%",
            width: '100%'
        },
        intro: {
            position: 'absolute',
            top: '54%',
            width: '90%',
            color: theme.text,
            fontSize: 33,
            fontWeight: "bold",
            textAlign: 'center'
        },
        welcome: {
            position: 'absolute',
            top: '73%',
            width: '90%',
            color: theme.icon,
            textAlign: 'center',
            fontSize: 17
        },
        started: {
            position: 'absolute',
            top: '82%',
            width: '90%',
            paddingVertical: 10,
            backgroundColor: theme.tint,
            borderRadius: 8
        },
        startedText: {
            fontSize: 20,
            color: theme.text,
            textAlign: 'center'
        }
    });
}

export default Splash;
