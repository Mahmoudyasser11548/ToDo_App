import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./RootStack";

const Navigation = () => {
  const user = true;

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
