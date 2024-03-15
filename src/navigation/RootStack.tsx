import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./types";
import { SignInScreen } from "Screens";
import AppBottomNav from "./AppBottomNav";

const Stack = createNativeStackNavigator<AppStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={AppBottomNav} />
    </Stack.Navigator>
  );
};

export default RootStack;
