import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils/colors";
const { accentColor, white } = colors;

export default function CraetePostsIcon() {
  return (
    <View style={styles.btn}>
      <MaterialIcons name="add" size={24} color={white} />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    // marginTop: 9,
    // marginBottom: 34,
    paddingTop: 13,
    paddingRight: 28,
    paddingBottom: 13,
    paddingLeft: 28,
    borderRadius: 20,
    backgroundColor: accentColor,
  },
});
