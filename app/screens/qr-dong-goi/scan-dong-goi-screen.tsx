import { useNavigation } from "@react-navigation/core"
import React from "react"
import { Button, Text, View } from "react-native-ui-lib"
import HeaderCustom from "../../components/header-custom/header-custom"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Alert, Linking, Platform } from "react-native"
import { openSettings, PERMISSIONS, request, RESULTS } from "react-native-permissions"
import { QRScannerView } from "react-native-qrcode-scanner-view"
import { color } from "../../constants/color"

export default function ScanDongGoi() {
  const navigation = useNavigation()
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
  const requestPermission = () => {
    if (Platform.OS === "ios") {
      request(PERMISSIONS.IOS.CAMERA).then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log("This feature is not available (on this device / in this context)")
            Alert.alert(
              "Thông báo",
              "Máy ảnh trên thiết bị không tương thích.\nVui lòng kiểm tra lại thiết bị!",
              [{ text: "Đồng ý" }],
            )
            break
          case RESULTS.DENIED:
            console.log("The permission has not been requested / is denied but requestable")
            Alert.alert(
              "Thông báo",
              "Bạn đã từ chối quyền máy ảnh. Vui lòng cấp quyền máy ảnh để tiếp tục!",
              [
                {
                  text: "Đồng ý",
                  onPress: () => {
                    if (Platform.OS === "ios") {
                      openSettings()
                    } else {
                      requestPermission()
                    }
                  },
                },
              ],
            )
            break
          case RESULTS.LIMITED:
            console.log("The permission is limited: some actions are possible")
            Alert.alert(
              "Thông báo",
              "Quyền máy ảnh bị hạn chế. Vui lòng kiểm tra lại để tiếp tục!",
              [
                {
                  text: "Đồng ý",
                  onPress: () => {
                    if (Platform.OS === "ios") {
                      openSettings()
                    } else {
                      requestPermission()
                    }
                  },
                },
              ],
            )
            break
          case RESULTS.GRANTED:
            console.log("The permission is granted")
            break
          case RESULTS.BLOCKED:
            console.log("The permission is denied and not requestable anymore")
            Alert.alert(
              "Thông báo",
              "Bạn đã từ chối quyền máy ảnh. Vui lòng cấp quyền máy ảnh để tiếp tục!",
              [
                {
                  text: "Đồng ý",
                  onPress: () => {
                    if (Platform.OS === "ios") {
                      openSettings()
                    } else {
                      openSettings()
                    }
                  },
                },
              ],
            )
            break
        }
      })
    } else if (Platform.OS === "android") {
      request(PERMISSIONS.ANDROID.CAMERA).then((success) => console.log(success))
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScanResult(true)
    }, 5000)
    // ref.current.reactivate()
    // requestPermission()
  }, [])

  const contentNone = () => {
    return (
      <View
        centerV
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          height: 100,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View center>
          <MaterialCommunityIcons name="qrcode" size={26} color="#999999" />
        </View>
        <View center>
          <Text color="#999999">Chưa có mã QR nào được quét</Text>
        </View>
      </View>
    )
  }

  const renderResult = () => {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View center paddingT-20>
          <MaterialCommunityIcons name="check-circle" size={26} color={color.button} />
          <Text color={color.button}>Quét thành công carton, vui lòng quét tiếp</Text>
        </View>
        <View paddingH-15 paddingT-10>
          <Text style={{ fontWeight: "600" }}>Thông tin mã đã quét</Text>
        </View>
        <View paddingH-15>
          <View row spread paddingT-10>
            <Text>Mã Carton (01)</Text>
            <Text color={color.button} style={{ fontWeight: "700" }}>
              LNSC0001
            </Text>
          </View>
          <View row spread paddingT-10>
            <Text>Mã Mùa Vụ(01)</Text>
            <Text color={color.button} style={{ fontWeight: "700" }}>
              LNSC0001
            </Text>
          </View>
          <View row spread paddingT-10>
            <Text>Mã Sản Phẩm (04)</Text>
            <Text color={color.button} style={{ fontWeight: "700" }}>
              LNSC0001
            </Text>
          </View>
        </View>
        <View paddingH-20 paddingT-50 row spread>
          <Button
            backgroundColor="#E00F0F"
            color={"white"}
            label="Huỷ quét"
            borderRadius={5}
            style={{ height: 52, width: "48%" }}
            onPress={() => navigation.pop()}
          />
          <Button
            backgroundColor={color.button}
            color={"white"}
            label="Hoàn tất"
            borderRadius={5}
            style={{ height: 52, width: "48%" }}
            onPress={() => navigation.pop()}
          />
        </View>
      </View>
    )
  }

  return (
    <View flex useSafeArea backgroundColor="white">
      <HeaderCustom
        back={true}
        onPress={() => {
          navigation.pop()
        }}
        title="Gán Mã QR đóng gói"
      />
      <View flex style={{}}>
        <QRScannerView
          onScanResult={onSuccess}
          renderFooterView={scanResult === true ? renderResult : contentNone}
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
    </View>
  )
}
