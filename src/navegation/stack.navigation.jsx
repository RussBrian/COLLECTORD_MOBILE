import EntryScreen from "../screens/EntryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScren from "../screens/RegisterScreen";
import TabNavigation from "./tab.navegation";
import ForgotPasswordScreen from "../screens/ForgotPassworScreen";
import { Pressable, Text } from "react-native";
import { ArrowBack } from "../components/Icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    const navigator = useNavigation();

    return (
        <Stack.Navigator initialRouteName="EntryScreen" screenOptions={{
            headerShown: true,
            headerTitle: ""
        }}>
            
            <Stack.Screen name="EntryScreen" component={EntryScreen} options={{
                headerShown: false
            }} />

            <Stack.Screen name="TabNav" component={TabNavigation} options={{
                headerShown: false
            }} />

            <Stack.Screen name="RegisterSc" component={RegisterScren} options={{
                headerLeft: () =>
                    <Pressable onPress={() => navigator.navigate("EntryScreen")}>
                        <ArrowBack />
                    </Pressable>
            }} />

            <Stack.Screen name="ForgotPasswordSc" component={ForgotPasswordScreen} options={{
                headerLeft: () => <Pressable onPress={() => navigator.navigate("EntryScreen")}>
                    <ArrowBack />
                </Pressable>
            }} />

        </Stack.Navigator>
    )
}

export default StackNavigation;