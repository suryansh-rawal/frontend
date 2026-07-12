import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0f1115' },
        headerTintColor: '#f5f5f5',
        contentStyle: { backgroundColor: '#0f1115' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Suryansh' }} />
      <Stack.Screen name="chat" options={{ title: 'Ask Suryansh (AI)' }} />
    </Stack>
  );
}
