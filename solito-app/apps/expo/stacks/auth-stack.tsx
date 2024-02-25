import { Stack } from 'expo-router'

export default function AuthStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
      <Stack.Screen name="auth/forgot-password" options={{ headerShown: false }} />
      <Stack.Screen name="auth/verify-otp" options={{ headerShown: false }} />
      <Stack.Screen name="auth/create-password" options={{ headerShown: false }} />
    </Stack>
  )
}
