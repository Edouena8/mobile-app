import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../utils/colors";

const { borderColor, accentColor, additionalTextColor, placeholderTextColor } =
  colors;

export const StyledTextInput = ({ isPassword, ...props }) => {
  const [inputBorderColor, setInputBorderColor] = useState(borderColor);
  const [hidePassword, setHidePassword] = useState(true);

  const customOnBlur = () => {
    setInputBorderColor(borderColor);
  };

  const customOnFocus = () => {
    setInputBorderColor(accentColor);
  };

  return (
    <View>
      <TextInput
        {...props}
        style={[styles.input, props?.style, { borderColor: inputBorderColor }]}
        placeholderTextColor={placeholderTextColor}
        cursorColor={placeholderTextColor}
        onBlur={customOnBlur}
        onFocus={customOnFocus}
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
    borderColor: borderColor,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
  },

  showPasswordWrap: {
    position: "absolute",
    top: 28,
    right: 10,
  },
  showText: {
    fontFamily: "roboto-reg",
    lineHeight: 19,
    color: additionalTextColor,
    textAlign: "right",
  },
});
