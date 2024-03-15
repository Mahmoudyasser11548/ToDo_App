import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigatorType } from "navigation/types";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigatorType<"SignUp">>();
  return (
    <View>
      <Text>SignUp Screen</Text>
      <Button
        title="Go to SignIn"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
