import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CategoriesStackParamList } from "./types";
import {
  CategoriesScreen,
  CategoryScreen,
  CreateCategoryScreen,
} from "Screens";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoryStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateCategory"
        component={CreateCategoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoryStackNav;
