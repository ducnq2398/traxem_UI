import { CommonActions, useNavigation } from "@react-navigation/core"
import React from "react"
import { Image, ImageBackground } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { View } from "react-native-ui-lib"
import { NavigatorParamList } from "../../navigators"

const background = require("../../../assets/images/splash-2.png")
const logo = require("../../../assets/images/logo.png")

export default function Splash() {
  const navigation = useNavigation()

  function goLogin() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: NavigatorParamList.login }],
      }),
    )
  }

  React.useEffect(() => {
    setTimeout(() => {
      goLogin()
    }, 2000)
  }, [])

  return (
    <LinearGradient colors={["#00A64F", "#38C37A"]} style={{ flex: 1 }}>
      <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
        <View flex useSafeArea>
          <View center centerV paddingT-300>
            <Image source={logo} />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  )
}
