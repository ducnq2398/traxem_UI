import React from "react"
import { Text, TouchableOpacity, View } from "react-native-ui-lib"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { color } from "../../constants/color"

interface Props {
  title: string
  iconRight?: string
  onPress: any
  onPressRight?: any
  back: boolean
}

export default function HeaderCustom({ title, iconRight, onPress, onPressRight, back }: Props) {
  return (
    <View row centerV spread>
      <View width={50}>
        <TouchableOpacity onPress={onPress}>
          {back === true && (
            <MaterialCommunityIcons name="chevron-left" size={35} color={color.button} />
          )}
        </TouchableOpacity>
      </View>
      <View>
        <Text uppercase style={{ fontWeight: "700" }}>
          {title}
        </Text>
      </View>
      <View width={50}>
        <TouchableOpacity onPress={onPressRight}>
          <MaterialCommunityIcons name={iconRight} size={30} color={color.button} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
