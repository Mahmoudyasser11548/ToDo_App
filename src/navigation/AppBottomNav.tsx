import React from "react";
import { RootBottomTabParamList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStacknav from "./HomeStacknav";
import { CompletedScreen } from "Screens";

const Tabs = createBottomTabNavigator<RootBottomTabParamList>();

const AppBottomNav = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="HomeStack" component={HomeStacknav} />
      <Tabs.Screen name="Completed" component={CompletedScreen} />
    </Tabs.Navigator>
  );
};

export default AppBottomNav;
