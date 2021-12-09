import React from "react"
import { Button, Text, TouchableOpacity, View } from "react-native-ui-lib"
import HeaderCustom from "../../components/header-custom/header-custom"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { color } from "../../constants/color"
import { Divider } from "react-native-paper"
import { Linking, ScrollView } from "react-native"
import { QRScannerView } from "react-native-qrcode-scanner-view"

export default function QRMuaVu() {
  const [scanResult, setScanResult] = React.useState(false)
  const onSuccess = (e) => {
    const check = e.data.substring(0, 4)
    if (check === "http") {
      Linking.openURL(e.data).catch((err) => console.error("An error occured", err))
    } else {
      setScanResult(true)
      console.log("SCAN OK")
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScanResult(true)
    }, 5000)
  }, [])

  return (
    <View flex useSafeArea backgroundColor="white">
      <HeaderCustom back={false} title="Gán Mã QR Mùa vụ" onPress={() => {}} />
      {scanResult === false && (
        <View flex style={{}}>
          <QRScannerView
            onScanResult={onSuccess}
            scanBarAnimateReverse={true}
            hintText="Hướng camera vào mã QR"
            cornerStyle={{
              height: 32,
              width: 32,
              borderWidth: 6,
              borderColor: color.button,
            }}
            isShowScanBar={false}
            // maskColor="#CACACA"
            rectStyle={{
              width: 201,
              height: 201,
              marginBottom: 300,
              borderWidth: 0,
              borderColor: "#000000",
            }}
          />
        </View>
      )}
      {scanResult === true && (
        <View>
          <View paddingH-20 paddingT-10>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 5,
                height: 50,
                width: "100%",
                paddingHorizontal: 10,
                borderColor: color.border,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text color={color.placeholder}>Chọn mùa vụ</Text>
              <MaterialCommunityIcons name="menu-down" color={color.button} size={26} />
            </TouchableOpacity>
          </View>
          <View paddingH-20 paddingT-10>
            <Text color={color.black} style={{ fontSize: 15, fontWeight: "700" }}>
              Thông tin mùa vụ
            </Text>
          </View>
          <ScrollView style={{ paddingHorizontal: 20 }}>
            <View padding-10 row centerV>
              <View>
                <MaterialCommunityIcons name="map-marker" color={color.button} size={26} />
              </View>
              <View marginL-10>
                <Text>Điểm A, Lot B</Text>
              </View>
            </View>
            <Divider />
            <View padding-10 row centerV>
              <View>
                <MaterialCommunityIcons name="contain" color={color.button} size={26} />
              </View>
              <View marginL-10>
                <Text>10.000 Ha</Text>
              </View>
            </View>
            <Divider />
            <View padding-10 row centerV>
              <View>
                <MaterialCommunityIcons name="flower" color={color.button} size={26} />
              </View>
              <View marginL-10>
                <Text>Lúa giống ST25</Text>
              </View>
            </View>
            <Divider />
            <View padding-10 row centerV>
              <View>
                <MaterialCommunityIcons name="calendar-range" color={color.button} size={26} />
              </View>
              <View marginL-10 width="80%" row spread>
                <Text>01/01/2021 - 01/10/2021</Text>
                <Text>(Dự kiến)</Text>
              </View>
            </View>
            <Divider />
            <View padding-10 row centerV>
              <View>
                <MaterialCommunityIcons name="dump-truck" color={color.button} size={26} />
              </View>
              <View width="80%" marginL-10 row spread>
                <Text>10 tấn</Text>
                <Text> (Dự kiến)</Text>
              </View>
            </View>
            <Divider />
            <View padding-10 row centerV>
              <View>
                <MaterialCommunityIcons name="calendar-check" color={color.button} size={26} />
              </View>
              <View marginL-10>
                <Text>In-progress</Text>
              </View>
            </View>
            <Divider />
            <View padding-10 row>
              <View>
                <MaterialCommunityIcons name="message-text" color={color.button} size={26} />
              </View>
              <View marginL-10 width="80%">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </Text>
              </View>
            </View>
            <Divider />
          </ScrollView>
        </View>
      )}
      {scanResult === true && (
        <View padding-20 style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <Button
            backgroundColor={color.button}
            color={"white"}
            label="Gán mã"
            borderRadius={5}
            style={{ height: 52 }}
          />
        </View>
      )}
    </View>
  )
}
