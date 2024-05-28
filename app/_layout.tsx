import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/src/store";
import useLoader from "@/src/hooks/useLoader";
import { View } from "react-native";
import Loading from "@/src/components/loading";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  return (
    <Provider store={store}>
      <Loading />
      <Layout />
    </Provider>
  );
}
function Layout() {
  const { appIsReady, onLayoutRootView } = useLoader();
  if (!appIsReady) {
    return null;
  }
  return (
    <>
      <View onLayout={onLayoutRootView} />
      <Stack initialRouteName="index">
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
