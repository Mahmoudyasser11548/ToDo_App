import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import { SignInScreen, SignUpScreen, WelcomeScreen } from "Screens";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        options={{
          headerShown: false,
        }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: false,
        }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNav;
