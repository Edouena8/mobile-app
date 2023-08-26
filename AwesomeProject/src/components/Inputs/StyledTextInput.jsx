import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../utils/colors";

const {
  borderColor,
  accentColor,
  additionalTextColor,
  placeholderTextColor,
  secondaryBg,
  primaryBg,
} = colors;

export const StyledTextInput = ({ isPassword, ...props }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [active, setActive] = useState(false);

  // const customOnBlur = () => {
  //   setActive(false);
  // };

  // const customOnFocus = () => {
  //   setActive(true);
  // };

  const toggleInput = () => {
    setActive(active => !active);
  }

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[
          styles.input,
          props?.style,
          active ? styles.onFocus : styles.onBlur
        ]}
        placeholderTextColor={placeholderTextColor}
        cursorColor={placeholderTextColor}
        onBlur={toggleInput}
        onFocus={toggleInput}
        secureTextEntry={isPassword && hidePassword}
      />

      {isPassword && (
        <TouchableOpacity
          style={styles.showPasswordWrap}
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Text style={styles.showText}>
            {hidePassword ? " Показати" : "Закрити"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 16,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
  },

  showPasswordWrap: {
    position: "absolute",
    top: "42%",
    right: "3%",
  },
  showText: {
    fontFamily: "roboto-reg",
    lineHeight: 19,
    color: additionalTextColor,
    textAlign: "center",
  },
  onBlur: {
    borderColor: borderColor,
    backgroundColor: secondaryBg,
  },
  onFocus: {
    borderColor: accentColor,
    backgroundColor: primaryBg,
  },
});
