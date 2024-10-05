import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import BookScreen from "../screens/BookScreen";
import InfoScreen from "../screens/InfoScreen"
import { HomeIcon, BookIcon, InfoIcon } from "../components/Icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName="HomeSc"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "green",
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 20,
          left: 10,
          right: 10,
          borderRadius: 40,
          height: 55,
          paddingBottom: 10
        },
      }}
    >

      <Tab.Screen
        component={MainScreen}
        name="HomeSc"
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tab.Screen
        component={BookScreen}
        name="BookSc"
        options={{
          tabBarIcon: ({ color }) => <BookIcon color={color} />,
        }}
      />

      <Tab.Screen
        component={InfoScreen}
        name="InfoSc"
        options={{
          tabBarIcon: ({ color }) => <InfoIcon color={color} />
        }} />
    </Tab.Navigator>

  );
};

export default TabNavigation;
