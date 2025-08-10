import React, { useState } from 'react';
import { Slot, Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext';
import AppSafeView from '../components/AppSafeView';

const Rootlayout = () => {

  // const [loaded] = useFonts({
  //   Poppins_100: require('../assets/fonts/Poppins_100.ttf'),
  //   Poppins_200: require('../assets/fonts/Poppins_200.ttf'),
  //   Poppins_300: require('../assets/fonts/Poppins_300.ttf'),
  //   Poppins_400: require('../assets/fonts/Poppins_400.ttf'),
  //   Poppins_500: require('../assets/fonts/Poppins_500.ttf'),
  //   Poppins_600: require('../assets/fonts/Poppins_600.ttf'),
  //   Poppins_700: require('../assets/fonts/Poppins_700.ttf'),
  //   Poppins_800: require('../assets/fonts/Poppins_800.ttf'),
  //   Poppins_900: require('../assets/fonts/Poppins_900.ttf'),
  // });

  // if (!loaded) { return null; }

  const RouteGuard = ({ children }: any) => {
    const isAuth = false;


  }
  const isAuth = false;

  // hooks/useAuth.ts or wherever you manage auth
  // const [isAuth, setIsAuth] = useState(false);
  // const [isVerified, setIsVerified] = useState(false);
  // const [onboardingComplete, setOnboardingComplete] = useState(false);
  // const [loading, setLoading] = useState(false);


  return (
    <AuthProvider>
      <AppSafeView>
        {/* <Slot /> */}
        <Stack>
          <Stack.Protected guard={isAuth}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack.Protected>

          <Stack.Protected guard={!isAuth}>
            <Stack.Screen name="authScreen/login" options={{ headerShown: false }} />
            <Stack.Screen name="authScreen/signUp" options={{ headerShown: false }} />
            <Stack.Screen name="authScreen/otp" options={{ headerShown: false }} />
            {/* <Stack.Screen name="login" options={{ headerShown: false }} /> */}
          </Stack.Protected>

        </Stack>


      </AppSafeView>
    </AuthProvider>
  )
}

export default Rootlayout

