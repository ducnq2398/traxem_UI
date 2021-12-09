import React from "react"
import { FlatList, Image, ImageBackground } from "react-native"
import { Checkbox, Dialog, Text, TouchableOpacity, View } from "react-native-ui-lib"
import { color } from "../../constants/color"
import Sidebar from "react-native-sidebar"
import LinearGradient from "react-native-linear-gradient"
import { Divider, Searchbar } from "react-native-paper"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { mockData } from "../../../test/mock-file"
import { useNavigation } from "@react-navigation/core"

export default function Home({ onMenuPress }) {
  const data = [
    {
      icon: require("../../../assets/images/qr_code.png"),
      name: "Kiểm Tra Mã QR",
      screen: "scan_qr",
    },
    {
      icon: require("../../../assets/images/code.png"),
      name: "Gán Mã QR Vụ Mùa",
      screen: "qr_mua_vu",
    },
    {
      icon: require("../../../assets/images/qr_code_scanner.png"),
      name: "Gán Mã QR Đóng Gói",
      screen: "qr_dong_goi",
    },
    {
      icon: require("../../../assets/images/chat.png"),
      name: "Ghi Note",
      screen: "comment",
    },
  ]
  const [isOpen, setIsOpen] = React.useState(false)
  const [filter, setFilter] = React.useState({
    tc: false,
    bp: false,
    ld: false,
    bs: false,
    hh: false,
  })
  const [search, setSearch] = React.useState("")

  const navigation = useNavigation()

  function renderItem(item, index) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
        <LinearGradient
          colors={["#00A64F", "#38C37A"]}
          style={{
            width: 76,
            height: 80,
            borderRadius: 10,
            padding: 11,
            marginLeft: 11,
            backgroundColor: "#00A64F",
          }}
          key={index}
        >
          <View flex useSafeArea>
            <Image source={item.icon} style={{ tintColor: "white" }} height={24} width={24} />
          </View>
          <View>
            <Text color="white" style={{ fontSize: 10, fontWeight: "600" }}>
              {item.name}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  function renderData(item, index) {
    return (
      <TouchableOpacity
        key={index}
        backgroundColor={color.button}
        marginT-18
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        onPress={() =>
          navigation.push("detail_action", {
            item,
          })
        }
      >
        <ImageBackground source={require("../../../assets/images/bg-item.png")}>
          <View height={70} padding-11>
            <Text color="white" style={{ fontSize: 16, fontWeight: "700" }}>
              {item.title}
            </Text>
            <Text color="white" style={{ fontSize: 12 }}>
              {item.code}{" "}
            </Text>
          </View>
        </ImageBackground>
        <View backgroundColor="white">
          <View row centerV paddingH-18 paddingT-14 paddingB-10>
            <MaterialCommunityIcons name="flag" color={color.button} size={24} />
            <Text style={{ marginLeft: 16, fontSize: 15 }}>{item.action}</Text>
          </View>
          <Divider />

          <View row centerV paddingH-18 paddingT-14 paddingB-10>
            <MaterialCommunityIcons name="calendar-range" color={color.button} size={24} />
            <Text style={{ marginLeft: 16, fontSize: 15 }}>
              {item.hour} - {item.date}
            </Text>
          </View>
          <Divider />
          <View row paddingH-18 paddingT-14 paddingB-10>
            <MaterialCommunityIcons name="message-text" color={color.button} size={24} />
            <View flex width={263}>
              <Text style={{ marginLeft: 16, fontSize: 15, textAlign: "left" }}>
                {item.description}
              </Text>
            </View>
          </View>
          <Divider />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View flex useSafeArea backgroundColor="white">
      <View paddingT-20 row spread centerV paddingH-20>
        <View row centerV>
          <Image source={require("../../../assets/images/uploadImage.png")} />
          <View paddingL-11>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Nguyen Quang Duc</Text>
          </View>
        </View>
        <View row centerV>
          <View paddingR-17>
            <MaterialCommunityIcons name="bell" size={20} color={color.button} />
          </View>
          <View>
            <TouchableOpacity onPress={onMenuPress}>
              <MaterialCommunityIcons name="menu" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View paddingH-20 paddingT-16>
        <FlatList
          data={data}
          numColumns={4}
          keyExtractor={(item, index) => `$$ ${index}`}
          renderItem={({ item, index }) => renderItem(item, index)}
        />
      </View>
      <View paddingH-20 paddingT-25>
        <Text style={{ fontSize: 15, fontWeight: "700" }}>Công việc cần làm hôm nay</Text>
      </View>
      <View paddingH-20 paddingT-13 row centerV>
        <View flex paddingR-11>
          <Searchbar
            placeholder="Tìm kiếm công việc"
            style={{ elevation: 0 }}
            iconColor={color.button}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#D5E2D2",
            height: 50,
            width: 50,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIsOpen(true)}
        >
          <MaterialCommunityIcons name="filter" color={color.button} size={26} />
        </TouchableOpacity>
      </View>

      <View paddingH-20>
        <FlatList
          data={mockData}
          keyExtractor={(item, index) => `@ ${index}`}
          renderItem={({ item, index }) => renderData(item, index)}
        />
      </View>

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
        renderPannableHeader={() => (
          <View paddingH-5 row spread>
            <Text color={color.button} style={{ fontSize: 18, fontWeight: "700" }}>
              Bộ lọc
            </Text>
            <TouchableOpacity onPress={() => setIsOpen(false)}>
              <MaterialCommunityIcons name="close" size={24} />
            </TouchableOpacity>
          </View>
        )}
      >
        <View margin-10>
          <View>
            <Checkbox
              value={filter.tc}
              onValueChange={(value1) => setFilter({ ...filter, tc: value1 })}
              color={color.button}
              label="Tưới cây"
            />
          </View>
          <View paddingT-10>
            <Checkbox
              value={filter.bp}
              onValueChange={(value1) => setFilter({ ...filter, bp: value1 })}
              color={color.button}
              label="Bón phân"
            />
          </View>
          <View paddingT-10>
            <Checkbox
              value={filter.ld}
              onValueChange={(value1) => setFilter({ ...filter, ld: value1 })}
              label="Làm đất"
              color={color.button}
            />
          </View>
          <View paddingT-10>
            <Checkbox
              value={filter.bs}
              onValueChange={(value1) => setFilter({ ...filter, bs: value1 })}
              label="Bắt sâu"
              color={color.button}
            />
          </View>
          <View paddingT-10>
            <Checkbox
              value={filter.hh}
              onValueChange={(value1) => setFilter({ ...filter, hh: value1 })}
              label="Hái hoa"
              color={color.button}
            />
          </View>
        </View>
      </Dialog>
    </View>
  )
}
