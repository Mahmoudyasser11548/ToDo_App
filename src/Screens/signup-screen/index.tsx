import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigatorType } from "navigation/types";
import { Button, InputText, SafeAreaWrapper } from "components";
import { registerUser } from "services/api";

const SignUpScreen = () => {
  const [userData, setUserData] = useState<{
    password: string;
    name: string;
    email: string;
  }>({
    name: "",
    email: "",
    password: "",
  });
  const navigation = useNavigation<AuthScreenNavigatorType<"SignUp">>();

  const handleNavigation = () => navigation.navigate("SignIn");

  const onSubmit = async () => {
    try {
      const { name, email, password } = userData;

      await registerUser({
        email,
        name,
        password,
      });

      handleNavigation();
    } catch (error) {
      throw error;
    }
  };

  return (
    <SafeAreaWrapper>
      <View className="flex-1 px-5 mt-10">
        <Text className="text-2xl font-bold">Welcome to blossom!</Text>
        <Text className="text-2xl font-bold mb-6">
          Your Journey starts here
        </Text>
        <View>
          <InputText
            label="Name"
            onChangeText={(text) =>
              setUserData((prev) => {
                return {
                  ...prev,
                  name: text,
                };
              })
            }
          />
          <InputText
            label="Email"
            onChangeText={(text) =>
              setUserData((prev) => {
                return {
                  ...prev,
                  email: text,
                };
              })
            }
          />
          <InputText
            label="Password"
            onChangeText={(text) =>
              setUserData((prev) => {
                return {
                  ...prev,
                  password: text,
                };
              })
            }
          />

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
