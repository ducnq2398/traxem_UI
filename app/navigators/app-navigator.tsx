/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { navigationRef } from "./navigation-utilities"
import Splash from "../screens/splash/splash-screen"
import Login from "../screens/login/login-screen"
import ForgotPassword from "../screens/forgot-password/forgot-password-screen"
import Register from "../screens/register/register-screen"
import Register2 from "../screens/register/register-screen-2"
import Main from "../screens/main/main-screen"
import DetailAction from "../screens/detail-action/detail-action-screen"
import HistoryComment from "../screens/history/history-comment-screen"
import ScanDongGoi from "../screens/qr-dong-goi/scan-dong-goi-screen"
import QRDongGoi from "../screens/qr-dong-goi/qr-dong-goi"
import QRMuaVu from "../screens/qr-mua-vu/qr-mua-vu-screen"
import ScanQR from "../screens/scan-qr/scan-qr-screen"
import History from "../screens/history/history-screen"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export const NavigatorParamList = {
  splash: "splash",
  login: "login",
  forgot: "forgot",
  register: "register",
  register2: "register2",
  main: "main",
  detail_action: "detail_action",
  history_comment: "history_comment",
  scan_dong_goi: "scan_dong_goi",
  qr_dong_goi: "qr_dong_goi",
  qr_mua_vu: "qr_mua_vu",
  scan_qr: "scan_qr",
  comment: "comment",
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="splash"
    >
      <Stack.Screen name={NavigatorParamList.splash} component={Splash} />
      <Stack.Screen name={NavigatorParamList.login} component={Login} />
      <Stack.Screen name={NavigatorParamList.forgot} component={ForgotPassword} />
      <Stack.Screen name={NavigatorParamList.register} component={Register} />
      <Stack.Screen name={NavigatorParamList.register2} component={Register2} />
      <Stack.Screen name={NavigatorParamList.main} component={Main} />
      <Stack.Screen name={NavigatorParamList.detail_action} component={DetailAction} />
      <Stack.Screen name={NavigatorParamList.history_comment} component={HistoryComment} />
      <Stack.Screen name={NavigatorParamList.scan_dong_goi} component={ScanDongGoi} />
      <Stack.Screen name={NavigatorParamList.qr_dong_goi} component={QRDongGoi} />
      <Stack.Screen name={NavigatorParamList.qr_mua_vu} component={QRMuaVu} />
      <Stack.Screen name={NavigatorParamList.scan_qr} component={ScanQR} />
      <Stack.Screen name={NavigatorParamList.comment} component={History} />
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["splash"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
