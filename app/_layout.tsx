
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import 'react-native-reanimated';

import { ThemeProvider } from '@/context/ThemeContext';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const router = useRouter();


  useEffect(() => {
    const timer = setTimeout(() => router.replace('/Coffee'), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" />
        <Stack.Screen name="Orders" />
        <Stack.Screen name="Email" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <Toast />
    </ThemeProvider>
  );
}
