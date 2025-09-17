import { ThemeContext } from "@/context/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useContext } from "react";
import {
    Image,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Toast from "react-native-toast-message";
import logo from "../assets/images/logo.png";

const Email = () => {
    const { theme } = useContext(ThemeContext);
    const Container = Platform.OS === "android" ? View : SafeAreaView;
    const styles = createStyles(theme);
    const router = useRouter();

    return (
        <Container style={{ flex: 1, backgroundColor: theme.background }}>
            {/* Header */}
            <View style={styles.fixedTop}>
                <Pressable onPress={() => router.back()} style={styles.row}>
                    <Ionicons name="chevron-back-sharp" size={28} color="white" />
                    <Text style={styles.city}> Email</Text>
                </Pressable>
            </View>

            {/* Content */}
            <View style={styles.container}>
                <Image source={logo} style={styles.profileImage} />
                <Text style={{ fontSize: 23, color: theme.text, marginBottom: 30 }}>Change Password</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="12345@gmail.com"
                    placeholderTextColor={theme.placeholder}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter New Password"
                    placeholderTextColor={theme.placeholder}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Confirmed Password"
                    placeholderTextColor={theme.placeholder}
                    keyboardType="email-address"
                />

                <Pressable
                    style={styles.orderBtn}
                    onPress={() => {
                        Toast.show({
                            type: "success",
                            text1: "🎉 Order Placed!",
                            text2: "Your coffee is on the way ☕",
                            position: "top",
                            visibilityTime: 4000,
                        });
                    }}>
                    <Text style={styles.orderText}>Verify Mail</Text>
                </Pressable>
            </View>
        </Container>
    );
};

function createStyles(theme: any) {
    return StyleSheet.create({
        fixedTop: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: theme.tint,
            zIndex: 10,
            padding: 10,
        },
        location: {
            marginTop: 2,
            color: '#fff',
            fontSize: 14,
        },
        city: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold'
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 5,
            gap: '5',
        },
        container: {
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            marginTop: 90,
        },
        profileImage: {
            backgroundColor: "#C67C4E",
            width: 100,
            height: 100,
            borderRadius: 50,
            resizeMode: "cover",
            borderWidth: 2,
            elevation: 5,
            borderColor: theme.border,
            marginBottom: 10,
            marginLeft: -8
        },
        textInput: {
            width: "100%",
            borderRadius: 10,
            padding: 12,
            fontSize: 16,
            color: "#fff",
            backgroundColor: theme.color,
            marginBottom: 30,
        },
        orderBtn: {
            width: "100%",
            backgroundColor: "#C67C4E",
            paddingVertical: 14,
            borderRadius: 10,
            alignItems: "center",
        },
        orderText: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
        },
    });
}

export default Email;
