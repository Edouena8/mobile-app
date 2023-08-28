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

export const StyledTextInput = ({ isPassword, value, onChange, ...props }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [active, setActive] = useState(false);

  const toggleInput = () => {
    setActive((active) => !active);
  };

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[
          styles.input,
          props?.style,
          active ? styles.onFocus : styles.onBlur,
        ]}
        placeholderTextColor={placeholderTextColor}
        cursorColor={placeholderTextColor}
        onBlur={toggleInput}
        onFocus={toggleInput}
        secureTextEntry={isPassword && hidePassword}
        value={value}
        onChangeText={onChange}
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
  container: {
    justifyContent: "center",
  },
  input: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
  },

  showPasswordWrap: {
    position: "absolute",
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
