import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigatorType } from "navigation/types";
import { Button, InputText, SafeAreaWrapper } from "components";

const BLOSSOM_IMAGE =
  "https://res.cloudinary.com/dooxt2sgsdooxt2sgs23233/image/upload/v1676809769/youtube/2023/february/blossom/icon_fb36u3.png";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigatorType<"SignIn">>();

  const handleNavigation = () => navigation.navigate("SignUp");

  return (
    <SafeAreaWrapper>
      <View className="flex-1 justify-center px-5 mt-12">
        <View className="items-center mb-4">
          <Image
            source={{
              uri: BLOSSOM_IMAGE,
              width: 120,
              height: 120,
            }}
          />
          <Text className="text-2xl font-bold mt-6">Welcome Back</Text>
        </View>
        <View>
          <InputText label="Email" />
          <InputText label="Password" />

          <View className="mb-4 items-end">
            <Pressable onPress={handleNavigation}>
              <Text className="text-bold text-base text-primary">
                Register?
              </Text>
            </Pressable>
          </View>
          <Button label="Register" onPress={handleNavigation} />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
