import { useNavigation } from "@react-navigation/core"
import React from "react"
import { FlatList, Image, ScrollView } from "react-native"
import { Searchbar } from "react-native-paper"
import { Text, TouchableOpacity, View } from "react-native-ui-lib"
import { historyComment } from "../../../test/mock-file"
import HeaderCustom from "../../components/header-custom/header-custom"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { color } from "../../constants/color"
import Item from "./item"

export default function HistoryComment() {
  const navigation = useNavigation()
  const [search, setSearch] = React.useState("")

  return (
    <View flex useSafeArea backgroundColor="white">
      <HeaderCustom back={true} title="Lịch sử nhật ký" onPress={() => navigation.pop()} />
      <View paddingH-20 paddingT-5>
        <Searchbar
          placeholder="Tìm kiếm công việc"
          onChangeText={(query) => setSearch(query)}
          value={search}
          style={{ elevation: 0, borderWidth: 0.2 }}
          iconColor={color.button}
        />
      </View>
      <View paddingT-15>
        <FlatList
          data={historyComment}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item, index }) => {
            return <Item item={item} key={index} />
          }}
        />
      </View>
    </View>
  )
}
