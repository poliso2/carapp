import { tokenCache } from "@/utils/cache";
import { ClerkLoaded, ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Redirect, Slot, Stack} from "expo-router";
import { StatusBar } from "expo-status-bar";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if(!publishableKey) {
  throw new Error('Missing publishable key. Check EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in the .env file.')
}

export default function RootLayout() {
  useFonts({
    'satoshi-bold': require("./../assets/fonts/SatoshiBold.otf"),
    'satoshi-bold-italic': require("./../assets/fonts/SatoshiBoldItalic.otf"),
    'satoshi-light': require("./../assets/fonts/SatoshiLight.otf"),
    'satoshi-light-italic': require("./../assets/fonts/SatoshiLightItalic.otf"),
    'satoshi-regular': require("./../assets/fonts/SatoshiRegular.otf"),
    'satoshi-variable': require("./../assets/fonts/SatoshiVariable.ttf"),
    "cinderela": require("./../assets/fonts/CinderelaPersonalUseRegular.ttf")
  })

  return (
    <ClerkProvider  publishableKey={publishableKey} tokenCache={tokenCache}>
          {/* <Slot/> */}
      <ClerkLoaded>
          <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            <Stack.Screen name="auth" options={{headerShown: false}}/>
          </Stack>
        </ClerkLoaded>
    </ClerkProvider>
  )
}
