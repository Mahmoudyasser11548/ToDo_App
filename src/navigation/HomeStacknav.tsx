import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";
import { HomeScreen, EditTaskScreen } from "Screens";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStacknav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EditTask" component={EditTaskScreen} />
    </Stack.Navigator>
  );
};

export default HomeStacknav;
