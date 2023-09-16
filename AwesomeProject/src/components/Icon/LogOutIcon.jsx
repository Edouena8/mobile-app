import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../utils/colors";
const { placeholderTextColor } = colors;

export default function LogOutIcon() {
  return (
    <View>
      <TouchableOpacity style={styles.iconWrap}>
        <MaterialIcons name="logout" size={24} color={placeholderTextColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    marginRight: 10,
  },
});
