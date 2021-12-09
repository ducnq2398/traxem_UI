import React from "react"
import { Image, ImageBackground } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { Button, Text, TouchableOpacity, View } from "react-native-ui-lib"
import InputCustom from "../../components/input-custom/input-custom"
import KeyboardSpacer from "react-native-keyboard-spacer"
import { color } from "../../constants/color"
import { useNavigation } from "@react-navigation/core"

const background = require("../../../assets/images/splash-2.png")
const logo = require("../../../assets/images/logo.png")

export default function ForgotPassword() {
  const [email, setEmail] = React.useState("")

  const navigation = useNavigation()

  return (
    <LinearGradient colors={["#00A64F", "#38C37A"]} style={{ flex: 1 }}>
      <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
        <View flex useSafeArea>
          <View center marginT-143>
            <Image source={logo} />
          </View>
          <View
            backgroundColor="white"
            style={{
              position: "absolute",
              right: 0,
              left: 0,
              bottom: 0,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}
          >
            <View paddingT-29 paddingL-20 row centerV>
              <View>
                <TouchableOpacity onPress={() => navigation.pop()}>
                  <Image source={require("../../../assets/images/back.png")} />
                </TouchableOpacity>
              </View>
              <View paddingL-10>
                <Text uppercase style={{ fontWeight: "700", fontSize: 20 }}>
                  Quên mật khẩu
                </Text>
              </View>
            </View>
            <View paddingH-20 paddingT-27 width={273}>
              <Text>Mật khẩu mới sẽ được gửi đến email bạn đã đăng ký</Text>
            </View>
            <InputCustom
              placeholder="example@traxem.com"
              text={email}
              onChange={(text) => setEmail(text)}
            />
            <View paddingH-20 paddingT-62>
              <Button
                backgroundColor={color.button}
                color={"white"}
                label="Gửi"
                borderRadius={5}
                style={{ height: 52 }}
              />
            </View>
            <View paddingT-56 centerV center paddingB-30 row>
              <Text>Bạn đã có tài khoản? </Text>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Text color={color.button}>Đăng nhập ngay</Text>
              </TouchableOpacity>
            </View>
            <KeyboardSpacer />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  )
}
