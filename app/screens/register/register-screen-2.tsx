import { useNavigation } from "@react-navigation/core"
import React from "react"
import { Alert, Image, ImageBackground, Platform } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { Button, Text, TouchableOpacity, View } from "react-native-ui-lib"
import InputCustom from "../../components/input-custom/input-custom"
import { color } from "../../constants/color"
import KeyboardSpacer from "react-native-keyboard-spacer"
import ImagePicker from "react-native-image-crop-picker"
import { check, openSettings, PERMISSIONS, request, RESULTS } from "react-native-permissions"
import { RadioButton } from "react-native-paper"

const background = require("../../../assets/images/splash-2.png")
const logo = require("../../../assets/images/logo.png")
const avt = require("../../../assets/images/uploadImage.png")

export default function Register2() {
  const navigation = useNavigation()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [repassword, setRePassword] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [avatar, setAvatar] = React.useState(null)
  const [value, setValue] = React.useState("first")

  // const getPermission = () => {
  //   request(
  //     Platform.OS === "ios" ? PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY : PERMISSIONS.ANDROID.CAMERA,
  //   ).then((result) => {
  //     switch (result) {
  //       case RESULTS.UNAVAILABLE:
  //         console.log("This feature is not available (on this device / in this context)")
  //         Alert.alert(
  //           "Thông báo",
  //           "Máy ảnh trên thiết bị không tương thích.\nVui lòng kiểm tra lại thiết bị!",
  //           [{ text: "Đồng ý" }],
  //         )
  //         break
  //       case RESULTS.DENIED:
  //         console.log("The permission has not been requested / is denied but requestable")
  //         Alert.alert(
  //           "Thông báo",
  //           "Bạn đã từ chối quyền máy ảnh. Vui lòng cấp quyền máy ảnh để tiếp tục!",
  //           [
  //             {
  //               text: "Đồng ý",
  //               onPress: () => {
  //                 if (Platform.OS === "ios") {
  //                   openSettings()
  //                 } else {
  //                   getPermission()
  //                 }
  //               },
  //             },
  //           ],
  //         )
  //         break
  //       case RESULTS.LIMITED:
  //         console.log("The permission is limited: some actions are possible")
  //         Alert.alert("Thông báo", "Quyền máy ảnh bị hạn chế. Vui lòng kiểm tra lại để tiếp tục!", [
  //           {
  //             text: "Đồng ý",
  //             onPress: () => {
  //               if (Platform.OS === "ios") {
  //                 openSettings()
  //               } else {
  //                 getPermission()
  //               }
  //             },
  //           },
  //         ])
  //         break
  //       case RESULTS.GRANTED:
  //         console.log("The permission is granted")
  //         // setPassPermission(true)
  //         break
  //       case RESULTS.BLOCKED:
  //         console.log("The permission is denied and not requestable anymore")
  //         Alert.alert(
  //           "Thông báo",
  //           "Bạn đã từ chối quyền máy ảnh. Vui lòng cấp quyền máy ảnh để tiếp tục!",
  //           [
  //             {
  //               text: "Đồng ý",
  //               onPress: () => {
  //                 if (Platform.OS === "ios") {
  //                   openSettings()
  //                 } else {
  //                   openSettings()
  //                 }
  //               },
  //             },
  //           ],
  //         )
  //         break
  //     }
  //   })
  // }

  React.useEffect(() => {
    // getPermission()
  }, [])

  function pickAvatar() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image)
      setAvatar({ uri: image.path })
    })
  }

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
                  <TouchableOpacity onPress={() => navigation.pop()}>
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
                    2
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
                    <Image source={avatar === null ? avt : avatar?.uri} resizeMode="contain" />
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
            <View>
              <InputCustom
                placeholder="Tên công ty"
                text={username}
                onChange={(text) => setUsername(text)}
              />
              <InputCustom
                placeholder="Số điện thoại"
                text={password}
                onChange={(text) => setPassword(text)}
              />
              <InputCustom
                placeholder="Địa chỉ"
                text={repassword}
                security={true}
                onChange={(text) => setRePassword(text)}
              />
            </View>
            <View>{/* <RadioButton.Group></RadioButton.Group> */}</View>
            <View paddingH-20 paddingT-51>
              <Button
                backgroundColor={color.button}
                color={"white"}
                label="Đăng ký"
                borderRadius={5}
                style={{ height: 52 }}
                // onPress={}
              />
            </View>
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
