import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaWrapper from "./SafeAreWrapper";

const Loader = () => {
  return (
    <SafeAreaWrapper>
      <View className="flex-1 justify-center">
        <ActivityIndicator size={"large"} />
      </View>
    </SafeAreaWrapper>
  );
};

export default Loader;

const styles = StyleSheet.create({});
