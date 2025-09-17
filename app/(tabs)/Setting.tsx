import { ThemeContext } from '@/context/ThemeContext';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { Animated, Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile_img from "../../assets/images/profile.jpg";


const setting = () => {

  const router = useRouter();
  const [isOn, setIsOn] = useState(false);
  const { colorScheme, setColorScheme, theme } = useContext(ThemeContext);
  const styles = createStyles(theme);

  const toggle = () => {
    setIsOn(prev => !prev);
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
  }

  const Container = Platform.OS === "android" ? View : SafeAreaView;

  return (
    <Container style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Header */}
      <View style={styles.fixedTop}>
        <Pressable onPress={() => router.back()} style={styles.row}>
          <Text style={styles.location}>
            <Ionicons name="chevron-back-sharp" size={28} color="#fff" /></Text>
          <Text style={styles.city}>Profile Settings</Text>
        </Pressable>
      </View>

      {/* profile image */}
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <Image
            source={profile_img}
            style={styles.profileImage}
          />
          <View>
            <Text style={{ fontSize: 20, color: theme.text }}>Htay Htay Thwe</Text>
            <Text style={{ fontSize: 15, color: theme.icon }}>htayhtaythwe962@gmail.com</Text>
          </View>
        </View>

        <View style={styles.darkMode}>
          <View style={styles.moon}>
            <Feather name="moon" size={24} color="white" />
          </View>
          <Text style={{ color: theme.text, fontSize: 18, marginTop: 15, marginBottom: 5, flex: 1, marginLeft: 50 }}>Dark Mode</Text>

          <TouchableOpacity onPress={toggle} activeOpacity={0.8}>
            <View style={[styles.toggleContainer, { backgroundColor: isOn ? '#4CD964' : '#ccc' }]}>
              <Animated.View
                style={[
                  styles.toggleCircle,
                  { transform: [{ translateX: isOn ? 20 : 3 }] }, // move circle left/right
                ]}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={{ color: theme.icon, fontSize: 20, marginTop: 15, marginBottom: 5 }}>Profile</Text>

        {/* change mail */}
        <Pressable onPress={() => router.push('/Email')} style={styles.darkMode}>
          <View style={styles.back}>
            <Feather name="mail" size={24} color="black" />
          </View>
          <Text style={{ color: theme.text, fontSize: 18, flex: 1, marginLeft: 50, marginTop: 10 }}>Change Mail</Text>
          <View style={{ marginTop: 10 }}>
            <FontAwesome6 name="chevron-right" size={24} color={theme.text} />
          </View>
        </Pressable>

        {/* password */}
        <Pressable onPress={() => router.push('/Password')} style={styles.darkMode}>
          <View style={styles.password}>
            <Entypo name="key" size={24} color={theme.text} />
          </View>
          <Text style={{ color: theme.text, fontSize: 18, flex: 1, marginLeft: 50, marginTop: 10 }}>Change Password</Text>

          <View style={{ marginTop: 10 }}>
            <FontAwesome6 name="chevron-right" size={24} color={theme.text} />
          </View>
        </Pressable>

        <Text style={{ color: theme.icon, fontSize: 20, marginTop: 15, marginBottom: 10 }}>Exit</Text>

        {/* Language */}
        {/* <View style={styles.darkMode}>
          <View style={styles.language}>
            <MaterialIcons name="language" size={24} color={theme.text} />
          </View>
          <Text style={{ color: theme.text, fontSize: 18, flex: 1, marginLeft: 50, marginTop: 10 }}>Change Language</Text>

          <View style={{ marginTop: 10 }}>
            <FontAwesome6 name="chevron-right" size={24} color={theme.text} />
          </View>
        </View> */}


        {/* delete Account */}
        <View style={styles.darkMode}>
          <View style={styles.logout}>
            <MaterialIcons name="logout" size={24} color={theme.text} />
          </View>
          <Text style={{ color: theme.text, fontSize: 18, flex: 1, marginLeft: 50, marginTop: 10 }}>LogOut</Text>

          <View style={{ marginTop: 10 }}>
            <FontAwesome6 name="chevron-right" size={24} color={theme.text} />
          </View>

        </View>
        <Text style={{ fontSize: 13, color: theme.icon, alignSelf: 'center', padding: 30 }}>App Ver 2.0.1</Text>
      </ScrollView>
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
    itemNo: {
      color: theme.text,
      fontSize: 16
    },
    container: {
      marginTop: 80,
      padding: 20
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      resizeMode: "cover",
      borderWidth: 2,
      elevation: 5,
      borderColor: theme.tint
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 15,
      marginBottom: 15
    },
    moon: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: theme.background === '#151718' ? 1 : 0,
      borderColor: theme.border,
      elevation: 3
    },
    back: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#C67C4E',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: theme.background === '#151718' ? 1 : 0,
      borderColor: theme.border,
      elevation: 3
    },
    password: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#2390FF',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: theme.background === '#151718' ? 1 : 0,
      borderColor: theme.border,
      elevation: 3
    },
    language: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#007F70',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: theme.background === '#151718' ? 1 : 0,
      borderColor: theme.border,
      elevation: 3
    },
    logout: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#FA1D25',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: theme.background === '#151718' ? 1 : 0,
      borderColor: theme.border,
      elevation: 3
    },
    toggleContainer: {
      width: 40,
      height: 23,
      borderRadius: 15,
      padding: 0,
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 5
    },
    toggleCircle: {
      width: 18,
      height: 18,
      borderRadius: 13,
      backgroundColor: 'white',
    },
    darkMode: {
      flexDirection: 'row',
      justifyContent: "space-between",
      marginTop: 15,
      marginBottom: 10,
    }
  })
}

export default setting