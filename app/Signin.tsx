import { ThemeContext } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { useContext } from "react";
import {
    Image,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Toast from "react-native-toast-message";
import logo from "../assets/images/logo.png";

const Signin = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);
    const router = useRouter();

    const Container = Platform.OS === "android" ? View : SafeAreaView;

    return (
        <Container style={{ flex: 1, backgroundColor: theme.background }}>

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    {/* Logo */}
                    <Image source={logo} style={styles.logo} />

                    {/* Title */}
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.subtitle}>
                        Your coffee break starts here ☕🍰 — sign in to continue.
                    </Text>

                    {/* Email */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="mail-outline" size={20} color={theme.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="12345@gmail.com"
                            placeholderTextColor={theme.placeholder}
                            keyboardType="email-address"
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed-outline" size={20} color={theme.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="••••••••"
                            placeholderTextColor={theme.placeholder}
                            secureTextEntry
                        />
                    </View>

                    {/* Forgot Password */}
                    <Text style={styles.forgot}>Forgot Password?</Text>

                    {/* Sign In Button */}
                    <Pressable
                        style={styles.signinBtn}
                        onPress={() => {
                            Toast.show({
                                type: "success",
                                text1: "☕ Welcome Back!",
                                text2: "Signed in successfully.",
                                position: "top",
                                visibilityTime: 4000,
                            });
                        }}
                    >
                        <Text style={styles.signinText}>Sign In</Text>
                    </Pressable>

                    {/* OR Divider */}
                    <View style={styles.dividerWrapper}>
                        <View style={styles.divider} />
                        <Text style={{ color: theme.icon }}>or</Text>
                        <View style={styles.divider} />
                    </View>

                    {/* Google Login */}
                    <Pressable style={styles.googleBtn}>
                        <Image
                            source={{
                                uri: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
                            }}
                            style={styles.googleIcon}
                        />
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                            <AntDesign name="google" size={24} color={theme.text} />
                            <Text style={styles.googleText}> Continue with Google</Text>
                        </View>
                    </Pressable>
                    {/* Already have an account / No account link */}
                    <Text style={styles.noAccount}>
                        Don't have an account?{" "}
                        <Text
                            style={{ color: "#C67C4E", textDecorationLine: "underline" }}
                            onPress={() => router.push("/Signup")}
                        >
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </Container>
    );
};

function createStyles(theme: any) {
    return StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            marginTop: 50,
        },
        logo: {
            backgroundColor: "#C67C4E",
            width: 100,
            height: 100,
            borderRadius: 50,
            resizeMode: "cover",
            borderWidth: 2,
            borderColor: theme.border,
            marginBottom: 20,
        },
        title: {
            fontSize: 26,
            fontWeight: "bold",
            color: theme.text,
            marginBottom: 5,
        },
        subtitle: {
            fontSize: 15,
            color: theme.icon,
            marginBottom: 30,
            textAlign: "center",
            paddingHorizontal: 10,
        },
        inputWrapper: {
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            backgroundColor: theme.color,
            borderRadius: 10,
            paddingHorizontal: 12,
            marginBottom: 15,
        },
        textInput: {
            flex: 1,
            fontSize: 16,
            color: theme.text,
            padding: 12,
        },
        forgot: {
            alignSelf: "flex-end",
            color: "#C67C4E",
            marginBottom: 20,
            fontSize: 14,
            textDecorationLine: "underline",
            textDecorationColor: theme.color
        },
        signinBtn: {
            width: "100%",
            backgroundColor: "#C67C4E",
            paddingVertical: 14,
            borderRadius: 10,
            alignItems: "center",
            marginBottom: 20,
        },
        signinText: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
        },
        dividerWrapper: {
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginBottom: 20,
        },
        divider: {
            flex: 1,
            height: 1,
            backgroundColor: theme.icon,
            marginHorizontal: 8,
        },
        googleBtn: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            paddingVertical: 14,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: theme.border,
        },
        googleIcon: {
            width: 20,
            height: 20,
            marginRight: 10,
        },
        googleText: {
            fontSize: 16,
            color: theme.text,
            fontWeight: "500",
            marginBottom: 2
        },
        noAccount: {
            fontSize: 14,
            color: theme.icon,
            marginTop: 20,
            marginBottom: 30,
        }

    });
}

export default Signin;
