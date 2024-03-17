import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./RootStack";
import useUserGlobalStore from "store/useUserGlobalStore";
import AuthStackNav from "./AuthStackNav";

const Navigation = () => {
  const { user, updateUser } = useUserGlobalStore();

  useEffect(() => {
    updateUser(
      {
        email: "omg@gmail.com",
        name: "Omg",
      }
      // null
    );

    return () => {};
  }, []);

  return (
    <NavigationContainer>
      {user ? <RootStack /> : <AuthStackNav />}
    </NavigationContainer>
  );
};

export default Navigation;
