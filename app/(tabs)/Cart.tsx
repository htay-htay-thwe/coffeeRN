import chocolate_cake from "@/assets/images/dessert/chocolate_cake.png";
import cinnamon_roll from "@/assets/images/dessert/cinnamon_roll.png";
import croissant from "@/assets/images/dessert/croissant.png";
import scone from "@/assets/images/dessert/scone.png";
import cortado from "@/assets/images/menu/cortado.png";
import flatwhite from "@/assets/images/menu/flatwhite.png";
import latte from "@/assets/images/menu/latte.png";
import macchiato from "@/assets/images/menu/macchiato.webp";
import { ThemeContext } from '@/context/ThemeContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { FlatList, Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Cart = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  const Container = Platform.OS === 'android' ? View : SafeAreaView;

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

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (id: string) => setCartItems(prev => prev.filter(item => item.id !== id));

  return (
    <Container style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Header */}
      <View style={styles.fixedTop}>
        <Pressable onPress={() => router.back()} style={styles.row}>
          <Text style={styles.location}><Ionicons name="chevron-back-sharp" size={28} color="#fff" /></Text>
          <Text style={styles.city}>Shopping Cart</Text>
        </Pressable>
        <View style={styles.row_one}>
          <Text style={styles.itemNo}>{totalItems} items</Text>
          <Text style={styles.itemNo}>${totalPrice.toFixed(2)}</Text>
        </View>
      </View>

      {/* Cart Items */}
      <FlatList
        style={{ marginTop: 120 }}
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardContent}>
              <View style={styles.rowBetween}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Pressable onPress={() => removeItem(item.id)} style={styles.removeBtn}>
                  <Ionicons name="trash" size={20} color="#fff" />
                </Pressable>
              </View>

              <Text style={styles.cardType}>Quantity: {item.quantity}</Text>

              <View style={styles.rowBetween}>
                <Text style={styles.cardPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                  <Pressable style={styles.qtyBtn}>
                    <MaterialCommunityIcons name="minus" size={22} color="#fff" />
                  </Pressable>
                  <Text style={styles.quantity_no}>{item.quantity}</Text>
                  <Pressable style={[styles.qtyBtn, { backgroundColor: theme.tint }]}>
                    <MaterialCommunityIcons name="plus" size={22} color="#fff" />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 110 }}
      />

      {/* Footer - Order Button */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Total: ${totalPrice.toFixed(2)}</Text>
        <Pressable style={styles.orderBtn}>
          <Text style={styles.orderBtnText}>Order Now</Text>
        </Pressable>
      </View>
    </Container>
  )
}

const createStyles = (theme: any) => StyleSheet.create({
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
    marginTop: 20,
    marginBottom: 15,
    gap: '5',
  },
  row_one: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemNo: {
    color: '#fff',
    fontSize: 16
  },
  card: {
    marginTop: 10,
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
    elevation: 3,
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
    color: theme.text
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  removeBtn: {
    backgroundColor: theme.tint,
    padding: 6,
    borderRadius: 6
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  qtyBtn: {
    backgroundColor: theme.icon,
    padding: 4,
    borderRadius: 6
  },
  quantity_no: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.icon
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.background,
    paddingBottom: 45,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    height: '15%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: theme.background === '#151718' ? 1 : 0,
    borderLeftWidth: theme.background === '#151718' ? 1 : 0,
    borderRightWidth: theme.background === '#151718' ? 1 : 0,
    borderColor: theme.border
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.text
  },
  orderBtn: {
    backgroundColor: '#C67C4E',
    padding: 12,
    borderRadius: 12, flex: 1, marginLeft: 15, alignItems: 'center'
  },
  orderBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default Cart;
