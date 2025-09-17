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

const Signup = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);
    const router = useRouter();

    const Container = Platform.OS === "android" ? View : SafeAreaView;

    return (
        <Container style={{ flex: 1, backgroundColor: theme.background }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, padding: 20 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    {/* Logo */}
                    <Image source={logo} style={styles.logo} />

                    {/* Title */}
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>
                        Join us for your daily coffee and cake cravings ☕🍰
                    </Text>

                    {/* Name */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="person-outline" size={20} color={theme.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Full Name"
                            placeholderTextColor={theme.placeholder}
                        />
                    </View>

                    {/* Phone */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="call-outline" size={20} color={theme.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Phone Number"
                            placeholderTextColor={theme.placeholder}
                            keyboardType="phone-pad"
                        />
                    </View>

                    {/* Email */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="mail-outline" size={20} color={theme.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email Address"
                            placeholderTextColor={theme.placeholder}
                            keyboardType="email-address"
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed-outline" size={20} color={theme.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            placeholderTextColor={theme.placeholder}
                            secureTextEntry
                        />
                    </View>

                    {/* Confirm Password */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed-outline" size={20} color={theme.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Confirm Password"
                            placeholderTextColor={theme.placeholder}
                            secureTextEntry
                        />
                    </View>

                    {/* Sign Up Button */}
                    <Pressable
                        style={styles.signupBtn}
                        onPress={() => {
                            Toast.show({
                                type: "success",
                                text1: "🎉 Welcome!",
                                text2: "Account created successfully.",
                                position: "top",
                                visibilityTime: 4000,
                            });
                        }}
                    >
                        <Text style={styles.signupText}>Sign Up</Text>
                    </Pressable>

                    {/* OR Divider */}
                    <View style={styles.dividerWrapper}>
                        <View style={styles.divider} />
                        <Text style={{ color: theme.icon }}>or</Text>
                        <View style={styles.divider} />
                    </View>

                    {/* Google Sign Up */}
                    <Pressable style={styles.googleBtn}>
                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <AntDesign name="google" size={24} color={theme.text} />
                            <Text style={styles.googleText}> Sign Up with Google</Text>
                        </View>
                    </Pressable>

                    {/* Already have an account */}
                    <Text style={styles.loginLink}>
                        Already have an account?{" "}
                        <Text
                            style={{
                                color: "#C67C4E",
                                textDecorationLine: "underline",
                            }}
                            onPress={() => router.push("/Signin")}
                        >
                            Sign In
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
            flex: 1,
            width: "100%",
            alignItems: "center", // only horizontal centering
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
            marginTop: 30,
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
        signupBtn: {
            width: "100%",
            backgroundColor: "#C67C4E",
            paddingVertical: 14,
            borderRadius: 10,
            alignItems: "center",
            marginBottom: 20,
        },
        signupText: {
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
            marginBottom: 20,
        },
        googleText: {
            fontSize: 16,
            color: theme.text,
            fontWeight: "500",
            marginBottom: 2,
        },
        loginLink: {
            fontSize: 14,
            color: theme.icon,
            marginTop: 10,
            marginBottom: 30,
        },
    });
}

export default Signup;
