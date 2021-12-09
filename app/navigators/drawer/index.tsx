import React from "react"
import { View } from "react-native-ui-lib"
import Menu from "../../components/menu/menu"
import Interactable from "react-native-interactable"
import Home from "../../screens/home/home-screen"
import { Animated } from "react-native"
import { color } from "../../constants/color"

const SideMenuWidth = 300

export default function SideMenu() {
  const [menuOpened, setMenuOpen] = React.useState(false)
  const ref = React.useRef()

  const onStopInteraction = (event, check) => {
    let menuOpen = true
    if (event.nativeEvent.index === 0) {
      menuOpen = false
    }
    setMenuOpen(menuOpen)
  }
  const onMenuPress = () => {
    const menuOpen = !menuOpened
    if (menuOpen) {
      ref.current.snapTo({ index: 1 })
    } else {
      ref.current.snapTo({ index: 0 })
    }
  }

  const deltaX = React.useRef(new Animated.Value(-SideMenuWidth)).current
  const deltaY = React.useRef(new Animated.Value(0)).current

  return (
    <View flex backgroundColor={color.button}>
      <Menu isOpen={menuOpened} />
      <Interactable.View
        style={{ flex: 1 }}
        ref={ref}
        horizontalOnly={true}
        snapPoints={[
          { x: -SideMenuWidth, damping: 0.6 },
          { x: 0, damping: 0.6 },
        ]}
        boundaries={{ right: SideMenuWidth }}
        onSnap={onStopInteraction}
        animatedValueX={deltaX}
        animatedValueY={deltaY}
      >
        <Home onMenuPress={onMenuPress} />
      </Interactable.View>
    </View>
  )
}
