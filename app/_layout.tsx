import Navbar from "@/components/navbar";
import { Stack, usePathname } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  const pathname = usePathname();

  const showNavbar = ["/dashboard", "/screens/settings"].includes(pathname);

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          animationDuration: 200,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="screens/payment" />
        <Stack.Screen name="screens/settings" />
        <Stack.Screen name="screens/contacts" />
        <Stack.Screen name="pages/profile" />
        <Stack.Screen name="pages/payment-methods" />
        <Stack.Screen name="pages/security" />
        <Stack.Screen name="pages/notifications" />
        <Stack.Screen name="pages/appearance" />
        <Stack.Screen name="pages/language" />
        <Stack.Screen name="pages/help-center" />
        <Stack.Screen name="pages/terms-privacy" />
        <Stack.Screen name="screens/qrCamera" />
      </Stack>
      {showNavbar && <Navbar style={styles.navbar} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    position: 'absolute',
    bottom: 50,
  },
});
