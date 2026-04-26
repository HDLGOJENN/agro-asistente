import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="add-crop" options={{ title: 'Agregar cultivo' }} />
      <Stack.Screen name="map-picker" options={{ title: 'Seleccionar ubicación' }} />
    </Stack>
  );
}