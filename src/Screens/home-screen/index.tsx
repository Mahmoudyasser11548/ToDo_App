import { View, Text } from "react-native";
import React from "react";
import { SafeAreaWrapper } from "components";
import useSWR from "swr";
import { fetcher } from "services/config";

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
