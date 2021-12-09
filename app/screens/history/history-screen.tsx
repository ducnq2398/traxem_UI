import { useNavigation } from "@react-navigation/core"
import React from "react"
import { Image, ScrollView } from "react-native"
import { Button, Dialog, Text, TextArea, TouchableOpacity, View } from "react-native-ui-lib"
import HeaderCustom from "../../components/header-custom/header-custom"
import InputCustom from "../../components/input-custom/input-custom"
import { color } from "../../constants/color"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import KeyboardSpacer from "react-native-keyboard-spacer"
import DatePickerCustom from "../../components/date-picker-custom/date-picker-custom"
import moment from "moment"
import { Divider } from "react-native-paper"

export default function History() {
  const navigation = useNavigation()
  const [formData, setFormData] = React.useState({
    mv: "",
    cv: "",
    lcv: "",
    date: moment(new Date()).format("DD/MM/YYYY"),
    time: "",
  })
  const [lstImg, setLstImg] = React.useState([
    {
      uri: "",
    },
  ])
  const [pickDate, setPickDate] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <View flex useSafeArea backgroundColor="white">
      <HeaderCustom
        back={false}
        title="GHI NHẬT KÝ"
        onPress={() => {}}
        iconRight="history"
        onPressRight={() => navigation.push("history_comment")}
      />
      <ScrollView>
        <View paddingT-30>
          <View>
            <View paddingH-20>
              <Text style={{ fontWeight: "700" }} color="#535353">
                Mùa vụ
              </Text>
            </View>
            <InputCustom
              placeholder="Tên mùa vụ"
              text={formData.mv}
              onChange={(mv) => setFormData({ ...formData, mv: mv })}
            />
          </View>
          <View paddingT-20>
            <View paddingH-20>
              <Text style={{ fontWeight: "700" }} color="#535353">
                Công việc
              </Text>
            </View>
            <View paddingH-20 paddingT-10>
              <TouchableOpacity
                onPress={() => setIsOpen(true)}
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
                <Text color={formData.cv === "" ? color.placeholder : color.black}>
                  {formData.cv === "" ? "Công việc" : formData.cv}{" "}
                </Text>
                <MaterialCommunityIcons name="menu-down" color={color.button} size={26} />
              </TouchableOpacity>
            </View>
          </View>
          <View paddingT-20>
            <View paddingH-20>
              <Text style={{ fontWeight: "700" }} color="#535353">
                Loại công việc
              </Text>
            </View>
            <InputCustom
              placeholder="Loại công việc"
              text={formData.mv}
              onChange={(mv) => setFormData({ ...formData, mv: mv })}
            />
          </View>
          <View paddingT-20>
            <View paddingH-20>
              <Text style={{ fontWeight: "700" }} color="#535353">
                Ngày thực hiện
              </Text>
            </View>
            <View paddingH-20 paddingT-10>
              <TouchableOpacity
                onPress={() => setPickDate(true)}
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
                <Text color={formData.date === "" ? color.placeholder : color.black}>
                  {formData.date === "" ? " Ngày thực hiện" : formData.date}{" "}
                </Text>
                <MaterialCommunityIcons name="calendar" color={color.button} size={26} />
              </TouchableOpacity>
            </View>
          </View>
          <View paddingT-20>
            <View paddingH-20>
              <Text style={{ fontWeight: "700" }} color="#535353">
                Thời gian thực hiện
              </Text>
            </View>
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
                <Text color={color.border}>Thời gian thực hiện</Text>
                <MaterialCommunityIcons name="menu-down" color={color.button} size={26} />
              </TouchableOpacity>
            </View>
          </View>
          <View paddingT-20 paddingH-20>
            <View paddingB-10>
              <Text style={{ fontWeight: "700" }} color="#535353">
                Ghi chú
              </Text>
            </View>
            <View
              style={{
                height: 150,
                borderWidth: 1,
                padding: 10,
                borderColor: color.border,
                borderRadius: 5,
              }}
            >
              <TextArea placeholder="Nhập ghi chú" />
            </View>
          </View>
          <View paddingT-20>
            <View paddingH-20>
              <Text style={{ fontWeight: "700" }} color="#535353">
                Hình ảnh
              </Text>
              <ScrollView horizontal={true}>
                {lstImg.map((item, index) => {
                  return (
                    <View key={index}>
                      {item.uri === "" && (
                        <View
                          marginT-10
                          center
                          style={{
                            width: 76,
                            height: 76,
                            borderRadius: 5,
                            backgroundColor: "#00A64F",
                          }}
                        >
                          <MaterialCommunityIcons name="camera-plus" color="white" size={24} />
                        </View>
                      )}
                    </View>
                  )
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      <View padding-20>
        <Button
          backgroundColor={color.button}
          color={"white"}
          label="Lưu nhật ký"
          borderRadius={5}
          style={{ height: 52 }}
        />
      </View>
      <KeyboardSpacer />
      <DatePickerCustom
        visible={pickDate}
        currentDate={formData.date}
        onClose={() => setPickDate(false)}
        onPressDay={(date) => setFormData({ ...formData, date: date })}
      />
      <Dialog
        useSafeArea
        visible={isOpen}
        onDismiss={() => setIsOpen(false)}
        containerStyle={{
          backgroundColor: "white",
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          padding: 20,
        }}
        bottom={"bottom" === "bottom"}
      >
        <View>
          <Button
            style={{ backgroundColor: "white" }}
            color="black"
            label="Công việc hàng ngày"
            onPress={() => {
              setFormData({ ...formData, cv: "Công việc hàng ngày" })
              setIsOpen(false)
            }}
          />
          <Divider />
          <Button
            style={{ backgroundColor: "white" }}
            color="black"
            label="Công việc hàng tuần"
            onPress={() => {
              setFormData({ ...formData, cv: "Công việc hàng tuần" })
              setIsOpen(false)
            }}
          />
          <Divider />
          <Button
            style={{ backgroundColor: "white" }}
            color="black"
            label="Công việc hàng tháng"
            onPress={() => {
              setFormData({ ...formData, cv: "Công việc hàng tháng" })
              setIsOpen(false)
            }}
          />
        </View>
      </Dialog>
    </View>
  )
}
