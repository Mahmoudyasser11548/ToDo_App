import { View, Text } from "react-native";
import React from "react";
import { Loader, NavigateBack, SafeAreaWrapper, TaskActions } from "components";
import { RouteProp, useRoute } from "@react-navigation/native";
import { CategoriesStackParamList } from "navigation/types";

type CategoryScreenRoute = RouteProp<CategoriesStackParamList, "Category">;

const CategoryScreen = () => {
  const route = useRoute<CategoryScreenRoute>();

  const { id } = route.params;

  const isLoading = false;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaWrapper>
      <View className="flex-1 mx-4 mt-4">
        <View className="flex-row justify-between items-center">
          <NavigateBack />
        </View>
        <View className="h-4" />
        <View className="flex-row justify-start items-center">
          <Text className="text-2xl mr-3">{"🍟"}</Text>
          <Text className="text-2xl font-semibold">Home</Text>
        </View>
        <View className="h-4" />
        <TaskActions categoryId={id} />
      </View>
    </SafeAreaWrapper>
  );
};

export default CategoryScreen;
