import React from "react";
import MainScreen from "../screens/MainApp/MainScreen";
import BookScreen from "../screens/MainApp/BookScreen";
import ProfileScreen from "../screens/MainApp/ProfileScreen"
import { HomeIcon, BookIcon, PersonIcon } from "../components/Shared/Icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text} from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName="HomeSc"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "green",
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          marginBottom:20,
          right:10,
          left:10,
          borderRadius: 20,
          height: 70,
          paddingBottom: 10
        },
        tabBarInactiveTintColor:"gray"
      }}
    >

      <Tab.Screen
        component={MainScreen}
        name="HomeSc"
        options={{
          title:"Home",
          tabBarLabel:"Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tab.Screen
        component={BookScreen}
        name="BookSc"
        options={{
          title:"Books",
          tabBarLabel:"Reportes",
          tabBarIcon: ({ color }) => 
            <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#7B885B',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor:"#000",
            marginBottom: 25,
            shadowRadius:10
          }}
        >
          <Text className="text-2xl text-white font-extrabold">+</Text>
        </View>,
        }}
      />

      <Tab.Screen
        component={ProfileScreen}
        name="InfoSc"
        options={{
          title:"Profile",
          tabBarLabel:"Profile",
          tabBarIcon: ({ color }) => <PersonIcon color={color} />
        }} />
    </Tab.Navigator>

  );
};

export default TabNavigation;
