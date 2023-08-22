import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const StyledTextInput = ({ isPassword, ...props }) => {
  const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");
  const [hidePassword, setHidePassword] = useState(true);

  const customOnBlur = () => {
    setInputBorderColor("#E8E8E8");
  };

  const customOnFocus = () => {
    setInputBorderColor("#FF6C00");
  };

  return (
    <View>
      <TextInput
        {...props}
        style={[styles.input, props?.style, { borderColor: inputBorderColor }]}
        placeholderTextColor="#BDBDBD"
        cursorColor="#BDBDBD"
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
    borderColor: "#E8E8E8",
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
    color: "#1B4371",
    textAlign: "right",
  },
});
