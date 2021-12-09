import React from "react"
import { View } from "react-native-ui-lib"
import { QRScannerView } from "react-native-qrcode-scanner-view"
import HeaderCustom from "../../components/header-custom/header-custom"
import { color } from "../../constants/color"

export default function ScanQR() {
  const onSuccess = (e) => {
    const check = e.data.substring(0, 4)
    if (check === "http") {
      //   Linking.openURL(e.data).catch((err) => console.error("An error occured", err))
    } else {
      console.log("SCAN OK")
    }
  }
  return (
    <View flex useSafeArea backgroundColor="white">
      <HeaderCustom back={false} onPress={() => {}} title="KIỂM TRA MÃ QR" />
      <View flex>
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
          maskColor="#CACACA"
          rectStyle={{
            width: 201,
            height: 201,
            borderWidth: 0,
            borderColor: "#000000",
          }}
        />
      </View>
    </View>
  )
}
