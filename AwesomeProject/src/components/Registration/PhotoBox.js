import { StyleSheet, View } from "react-native";

export default function PhotoBox() {
  return <View style={styles.box} />;
}

const styles = StyleSheet.create({
    box: {
      position: 'absolute',
    width: 120,
        height: 120,
    top: -60,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 16,
  },
});
