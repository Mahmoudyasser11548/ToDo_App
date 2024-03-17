import { View, Text, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CategoriesNavigationType } from "navigation/types";

type CategoryProps = {
  category: { _id: number; name: string; icon: string; color: string };
};

const Category = ({ category }: CategoryProps) => {
  const navigation = useNavigation<CategoriesNavigationType>();

  const navigateToCreateCategory = () => {
    navigation.navigate("CreateCategory", {
      category: category,
    });
  };
  const navigateToCategory = () => {
    navigation.navigate("Category", {
      id: category._id,
    });
  };

  return (
    <Pressable onPress={navigateToCategory}>
      <View className="bg-lightGray p-4 rounded-lg">
        <View className="flex-row items-center justify-between">
          <View className="flex-row">
            <Text className="text-base font-semibold mr-3">
              {category.icon}
            </Text>
            <Text className="text-base font-semibold ">{category.name}</Text>
          </View>
          <Pressable onPress={navigateToCreateCategory} className="p-2">
            <Entypo name="dots-three-vertical" size={15} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default Category;
