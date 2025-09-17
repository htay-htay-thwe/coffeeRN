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
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Toast from "react-native-toast-message";
import affogato_photo from "../../assets/images/menu/affogato.png";
import { DESSERT_ITEMS } from "../../constants/Desert";

const Dessert = () => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  const Container = Platform.OS === 'android' ? View : SafeAreaView;

  const router = useRouter();
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const dessertTypes = [
    { "id": 1, "name": "Dessert" },
    { "id": 2, "name": "Baked Good" },
  ]

  const scrollY = useState(new Animated.Value(0))[0];
  const SEARCH_HEIGHT = 150;

  return (
    <Container style={{ flex: 1, backgroundColor: theme.background }}>
      {/* FIXED SEARCH BAR */}
      <View style={styles.fixedTop}>
        <Pressable onPress={() => router.back()} style={styles.row}>
          <Text style={styles.location}><Ionicons name="chevron-back-sharp" size={28} color={theme.color} /></Text>
          <Text style={styles.city}>Dessert</Text>
        </Pressable>
        <TextInput
          style={styles.textInput}
          placeholder="Search Dessert ..."
          placeholderTextColor={theme.placeholder}
        />
      </View>

      {/* WHITE BACKGROUND SECTION */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: SEARCH_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}>
        <View style={styles.whiteContainer}>
          {/* Categories */}
          <FlatList
            data={dessertTypes}
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
                  ]}>
                  <Text
                    style={[
                      styles.typeText,
                      isActive && { color: "#fff", fontWeight: "bold" },
                    ]}>
                    {item.name}
                  </Text>
                </Pressable>
              );
            }}
          />

          {/* Coffee Cards */}
          <FlatList
            data={DESSERT_ITEMS}
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
                    <Pressable style={styles.addBtn} onPress={() => setModalVisible(true)}>
                      <Ionicons name="add" size={20} color="#fff" />
                    </Pressable>
                  </View>
                </View>
              </Pressable>
            )}
          />

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
                      <MaterialCommunityIcons name="minus" size={24} color="#858585ff" />
                    </Pressable>

                    <Text style={styles.quantity_no}>2</Text>

                    <Pressable style={styles.Btn}>
                      <MaterialCommunityIcons name="plus" size={24} color="#858585ff" />
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
      gap: '5'
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
      marginLeft: 10,
      padding: 12,
      backgroundColor: '#C67C4E',
      borderRadius: 10
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
      borderTopWidth: theme.background === '#151718' ? 1 : 0,
      borderLeftWidth: theme.background === '#151718' ? 1 : 0,
      borderRightWidth: theme.background === '#151718' ? 1 : 0,
      backgroundColor: theme.background,
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: "59%",
      borderColor: theme.border
    },
    Btn: {
      backgroundColor: "#fae2d3ff",
      padding: 5,
      borderRadius: 5,
      alignItems: "center",
    },
    row_four: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      gap: 10
    },
    orderBtn: {
      flex: 1,
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
    },
    add_image: {
      width: '100%',
      height: '50%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.border,
      elevation: 4
    },
    quantity_no: {
      fontSize: 20,
      color: theme.text
    }

  });
}

export default Dessert;
