import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigatorType } from "navigation/types";
import { Button, InputText, SafeAreaWrapper } from "components";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigatorType<"SignUp">>();

  const handleNavigation = () => navigation.navigate("SignIn");

  return (
    <SafeAreaWrapper>
      <View className="flex-1 px-5 mt-10">
        <Text className="text-2xl font-bold">Welcome to blossom!</Text>
        <Text className="text-2xl font-bold mb-6">
          Your Journey starts here
        </Text>
        <View>
          <InputText label="Name" />
          <InputText label="Email" />
          <InputText label="Password" />

          <View className="mb-4 items-end">
            <Pressable onPress={handleNavigation}>
              <Text className="text-bold text-base text-primary">Log in?</Text>
            </Pressable>
          </View>

          <View className="mb-5"></View>
          <Button label="Register" onPress={handleNavigation} />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
