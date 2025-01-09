import { Stack } from "expo-router";


export default function AuthStack() {
    return (
        <Stack screenOptions={{ 
            headerShown: true,  // Show headers for stack screens
            headerBackTitle: 'Back'
        }}>
            <Stack.Screen name="sign-in" options={{title: 'Sign In'}} />
            <Stack.Screen name="sign-up" options={{title: 'Sign Up'}} />
        </Stack>
    );
}