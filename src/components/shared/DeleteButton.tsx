import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
type DeleteButtonProps = {
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
};

const DeleteButton = ({ onPress }: DeleteButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View className="p-2">
        <FontAwesome6 name="trash" size={24} color="red" />
      </View>
    </Pressable>
  );
};

export default DeleteButton;
