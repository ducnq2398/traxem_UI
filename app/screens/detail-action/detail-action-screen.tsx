import { useNavigation } from "@react-navigation/core"
import React from "react"
import { ScrollView } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { Divider } from "react-native-paper"
import { Button, Text, TouchableOpacity, View } from "react-native-ui-lib"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import HeaderCustom from "../../components/header-custom/header-custom"
import { color } from "../../constants/color"

export default function DetailAction(props) {
  const item = props.route.params.item
  const navigation = useNavigation()
  const [show, setShow] = React.useState(false)
  return (
    <View flex useSafeArea backgroundColor="white">
      <HeaderCustom back={true} title="Công việc cần làm" onPress={() => navigation.pop()} />
      <ScrollView>
        <View paddingH-20 paddingT-25>
          <LinearGradient
            colors={["#00A64F", "#38C37A"]}
            style={{
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: show ? 0 : 10,
              borderBottomRightRadius: show ? 0 : 10,
            }}
          >
            <View height={60} centerV row spread paddingH-20>
              <Text color="white" style={{ fontSize: 20, fontWeight: "600" }}>
                {item.title}
              </Text>
              <TouchableOpacity onPress={() => setShow(!show)}>
                {show === false ? (
                  <MaterialCommunityIcons name="chevron-down" color="white" size={26} />
                ) : (
                  <MaterialCommunityIcons name="chevron-up" color="white" size={26} />
                )}
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        {/* view detail */}
        {show === true ? (
          <View paddingH-20>
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
                <Text>
                  {item.date} - {item.date}
                </Text>
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
          </View>
        ) : null}

        <View paddingH-20 paddingT-25 paddingB-20>
          <Text color={color.button} style={{ fontSize: 16, fontWeight: "700", paddingBottom: 10 }}>
            Chi tiết công việc
          </Text>
          <View padding-14 style={{ borderWidth: 1, borderColor: "#CFD8CD", borderRadius: 10 }}>
            <View row centerV spread>
              <View width="30%">
                <Text style={{ fontWeight: "600" }}>Tên công việc</Text>
              </View>
              <View width="70%">
                <Text marginL-20 style={{ textAlign: "left" }}>
                  {item.action}
                </Text>
              </View>
            </View>
            <View row centerV marginT-10>
              <View width="30%">
                <Text style={{ fontWeight: "600" }}>Loại công việc</Text>
              </View>
              <View width="70%">
                <Text marginL-20 style={{ textAlign: "left" }}>
                  {item.action}
                </Text>
              </View>
            </View>
            <View row centerV marginT-10>
              <View width="30%">
                <Text style={{ fontWeight: "600" }}>Thời gian</Text>
              </View>
              <View width="70%">
                <Text marginL-20 style={{ textAlign: "left" }}>
                  {item.hour}
                </Text>
              </View>
            </View>
            <View row centerV marginT-10>
              <View width="30%">
                <Text style={{ fontWeight: "600" }}>Tần suất</Text>
              </View>
              <View width="70%">
                <Text marginL-20 style={{ textAlign: "left" }}>
                  {item.action}
                </Text>
              </View>
            </View>
            <View row centerV marginT-10>
              <View width="30%">
                <Text style={{ fontWeight: "600" }}>Ngày bắt đầu</Text>
              </View>
              <View width="70%">
                <Text marginL-20 style={{ textAlign: "left" }}>
                  {item.date}
                </Text>
              </View>
            </View>
            <View row centerV marginT-10>
              <View width="30%">
                <Text style={{ fontWeight: "600" }}>Ngày kết thúc</Text>
              </View>
              <View width="70%">
                <Text marginL-20 style={{ textAlign: "left" }}>
                  {item.date}
                </Text>
              </View>
            </View>
            <View row marginT-10>
              <View width="30%">
                <Text style={{ fontWeight: "600" }}>Mô tả</Text>
              </View>
              <View width="70%">
                <Text marginL-20 style={{ textAlign: "left" }}>
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View paddingH-20>
        <Button
          backgroundColor={color.button}
          color={"white"}
          borderRadius={5}
          style={{ height: 52 }}
          label="Ghi nhật ký"
        />
      </View>
    </View>
  )
}
