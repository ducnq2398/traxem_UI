import React from "react"
import { StyleSheet, TextInput } from "react-native"
import { Text, View } from "react-native-ui-lib"
import { color } from "../../constants/color"

interface IProps {
  placeholder?: string
  styles?: string
  label?: string
  security?: boolean
  text: string
  onChange: any
}

export default function InputCustom({
  placeholder,
  styles,
  label,
  security,
  text,
  onChange,
}: IProps) {
  const [isFocus, setIsFocus] = React.useState(false)

  return (
    <View center paddingH-20>
      <Text>{label}</Text>
      <TextInput
        placeholderTextColor={color.placeholder}
        placeholder={placeholder}
        style={[custom.input, { borderColor: isFocus ? color.button : color.border }]}
        secureTextEntry={security}
        value={text}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  )
}

const custom = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: "100%",
    paddingLeft: 10,
  },
})
