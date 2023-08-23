import { StyleSheet, TouchableOpacity } from "react-native";
import { Path, Svg } from "react-native-svg";
import { colors } from "../../../utils/colors";
const { white, accentColor } = colors;

export const AddIcon = () => {
  return (
    <TouchableOpacity style={styles.icon}>
      <Svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 35 35"
      >
        <Path
          fill={white}
          stroke={accentColor}
          stroke-linejoin="miter"
          stroke-linecap="butt"
          stroke-miterlimit="4"
          stroke-width="1.28"
          d="M31.36 16c0 8.483-6.877 15.36-15.36 15.36s-15.36-6.877-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36z"
        ></Path>
        <Path
          fill={accentColor}
          d="M16.64 7.68h-1.28v7.68h-7.68v1.28h7.68v7.68h1.28v-7.68h7.68v-1.28h-7.68v-7.68z"
        ></Path>
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 20,
    left: 220,
  },
});
