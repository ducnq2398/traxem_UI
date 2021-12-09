import { useNavigation } from "@react-navigation/core"
import React from "react"
import { Alert, Image, ImageBackground, Platform } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { Button, Text, TouchableOpacity, View, RadioGroup, RadioButton } from "react-native-ui-lib"
import InputCustom from "../../components/input-custom/input-custom"
import { color } from "../../constants/color"
import KeyboardSpacer from "react-native-keyboard-spacer"
import ImagePicker from "react-native-image-crop-picker"
import { check, openSettings, PERMISSIONS, request, RESULTS } from "react-native-permissions"
import RNFS from "react-native-fs"

const background = require("../../../assets/images/splash-2.png")
const logo = require("../../../assets/images/logo.png")
const avt = require("../../../assets/images/uploadImage.png")

export default function Register() {
  const navigation = useNavigation()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [repassword, setRePassword] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [avatar, setAvatar] = React.useState(null)
  const [check, setCheck] = React.useState(null)

  React.useEffect(() => {
    // getPermission()
  }, [])

  function pickAvatar() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setAvatar({ uri: image.sourceURL })
    })
  }
  const [step, setStep] = React.useState(1)

  return (
    <LinearGradient colors={["#00A64F", "#38C37A"]} style={{ flex: 1 }}>
      <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
        <View flex useSafeArea>
          <View center paddingT-10>
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
            <View paddingT-29 paddingL-20 row centerV spread>
              <View row centerV>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      if (step === 1) {
                        navigation.navigate("login")
                      } else {
                        setStep(1)
                      }
                    }}
                  >
                    <Image source={require("../../../assets/images/back.png")} />
                  </TouchableOpacity>
                </View>
                <View paddingL-10>
                  <Text uppercase style={{ fontWeight: "700", fontSize: 20 }}>
                    Đăng ký tài khoản
                  </Text>
                </View>
              </View>
              <View row paddingR-20>
                <View>
                  <Text color={color.button} style={{ fontWeight: "700", fontSize: 20 }}>
                    {step}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontWeight: "700", fontSize: 20 }}>/2</Text>
                </View>
              </View>
            </View>
            <View paddingH-20 paddingT-35 row centerV spread>
              <View row centerV>
                <TouchableOpacity onPress={pickAvatar}>
                  <View width={80} height={80}>
                    <Image
                      source={avatar === null ? avt : avatar}
                      resizeMode="cover"
                      style={{ width: 80, height: 80, borderRadius: 50 }}
                    />
                  </View>
                  <View style={{ position: "absolute", bottom: 0, right: 0 }}>
                    <Image source={require("../../../assets/images/pic.png")} />
                  </View>
                </TouchableOpacity>
                <View paddingL-10>
                  <Image source={require("../../../assets/images/to.png")} />
                </View>
              </View>
              <View width={179}>
                <Text style={{ textAlign: "right" }}>
                  Please select an image(*.JPG), maximum file size allowed 1MB
                </Text>
              </View>
            </View>
            {step === 1 && (
              <View>
                <InputCustom
                  placeholder="Tên đăng nhập"
                  text={username}
                  onChange={(text) => setUsername(text)}
                />
                <InputCustom placeholder="Email" text={email} onChange={(text) => setEmail(text)} />
                <InputCustom
                  placeholder="Mật khẩu"
                  text={password}
                  security={true}
                  onChange={(text) => setPassword(text)}
                />
                <InputCustom
                  placeholder="Nhập lại mật khẩu"
                  text={repassword}
                  security={true}
                  onChange={(text) => setRePassword(text)}
                />
              </View>
            )}

            {step === 2 && (
              <View>
                <View>
                  <InputCustom
                    placeholder="Tên công ty"
                    text={company}
                    onChange={(text) => setCompany(text)}
                  />
                  <InputCustom
                    placeholder="Số điện thoại"
                    text={phone}
                    onChange={(text) => setPhone(text)}
                  />
                  <InputCustom
                    placeholder="Địa chỉ"
                    text={address}
                    onChange={(text) => setAddress(text)}
                  />
                </View>
                <View paddingH-20 paddingT-18>
                  <RadioGroup initialValue={check} onValueChange={(value) => setCheck(value)}>
                    <View row>
                      <View row centerV style={{ width: 100 }}>
                        <RadioButton
                          color={color.button}
                          style={{ borderColor: color.button }}
                          value="sx"
                          label="Sản xuất"
                        />
                      </View>
                      <View centerV paddingL-40>
                        <RadioButton
                          color={color.button}
                          style={{ borderColor: color.button }}
                          value="kd"
                          label="Kiểm định"
                        />
                      </View>
                    </View>
                    <View row paddingT-6>
                      <View row centerV style={{ width: 100 }}>
                        <RadioButton
                          color={color.button}
                          style={{ borderColor: color.button }}
                          value={"vc"}
                          label={"Vận chuyển"}
                        />
                      </View>
                      <View row centerV paddingL-40>
                        <RadioButton
                          color={color.button}
                          style={{ borderColor: color.button }}
                          value={"bl"}
                          label={"Bán lẻ"}
                        />
                      </View>
                    </View>
                  </RadioGroup>
                </View>
              </View>
            )}

            {step === 1 && (
              <View paddingH-20 paddingT-51>
                <Button
                  backgroundColor={color.button}
                  color={"white"}
                  label="Tiếp theo"
                  borderRadius={5}
                  style={{ height: 52 }}
                  onPress={() => setStep(2)}
                />
              </View>
            )}
            {step === 2 && (
              <View paddingH-20 paddingT-43>
                <Button
                  backgroundColor={color.button}
                  color={"white"}
                  label="Đăng ký"
                  borderRadius={5}
                  style={{ height: 52 }}
                  // onPress={() => navigation.push("register2")}
                />
              </View>
            )}
            <View paddingT-56 centerV center paddingB-30 row>
              <Text>Bạn đã có tài khoản? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
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
