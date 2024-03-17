import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
  Button,
  DeleteButton,
  NavigateBack,
  SafeAreaWrapper,
} from "components";
import { getColors, getIcons } from "utils/utils";
import { IColor, IIcon } from "types";

const COLORS = getColors();
const ICONS = getIcons();

const DEFAULT_COLOR = COLORS[0];
const DEFAULT_ICON = ICONS[0];

const CreateCategoryScreen = () => {
  const [newCategory, setNewCategory] = useState<{
    name: string;
    icon: string;
    color: string;
    _id: string;
  }>({
    _id: "",
    name: "",
    color: DEFAULT_COLOR,
    icon: DEFAULT_ICON,
  });

  const onSubmit = () => console.log("Submited");

  const updateColor = (color: IColor) => {
    setNewCategory((prev) => {
      return {
        ...prev,
        color,
      };
    });
  };

  const updateIcon = (icon: IIcon) => {
    setNewCategory((prev) => {
      return {
        ...prev,
        icon,
      };
    });
  };

  return (
    <SafeAreaWrapper>
      <View className="flex-1 mx-4">
        <View className="h-10"></View>
        <View className="flex-row justify-between items-center">
          <NavigateBack />
          <DeleteButton onPress={() => console.log("Deleted")} />
        </View>
        <View className="h-10"></View>
        <View className="bg-lightGray rounded-lg">
          <TextInput
            className="text-lg leading-4 text-black p-3"
            maxLength={36}
            placeholder="Create new list"
            placeholderTextColor={"#939292"}
            onChangeText={(text) => {
              setNewCategory((prev) => {
                return {
                  ...prev,
                  name: text,
                };
              });
            }}
          />
        </View>
        <View className="h-5"></View>

        <View className="bg-lightGray rounded-lg p-4">
          <View className="bg-white rounded-lg p-2 mb-4 w-14 font-semibold">
            <Text style={{ color: newCategory.color, textAlign: "center" }}>
              Colors
            </Text>
          </View>
          <View className="justify-evenly flex-row">
            {COLORS.map((color) => (
              <Pressable key={color} onPress={() => updateColor(color)}>
                <View
                  style={{
                    backgroundColor: color,
                    width: 24,
                    height: 24,
                    borderRadius: 15,
                  }}
                ></View>
              </Pressable>
            ))}
          </View>
        </View>
        <View className="h-5"></View>

        <View className="bg-lightGray rounded-lg p-4">
          <View className="bg-white rounded-lg p-2 mb-4 w-14 font-semibold">
            <Text className="text-lg text-center">{newCategory.icon}</Text>
          </View>
          <View className="justify-evenly flex-row">
            {ICONS.map((icon) => (
              <Pressable key={icon} onPress={() => updateIcon(icon)}>
                <View>
                  <Text className="text-lg">{icon}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="absolute left-0 right-0 bottom-10">
          <Button label="Create new Category" onPress={onSubmit} />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default CreateCategoryScreen;

const styles = StyleSheet.create({});
