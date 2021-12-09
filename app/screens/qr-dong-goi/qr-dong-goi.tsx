import React from "react"
import { Text, TouchableOpacity, View } from "react-native-ui-lib"
import HeaderCustom from "../../components/header-custom/header-custom"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import LinearGradient from "react-native-linear-gradient"
import { color } from "../../constants/color"
import { ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/core"

export default function QRDongGoi() {
  const navigation = useNavigation()
  return (
    <View flex useSafeArea backgroundColor="white">
      <HeaderCustom back={false} onPress={() => {}} title="Gán Mã QR đóng gói" />
      <View paddingH-20 paddingT-10>
        <View row spread>
          <LinearGradient
            colors={["#00A64F", "#38C37A"]}
            style={{ borderRadius: 10, width: "47%" }}
          >
            <TouchableOpacity
              style={{ width: "100%", height: 100 }}
              onPress={() => navigation.push("scan_dong_goi")}
            >
              <View padding-10>
                <MaterialCommunityIcons name="qrcode" size={26} color="white" />
                <Text style={{ fontSize: 13, fontWeight: "600" }} color="white">
                  Gán Mã Đóng Gói Có Một Level
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#00A64F", "#38C37A"]}
            style={{ borderRadius: 10, width: "47%" }}
          >
            <TouchableOpacity
              style={{ width: "100%", height: 100 }}
              onPress={() => navigation.push("scan_dong_goi")}
            >
              <View padding-10>
                <MaterialCommunityIcons name="qrcode-scan" size={26} color="white" />
                <Text style={{ fontSize: 13, fontWeight: "600" }} color="white">
                  Gán Mã Đóng Gói Có Nhiều Level
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View paddingT-20>
          <View>
            <Text color={color.button} style={{ fontSize: 15, fontWeight: "700" }}>
              Lưu ý khi quét mã
            </Text>
          </View>
          <ScrollView>
            <View>
              <Text style={{ fontWeight: "700", paddingTop: 12 }}>Mã đóng gói có một level</Text>
              <View padding-5>
                <View row centerV>
                  <MaterialCommunityIcons name="circle-small" size={30} color={color.button} />
                  <Text>Có mã crop (mùa vụ)</Text>
                </View>
                <View row centerV>
                  <MaterialCommunityIcons name="circle-small" size={30} color={color.button} />
                  <Text>Có nhiều mã sp (mã carton)</Text>
                </View>
                <View row centerV>
                  <MaterialCommunityIcons name="circle-small" size={30} color={color.button} />
                  <Text>Quét lần lượt từng bước</Text>
                </View>
                <View row centerV>
                  <MaterialCommunityIcons name="circle-small" size={30} color={color.button} />
                  <Text>
                    Sau khi quét xong bấm “Hoàn tất” để lưu toàn bộ mã đã quét hoặc bấm ”Huỷ” để làm
                    lại
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: "700", paddingTop: 12 }}>Mã đóng gói có nhiều level</Text>
              <View padding-5>
                <View row centerV>
                  <MaterialCommunityIcons name="circle-small" size={30} color={color.button} />
                  <Text>
                    Level ngoài cùng, bắt buộc phải có mã carton (cha/carton) cần quét đầu tiên
                  </Text>
                </View>
                <View row centerV>
                  <MaterialCommunityIcons name="circle-small" size={30} color={color.button} />
                  <Text>Có thể có mã crop (mã mùa vụ)</Text>
                </View>
                <View row centerV>
                  <MaterialCommunityIcons name="circle-small" size={30} color={color.button} />
                  <Text>Có nhiều mã sp (mã con/carton)</Text>
                </View>
                <View row centerV>
                  <MaterialCommunityIcons name="circle-small" size={30} color={color.button} />
                  <Text>Muốn có nhiều level, thì thực hiện lại bước 1</Text>
                </View>
                <View row centerV>
                  <MaterialCommunityIcons name="circle-small" size={30} color={color.button} />
                  <Text>
                    Quét lần lượt từng bước Sau khi quét xong bấm “Hoàn tất” để lưu toàn bộ mã đã
                    quét hoặc bấm ”Huỷ” để làm lại
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
