import { ThemeContext } from '@/context/ThemeContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import {
    Animated,
    FlatList,
    Image,
    ImageBackground,
    Modal,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Toast from "react-native-toast-message";
import banner_2 from "../../assets/images/banner_2.png";
import banner_3 from "../../assets/images/banner_3.png";
import coffee from "../../assets/images/cof.jpg";
import affogato_photo from "../../assets/images/menu/affogato.png";
import { MENU_ITEMS } from "../../constants/MenuItems";
import { COFFEE_TYPES } from "../../constants/Types";

const Coffee = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);
    const Container = Platform.OS === 'android' ? View : SafeAreaView;
    const router = useRouter();

    const [selectedType, setSelectedType] = useState<number | null>(null);


    const banners = [
        { id: 1, text: "Buy one get one FREE", image: coffee },
        { id: 2, text: "20% OFF on  desserts", image: banner_2 },
        { id: 3, text: "Free delivery this week", image: banner_3 },
    ];

    const scrollY = useState(new Animated.Value(0))[0];
    const SEARCH_HEIGHT = 150;

    return (
        <Container style={{ flex: 1, backgroundColor: theme.tint }}>
            {/* FIXED SEARCH BAR */}
            <View style={[styles.fixedTop, { height: SEARCH_HEIGHT }]}>
                <View style={styles.row_title}>
                    <View>
                        <Text style={styles.location}>Htay Htay Thwe</Text>
                        <Text style={styles.city}>Table No.</Text>
                    </View>
                    <View>
                        <Pressable
                            onPress={() => router.push('/Orders')}
                            style={{
                                flexDirection: "row",
                                padding: 10,
                                borderWidth: 1,
                                borderColor: "#eccaadff",
                                borderRadius: 10,
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ position: 'relative' }}>
                                <FontAwesome name="coffee" size={20} color="#eccaadff" />
                                {/* Notification Badge */}
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: -14,
                                        left: 70,
                                        width: 12,
                                        height: 12,
                                        borderRadius: 6,
                                        backgroundColor: 'red',
                                    }}
                                />
                            </View>

                            <Text style={{ fontSize: 15, marginLeft: 5 }}>Orders</Text>
                        </Pressable>

                    </View>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search coffee"
                        placeholderTextColor={theme.placeholder}
                    />
                    <Pressable style={styles.filterBtn}>
                        <Ionicons name="scan-sharp" size={35} color="white" />
                    </Pressable>
                </View>
            </View>

            {/* SCROLLABLE CONTENT */}
            <Animated.ScrollView
                contentContainerStyle={{ paddingTop: SEARCH_HEIGHT }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}>
                {/* Promo Banner */}
                <Animated.View
                    style={{
                        height: scrollY.interpolate({
                            inputRange: [0, 150],
                            outputRange: [140, 0],
                            extrapolate: 'clamp',
                        }),
                        marginBottom: scrollY.interpolate({
                            inputRange: [0, 150],
                            outputRange: [10, 0],
                            extrapolate: 'clamp',
                        }),
                        marginHorizontal: 10,
                        overflow: 'hidden',
                    }}>

                    <Swiper
                        autoplay
                        autoplayTimeout={3} // every 3s
                        showsPagination
                        dotStyle={{ backgroundColor: "#ccc" }}
                        activeDotStyle={{ backgroundColor: "#C67C4E" }}>
                        {banners.map((item) => (
                            <ImageBackground
                                key={item.id}
                                source={item.image}
                                style={styles.banner}
                                imageStyle={{ borderRadius: 10 }}>
                                <Text style={styles.promoTag}>Promo</Text>
                                <Text style={styles.bannerText}>{item.text}</Text>
                            </ImageBackground>
                        ))}
                    </Swiper>

                </Animated.View>

                {/* WHITE BACKGROUND SECTION */}
                <View style={styles.whiteContainer}>
                    {/* Categories */}
                    <FlatList
                        data={COFFEE_TYPES}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
                        renderItem={({ item }) => {
                            const isActive = selectedType === item.id;
                            return (
                                <Pressable
                                    onPress={() => setSelectedType(item.id)}
                                    style={[
                                        styles.typeButton,
                                        isActive && { backgroundColor: theme.tint },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.typeText,
                                            isActive && { color: "#fff", fontWeight: "bold" },
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                </Pressable>
                            );
                        }} />

                    {/* Coffee Cards */}
                    <FlatList
                        data={MENU_ITEMS}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }}
                        scrollEnabled={false} // disable internal scroll to use parent ScrollView
                        renderItem={({ item }) => (
                            <Pressable style={styles.card}>
                                <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>{item.name}</Text>
                                    <Text style={styles.cardType}>{item.description}</Text>
                                    <View style={styles.rowBetween}>
                                        <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
                                        <Pressable onPress={() => setModalVisible(true)} style={styles.addBtn}>
                                            <Ionicons name="add" size={20} color="#fff" />
                                        </Pressable>
                                    </View>
                                </View>
                            </Pressable>
                        )} />

                    {/* Bottom Modal */}
                    <Modal
                        visible={modalVisible}
                        transparent
                        statusBarTranslucent
                        animationType="slide"
                        onRequestClose={() => setModalVisible(false)}>
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalContent}>
                                <View style={styles.row_two}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: theme.text }}>
                                        Add to Cart
                                    </Text>
                                    <Pressable
                                        onPress={() => setModalVisible(false)}
                                        style={{ marginBottom: 10 }}>
                                        <AntDesign name="close" size={28} color={theme.text} />
                                    </Pressable>
                                </View>
                                <Image style={styles.add_image} source={affogato_photo} resizeMode="cover" />

                                {/* cold or hot  */}
                                <View style={styles.row_five}>
                                    <Pressable
                                        style={styles.hotBtn}>
                                        <FontAwesome name="snowflake-o" size={24} color="black" />
                                    </Pressable>
                                    <Pressable style={styles.hotBtn}>
                                        <FontAwesome6 name="mug-hot" size={24} color="black" />
                                    </Pressable>
                                </View>

                                <View style={styles.row_two}>
                                    <Text style={{ fontSize: 20, marginTop: 5, color: theme.text }}>Quantity</Text>
                                    <View style={styles.row_three}>
                                        <Pressable style={styles.Btn}>
                                            <MaterialCommunityIcons name="minus" size={24} color={theme.icon} />
                                        </Pressable>

                                        <Text style={styles.quantity_no}>2</Text>

                                        <Pressable style={styles.Btn}>
                                            <MaterialCommunityIcons name="plus" size={24} color={theme.icon} />
                                        </Pressable>
                                    </View>
                                </View>

                                <View style={styles.row_four}>
                                    <Pressable
                                        style={styles.orderBtn}
                                        onPress={() => {
                                            setModalVisible(false);
                                            Toast.show({
                                                type: "success",
                                                text1: "🎉 Order Placed!",
                                                text2: "Your coffee is on the way ☕",
                                                position: "top",
                                                visibilityTime: 4000,
                                            });
                                        }}
                                    >
                                        <Text style={{ color: "#fff", fontWeight: "bold" }}>Order Now</Text>
                                    </Pressable>
                                    <Pressable style={styles.cartBtn}
                                        onPress={() => {
                                            setModalVisible(false);
                                            router.push('/Cart')
                                            Toast.show({
                                                type: "success",
                                                text1: "🎉 Cart Added!",
                                                text2: "Checkout to enjoy your treat 🍰",
                                                position: "top",
                                                visibilityTime: 4000,
                                            });
                                        }}>
                                        <Text>Add Cart</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </Animated.ScrollView>
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
            padding: 20,
        },
        location: {
            color: '#fff',
            fontSize: 14,
        },
        city: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10
        },
        row_title: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 22,
            justifyContent: 'space-between'
        },
        row_two: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between"
        },
        row_three: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between",
            gap: 10
        },
        textInput: {
            flex: 1,
            borderRadius: 10,
            padding: 12,
            fontSize: 16,
            color: '#fff',
            backgroundColor: theme.color
        },
        filterBtn: {
            marginLeft: 15,
        },
        banner: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 13,
            borderWidth: 2,
            elevation: 3,
            borderColor: theme.color
        },
        promoTag: {
            marginTop: 60,
            marginLeft: 10,
            backgroundColor: '#ff4d4d',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 12,
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 6,
            alignSelf: 'flex-start',
            marginBottom: 3
        },
        bannerText: {
            marginLeft: 10,
            fontSize: 13,
            fontWeight: 'bold',
            color: 'black',
            width: 140,
            padding: 2,
            borderRadius: 5,
            backgroundColor: '#C9AE92'
        },
        whiteContainer: {
            backgroundColor: theme.background,
            paddingBottom: 50
        },
        typeButton: {
            alignItems: 'center',
            padding: 8,
            backgroundColor: theme.color,
            borderRadius: 5,
            marginRight: 10
        },
        typeText: {
            fontSize: 14,
            color: '#333',
            textAlign: 'center'
        },
        card: {
            flex: 1,
            marginBottom: 15,
            marginHorizontal: 5,
            backgroundColor: theme.background,
            borderWidth: theme.background === '#151718' ? 1 : 0,
            borderColor: theme.border,
            borderRadius: 12,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3
        },
        cardImage: {
            width: '100%',
            height: 120
        },
        cardContent: {
            padding: 10
        },
        cardTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.text
        },
        cardType: {
            fontSize: 13,
            color: theme.icon,
            marginVertical: 4
        },
        cardPrice: {
            fontSize: 15,
            fontWeight: 'bold',
            color: theme.text
        },
        addBtn: {
            backgroundColor: '#C67C4E',
            borderRadius: 8,
            padding: 6
        },
        rowBetween: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5
        },
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'flex-end',
        },
        modalContent: {
            backgroundColor: theme.background,
            borderTopWidth: theme.background === '#151718' ? 1 : 0,
            borderLeftWidth: theme.background === '#151718' ? 1 : 0,
            borderRightWidth: theme.background === '#151718' ? 1 : 0,
            borderColor: theme.border,
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: "59%", // half screen
        },
        add_image: {
            elevation: 4,
            width: '100%',
            height: '50%',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: theme.border
        },
        Btn: {
            backgroundColor: "#fae2d3ff",
            padding: 5,
            borderRadius: 5,
            alignItems: "center",
        },
        quantity_no: {
            fontSize: 20,
            color: theme.text
        },
        row_four: {
            flexDirection: 'row',
            justifyContent: 'space-between', // space between buttons
            marginTop: 10,
            gap: 10, // optional for spacing between buttons
        },
        orderBtn: {
            flex: 1, // take equal space
            backgroundColor: '#C67C4E',
            paddingVertical: 12,
            borderRadius: 10,
            alignItems: 'center',
            fontWeight: 'bold'
        },
        cartBtn: {
            flex: 1, // take equal space
            backgroundColor: '#E0E0E0',
            paddingVertical: 12,
            borderRadius: 10,
            alignItems: 'center',
            fontWeight: 'bold'
        },
        row_five: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 10,
            gap: 10,
        },
        hotBtn: {
            backgroundColor: '#E0E0E0',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 10,
            alignItems: 'center',
            fontWeight: 'bold',
        }

    });
}

export default Coffee;
