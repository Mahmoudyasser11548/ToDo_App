import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigatorType } from "navigation/types";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigatorType<"SignIn">>();

  return (
    <View>
      <Text>SignIn Screen</Text>
      <Button
        title="Go To Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
