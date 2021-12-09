import moment from "moment"
import React, { ReactElement } from "react"
import { Modal, SafeAreaView, TouchableOpacity, View } from "react-native"
import { Calendar, LocaleConfig } from "react-native-calendars"

interface IDatePicker {
  currentDate?: any
  visible: boolean
  callback?: () => void
  onClose: () => void
  minDate?: any
  maxDate?: any
  onPressDay?: any
}

LocaleConfig.locales.vi = {
  monthNames: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  monthNamesShort: [
    "Thg1",
    "Thg2",
    "Thg3",
    "Thg4",
    "Thg5",
    "Thg6",
    "Thg7",
    "Thg8",
    "Thg9",
    "Thg10",
    "Thg11",
    "Thg12",
  ],
  dayNames: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  dayNamesShort: ["CN", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7"],
  today: "Hôm nay",
}
LocaleConfig.defaultLocale = "vi"

export default function DatePickerCustom(props: IDatePicker): ReactElement {
  return (
    <Modal transparent={true} visible={props.visible} animationType={"fade"}>
      <TouchableOpacity onPress={props.onClose} style={{ flex: 1, backgroundColor: "#00000090" }}>
        <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{ backgroundColor: "white", borderRadius: 8, padding: 16 }}>
            <Calendar
              minDate={props.minDate}
              maxDate={props.maxDate}
              onDayPress={(date) => {
                props.onClose()
                props.onPressDay(moment(date.dateString).format("DD/MM/YYYY"))
              }}
              markedDates={{
                [moment(props.currentDate, "DD/MM/YYYY").format("YYYY-MM-DD")]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: "#828ee6",
                  selectedTextColor: "white",
                },
              }}
            />
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </Modal>
  )
}
