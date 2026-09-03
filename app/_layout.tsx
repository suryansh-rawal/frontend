import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f3f0e9' },
        headerTintColor: '#171717',
        headerShadowVisible: false,
        contentStyle: { backgroundColor: '#f3f0e9' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Suryansh' }} />
      <Stack.Screen name="chat" options={{ title: 'Ask Suryansh (AI)' }} />
    </Stack>
  );
}
