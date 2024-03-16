import { Image, Text, View } from "react-native";
import React from "react";
import { Button, SafeAreaWrapper } from "components";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigatorType } from "navigation/types";

const BLOSSOM_IMAGE =
  "https://res.cloudinary.com/dooxt2sgsdooxt2sgs23233/image/upload/v1676809769/youtube/2023/february/blossom/icon_fb36u3.png";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigatorType<"Welcome">>();

  const handleNavigation = () => navigation.navigate("SignUp");

  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={[
          "#ffffff",
          "#fef8ff",
          "#fcecff",
          "#f8daff",
          "#fae2ff",
          "#fef9ff",
          "#ffffff",
        ]}
        className="flex-1 justify-center items-center"
      >
        <View>
          <View className="items-center mb-4">
            <Image
              source={{
                uri: BLOSSOM_IMAGE,
                width: 120,
                height: 120,
              }}
            />
          </View>
          <Text className="text-2xl font-bold">
            Do you want to be more productive?
          </Text>
          <View className="m-3 ">
            <Button label="Start your Journey" onPress={handleNavigation} />
          </View>
          <Text className="text-base text-center text-gray550">
            100,000 registered today
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
