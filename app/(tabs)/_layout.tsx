import { HapticTab } from '@/components/haptic-tab';
import { ThemeContext } from '@/context/ThemeContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { useContext } from 'react';

function ThemedTabs() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: theme.icon,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Tabs.Screen
        name="Coffee"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="coffee" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Dessert"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="pizza-slice" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ color }) => <Ionicons name="cart" size={29} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  return (
    <ThemedTabs />
  );
}
