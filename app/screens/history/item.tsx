import React from "react"
import { Text, TouchableOpacity, View } from "react-native-ui-lib"
import { color } from "../../constants/color"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Image, ScrollView } from "react-native"

export default function Item({ item, index }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <View key={index} marginT-10>
      <View
        centerV
        height={40}
        width={200}
        backgroundColor={color.button}
        style={{ borderBottomRightRadius: 5, borderTopRightRadius: 5 }}
        row
        spread
        paddingH-10
      >
        <Text color="white">{item.update}</Text>
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          {isOpen === true ? (
            <MaterialCommunityIcons name="chevron-up" color={"white"} size={26} />
          ) : (
            <MaterialCommunityIcons name="chevron-down" color={"white"} size={26} />
          )}
        </TouchableOpacity>
      </View>
      {isOpen === true ? (
        <View paddingH-20 paddingT-10>
          <View>
            <Text color={color.button} style={{ fontSize: 17, fontWeight: "700" }}>
              {item.action}
            </Text>
          </View>
          <View paddingT-10 row spread>
            <Text color="#979797">{item.cv}</Text>
            <Text color="#979797">
              {item.date} - {item.hour}
            </Text>
          </View>
          <View paddingT-10>
            <Text>{item.description}</Text>
          </View>
          <View paddingT-10>
            <ScrollView horizontal={true}>
              <View width={70} height={70}>
                <Image source={require("../../../assets/images/rau.png")} />
              </View>
            </ScrollView>
          </View>
        </View>
      ) : null}
    </View>
  )
}
