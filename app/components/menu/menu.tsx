import React from "react"
import { Alert, Image, Platform } from "react-native"
import { Text, TouchableOpacity, View } from "react-native-ui-lib"
import { color } from "../../constants/color"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation, CommonActions } from "@react-navigation/core"
import { clear } from "../../utils/storage"
import { NavigatorParamList } from "../../navigators"

const menu = [
  {
    name: "Đổi mật khẩu",
    icon: "lock",
  },
  {
    name: "Cập nhật thông tin",
    icon: "account-box",
  },
  {
    name: "Ngôn ngữ",
    icon: "translate",
  },
  {
    name: "Câu hỏi thường gặp",
    icon: "forum",
  },
  {
    name: "Thoát",
    icon: "logout-variant",
    action: "logout",
  },
]
export default function Menu({ isOpen }) {
  const navigation = useNavigation()
  const logout = async () => {
    Alert.alert("Thông báo", "Bạn có chắc chắn muốn đăng xuất?", [
      {
        text: "Bỏ qua",
        onPress: (value) => {},
      },
      {
        text: "Đồng ý",
        onPress: () => {
          clear()
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: NavigatorParamList.splash }],
            }),
          )
        },
      },
    ])
  }

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: 300,
        backgroundColor: "transparent",
        zIndex: 0,
      }}
    >
      <View flex style={{ marginTop: Platform.OS === "ios" ? 60 : 0 }}>
        <View row paddingH-35 centerV>
          <Image source={require("../../../assets/images/uploadImage.png")} />
          <Text style={{ marginLeft: 10 }} color="white">
            Nguyen Quang Duc
          </Text>
        </View>
        <View marginT-10 center>
          <Image source={require("../../../assets/images/line.png")} />
        </View>
        <View paddingH-30 paddingT-20>
          {menu.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                switch (item.action) {
                  case "logout":
                    logout()
                    break

                  default:
                    break
                }
              }}
            >
              <View row centerV padding-15>
                <MaterialCommunityIcons name={item.icon} size={24} color="white" />
                <Text style={{ marginLeft: 10 }} color="white">
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}
