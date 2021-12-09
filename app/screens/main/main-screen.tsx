import React from "react"
import { Text, View } from "react-native-ui-lib"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { color } from "../../constants/color"
import Home from "../home/home-screen"
import { Image } from "react-native"
import History from "../history/history-screen"
import QRMuaVu from "../qr-mua-vu/qr-mua-vu-screen"
import QRDongGoi from "../qr-dong-goi/qr-dong-goi"
import ScanQR from "../scan-qr/scan-qr-screen"
import SideMenu from "../../navigators/drawer"

const Tab = createBottomTabNavigator()

export default function Main() {
  return (
    <View flex backgroundColor="white">
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: color.button,
          headerShown: false,
          tabBarStyle: {
            height: 90,
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={SideMenu}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View center>
                <Image
                  source={require("../../../assets/images/home.png")}
                  style={{ tintColor: color }}
                />
                <Text style={{ fontSize: 10, textAlign: "center" }} color={color}>
                  Trang chủ
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="scan_qr"
          component={ScanQR}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View center paddingT-10>
                <Image
                  source={require("../../../assets/images/qr_code.png")}
                  style={{ tintColor: color }}
                />
                <View width={50}>
                  <Text style={{ fontSize: 10, textAlign: "center" }} color={color}>
                    Kiểm Tra Mã QR
                  </Text>
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="qr_mua_vu"
          component={QRMuaVu}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View center marginT-10>
                <Image
                  source={require("../../../assets/images/code.png")}
                  style={{ tintColor: color }}
                />
                <View width={60}>
                  <Text style={{ fontSize: 10, textAlign: "center" }} color={color}>
                    Gán Mã QR Mùa Vụ
                  </Text>
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="qr_dong_goi"
          component={QRDongGoi}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View center marginT-10>
                <Image
                  source={require("../../../assets/images/qr_code_scanner.png")}
                  style={{ tintColor: color }}
                />
                <Text style={{ fontSize: 10, textAlign: "center" }} color={color}>
                  Gán Mã QR Đóng Gói
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="comment"
          component={History}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View center>
                <Image
                  source={require("../../../assets/images/chat.png")}
                  style={{ tintColor: color }}
                />
                <Text style={{ fontSize: 10, textAlign: "center" }} color={color}>
                  Ghi Nhật Ký
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  )
}
