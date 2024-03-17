import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CategoriesNavigationType } from "navigation/types";
import { Feather } from "@expo/vector-icons";
const CreateList = () => {
  const navigation = useNavigation<CategoriesNavigationType>();

  const handleNavigation = () => navigation.navigate("CreateCategory", {});

  return (
    <Pressable onPress={handleNavigation}>
      <View className="flex-row items-center bg-lightGray mb-4 p-4 rounded-lg">
        <Feather name="plus" size={24} color={"#939292"} />
        <Text className="font-semibold text-gray550 text-xl ml-3">
          Create new list
        </Text>
      </View>
    </Pressable>
  );
};

export default CreateList;

const styles = StyleSheet.create({});
