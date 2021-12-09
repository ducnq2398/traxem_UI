import { useNavigation } from "@react-navigation/core"
import React from "react"
import { Alert, Image, ImageBackground } from "react-native"
import KeyboardSpacer from "react-native-keyboard-spacer"
import LinearGradient from "react-native-linear-gradient"
import TouchID from "react-native-touch-id"
import { Button, Checkbox, Text, TouchableOpacity, View } from "react-native-ui-lib"
import InputCustom from "../../components/input-custom/input-custom"
import { color } from "../../constants/color"

const logo = require("../../../assets/images/logo.png")
const background = require("../../../assets/images/splash-2.png")
const faceId = require("../../../assets/images/faceid.png")
const touchId = require("../../../assets/images/touchid.png")

export default function Login() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isCheck, setIsCheck] = React.useState(false)
  const [isFace, setIsFace] = React.useState(false)

  const navigation = useNavigation()

  function checkTypeLogin() {
    TouchID.isSupported()
      .then((type) => {
        if (type === "FaceID") {
          setIsFace(true)
        } else if (type === "TouchID") {
          setIsFace(false)
        } else if (type === true) {
          setIsFace(false)
        }
      })
      .catch((err) => console.log(err))
  }

  React.useEffect(() => {
    checkTypeLogin()
  }, [])

  function loginWithType() {
    const optionalConfigObject = {
      title: "Authentication Required", // Android
      color: "#e00606", // Android,
      fallbackLabel: "Show Passcode", // iOS
    }
    TouchID.authenticate("Login", optionalConfigObject)
      .then((success) => {
        navigation.push("main")
      })
      .catch((error) => {
        Alert.alert("Xác thực thất bại")
      })
  }

  function login() {
    navigation.push("main")
  }

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
            <View paddingT-29 paddingL-20>
              <Text uppercase style={{ fontWeight: "700", fontSize: 20 }}>
                Đăng nhập
              </Text>
            </View>
            <InputCustom
              placeholder="example@traxem.com"
              text={email}
              onChange={(text) => setEmail(text)}
            />
            <InputCustom
              placeholder="********"
              security={true}
              text={password}
              onChange={(text) => setPassword(text)}
            />
            <View row spread paddingH-20 paddingT-11>
              <Checkbox
                value={isCheck}
                onValueChange={(value) => setIsCheck(value)}
                color={color.button}
                label="Lưu mật khẩu"
              />
              <TouchableOpacity onPress={() => navigation.push("forgot")}>
                <Text>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
            <View paddingT-44 paddingH-20 row spread>
              <Button
                backgroundColor={color.button}
                color={"white"}
                label="Đăng nhập"
                borderRadius={5}
                style={{ height: 52, width: "80%" }}
                onPress={login}
              />
              <View backgroundColor={color.button} width={52} style={{ borderRadius: 5 }} center>
                <TouchableOpacity onPress={loginWithType}>
                  {isFace === true ? <Image source={faceId} /> : <Image source={touchId} />}
                </TouchableOpacity>
              </View>
            </View>
            <View paddingT-56 centerV center paddingB-30 row>
              <Text>Bạn chưa có tài khoản? </Text>
              <TouchableOpacity onPress={() => navigation.push("register")}>
                <Text color={color.button}>Đăng ký ngay</Text>
              </TouchableOpacity>
            </View>
            <KeyboardSpacer />
          </View>
          <View backgroundColor="white" />
        </View>
      </ImageBackground>
    </LinearGradient>
  )
}
