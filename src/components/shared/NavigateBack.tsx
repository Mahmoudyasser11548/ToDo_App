import React from "react";
import { View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const NavigateBack = () => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Pressable onPress={navigateBack}>
      <View className="bg-lightGray p-2 rounded-lg">
        <Ionicons name="chevron-back" size={24} color="black" />
      </View>
    </Pressable>
  );
};

export default NavigateBack;
