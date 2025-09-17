import chocolate_cake from "@/assets/images/dessert/chocolate_cake.png";
import cinnamon_roll from "@/assets/images/dessert/cinnamon_roll.png";
import croissant from "@/assets/images/dessert/croissant.png";
import scone from "@/assets/images/dessert/scone.png";
import cortado from "@/assets/images/menu/cortado.png";
import flatwhite from "@/assets/images/menu/flatwhite.png";
import latte from "@/assets/images/menu/latte.png";
import macchiato from "@/assets/images/menu/macchiato.webp";
import { ThemeContext } from "@/context/ThemeContext";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { FlatList, Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Orders = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);
    const router = useRouter();
    const Container = Platform.OS === "android" ? View : SafeAreaView;

    const [cartItems, setCartItems] = useState([
        { id: '1', name: 'Affogato', price: 10, quantity: 2, image: chocolate_cake },
        { id: '2', name: 'Cappuccino', price: 8, quantity: 1, image: flatwhite },
        { id: '3', name: 'Latte - Cinnamon Roll', price: 7, quantity: 3, image: cinnamon_roll },
        { id: '4', name: 'Latte - Croissant', price: 7, quantity: 3, image: croissant },
        { id: '5', name: 'Latte', price: 7, quantity: 3, image: latte },
        { id: '6', name: 'Latte - Long Black', price: 7, quantity: 3, image: cortado },
        { id: '7', name: 'Latte - Scone', price: 7, quantity: 3, image: scone },
        { id: '8', name: 'Latte - Macchiato', price: 7, quantity: 3, image: macchiato },
    ]);

    return (
        <Container style={{ flex: 1, backgroundColor: theme.background }}>
            {/* Header */}
            <View style={styles.fixedTop}>
                <Pressable onPress={() => router.back()} style={styles.row}>
                    <Text style={styles.location}>
                        <Ionicons name="chevron-back-sharp" size={28} color="#fff" /></Text>
                    <Text style={styles.city}>Today's Orders</Text>
                </Pressable>
                <Text style={styles.itemNo}>12 items</Text>
            </View>


            {/* Cart Items */}
            <FlatList
                style={{ marginTop: 130 }}
                data={cartItems}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, paddingHorizontal: 15 }}>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#c5c5c4ff', borderRadius: 1 }} />
                        <Text style={{ marginHorizontal: 10, color: '#C67C4E', fontWeight: 'bold' }}>12.9.2025</Text>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#c5c5c4ff', borderRadius: 1 }} />
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.name}</Text>

                            <Text style={styles.cardType}>Quantity: {item.quantity}</Text>

                            <View style={styles.rowBetween}>
                                <Text style={styles.cardPrice}>Htay Htay Thwe</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <EvilIcons name="clock" size={24} color={theme.time} style={{ marginBottom: -1 }} />
                                    <Text style={{ marginTop: 2, color: theme.time }}>12:56</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                )}
                contentContainerStyle={{ paddingBottom: 10 }}
            />

        </Container>
    )
}


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
            marginTop: 2,
            color: "#fff",
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
            marginTop: 20,
            marginBottom: 15,
            gap: '5',
        },
        row_one: { flexDirection: 'row', justifyContent: 'space-between', },
        itemNo: {
            color: '#fff',
            fontSize: 16
        },
        card: {
            marginTop: 5,
            flexDirection: 'row',
            backgroundColor: theme.background,
            marginHorizontal: 15,
            marginBottom: 10,
            borderRadius: 16,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 8,
            borderWidth: theme.background === '#151718' ? 1 : 0,
            borderColor: theme.border,
            elevation: 3
        },
        cardImage: {
            width: 120,
            height: '100%'
        },
        cardContent: {
            flex: 1,
            padding: 12,
            justifyContent: 'space-between'
        },
        cardTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.text
        },
        cardType: {
            fontSize: 14,
            color: theme.icon,
            marginVertical: 4
        },
        cardPrice: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.tint
        },
        rowBetween: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        removeBtn: {
            backgroundColor: theme.tint, padding: 6, borderRadius: 6
        },
    })
}
export default Orders;
