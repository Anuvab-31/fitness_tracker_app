import AppSafeView from '@/components/AppSafeView';
import { AuthProvider } from '@/context/AuthContext';
import { Slot } from 'expo-router';
import React from 'react';

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

  return (
    <AuthProvider>
      <AppSafeView>
        <Slot />
      </AppSafeView>
    </AuthProvider>
  )
}

export default Rootlayout

