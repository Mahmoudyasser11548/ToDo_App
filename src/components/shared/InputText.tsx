import { Text, TextInput, TextInputProps, View } from "react-native";
import React from "react";

type InputTextprops = {
  label: string;
  error?: undefined;
} & TextInputProps;

const InputText = ({ label }: InputTextprops) => {
  return (
    <View className="flex-col mb-3">
      <Text className="text-uppercase text-lg mb-1">{label}</Text>
      <TextInput
        className="p-3 px-4 border border-gray650 rounded-lg"
        placeholder={label}
      />
    </View>
  );
};

export default InputText;
