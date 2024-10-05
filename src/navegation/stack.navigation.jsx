import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import EntryScreen from "../screens/EntryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import RegisterScren from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    return (
        <Stack.Navigator initialRouteName="EntryScreen" screenOptions={{
            headerShown:false
        }}> 
            <Stack.Screen name="EntryScreen" component={EntryScreen}/>
            <Stack.Screen name="HomeSc" component={MainScreen}/>
            <Stack.Screen name="RegisterSc" component={RegisterScren}/>
        </Stack.Navigator>
    )
}

export default StackNavigation;