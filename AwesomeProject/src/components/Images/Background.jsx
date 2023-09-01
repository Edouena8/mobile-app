import { ImageBackground, StyleSheet } from "react-native";
import image from "../../../assets/images/bg-photo.png";

export const Background = ({ children }) => {
  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
