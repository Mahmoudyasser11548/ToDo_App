import React from "react";
import { RootBottomTabParamList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStacknav from "./HomeStacknav";
import { CompletedScreen, TodayScreen } from "Screens";
import CategoryStackNav from "./CategoryStackNav";
import { Icons } from "components";

const Tabs = createBottomTabNavigator<RootBottomTabParamList>();

const AppBottomNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#939292",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="HomeStack"
        component={HomeStacknav}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => <Icons name="home" color={color} />,
          headerShown: false,
        })}
      />
      <Tabs.Screen
        name="Today"
        component={TodayScreen}
        options={() => ({
          title: "Today",
          tabBarIcon: ({ color }) => <Icons name="calendar" color={color} />,
          headerShown: false,
        })}
      />
      <Tabs.Screen
        name="Completed"
        component={CompletedScreen}
        options={() => ({
          title: "Completed",
          tabBarIcon: ({ color }) => <Icons name="completed" color={color} />,
          headerShown: false,
        })}
      />
      <Tabs.Screen
        name="CategoriesStack"
        component={CategoryStackNav}
        options={() => ({
          title: "Categories",
          tabBarIcon: ({ color }) => <Icons name="categories" color={color} />,
          headerShown: false,
        })}
      />
    </Tabs.Navigator>
  );
};

export default AppBottomNav;
