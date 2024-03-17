import { View, Text, FlatList } from "react-native";
import React from "react";
import { Category, CreateList, Loader, SafeAreaWrapper } from "components";

const CategoriesScreen = () => {
  const loading = false;

  if (loading) {
    return <Loader />;
  }

  const renderItem = ({
    item,
  }: {
    item: { _id: string; name: string; icon: string; color: string };
  }) => {
    return <Category category={item} />;
  };

  return (
    <SafeAreaWrapper>
      <View className="flex-1 px-4">
        <Text className="text-xl font-bold mb-10 mt-3">Categories</Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View className="h-4" />}
        />
        <CreateList />
      </View>
    </SafeAreaWrapper>
  );
};

export default CategoriesScreen;

const ICON_SET = {
  seed: "🌱",
  fries: "🍟",
  pizza: "🍕",
  rocket: "🚀",
  grinning: "😀",
  partying_face: "🥳",
  beach_umbrella: "🏖️",
};

const data = [
  { _id: "1", name: "Frontend", icon: ICON_SET.seed, color: "#2563eb" },
  { _id: "2", name: "backend", icon: ICON_SET.pizza, color: "#2563eb" },
];
