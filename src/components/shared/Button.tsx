import { View, Text, Pressable } from "react-native";
import React from "react";

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
};

const Button = ({ label, onLongPress, onPress, disabled }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <View
        className={`${disabled ? "bg-gray800" : "bg-primary"} py-4 rounded-3xl`}
      >
        <Text className="text-lg text-center text-white font-bold text-uppercase">
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;
