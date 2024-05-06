import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

import {useColorScheme} from '@/components/useColorScheme';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "Outfit-Thin": require("../assets/fonts/Outfit-Thin.ttf"),
        "Outfit-ExtraLight": require("../assets/fonts/Outfit-ExtraLight.ttf"),
        "Outfit-Light": require("../assets/fonts/Outfit-Light.ttf"),
        "Outfit-Normal": require("../assets/fonts/Outfit-Regular.ttf"),
        "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
        "Outfit-SemiBold": require("../assets/fonts/Outfit-SemiBold.ttf"),
        "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
        "Outfit-ExtraBold": require("../assets/fonts/Outfit-ExtraBold.ttf"),
        "Outfit-Black": require("../assets/fonts/Outfit-Black.ttf"),

        "ZillaSlab-Light": require("../assets/fonts/ZillaSlab-Light.ttf"),
        "ZillaSlab-Normal": require("../assets/fonts/ZillaSlab-Regular.ttf"),
        "ZillaSlab-Medium": require("../assets/fonts/ZillaSlab-Medium.ttf"),
        "ZillaSlab-SemiBold": require("../assets/fonts/ZillaSlab-SemiBold.ttf"),
        "ZillaSlab-Bold": require("../assets/fonts/ZillaSlab-Bold.ttf"),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav/>;
}


function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="modal" options={{presentation: 'modal'}}/>
            </Stack>
        </ThemeProvider>
    );
}
