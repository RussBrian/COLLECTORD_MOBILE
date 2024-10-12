import EntryScreen from "../screens/EntryScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigation from "./tab.navegation";
import ForgotPasswordScreen from "../screens/ForgotPassworScreen";
import ConfirmPasswordScreen from "../screens/ConfirmPasswordScreen";
import { Pressable } from "react-native";
import { ArrowBack } from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterDetail from "../screens/RegisterDetail";
import UploadImageScreen from "../screens/UploadImgScreen";

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

            <Stack.Screen name="UploadImgSc" component={UploadImageScreen} options={{
                headerShown: false
            }} />

            <Stack.Screen name="RegisterDetailSc" component={RegisterDetail} options={{
                headerShown: false
            }} />

            <Stack.Screen name="RegisterSc" component={RegisterScreen} options={{
                headerShown: false,
                headerLeft: () =>
                    <Pressable onPress={() => navigator.navigate("EntryScreen")}>
                        <ArrowBack />
                    </Pressable>
            }} />

            <Stack.Screen name="ForgotPasswordSc" component={ForgotPasswordScreen} options={{
                headerLeft: () =>
                    <Pressable onPress={() => navigator.navigate("EntryScreen")}>
                        <ArrowBack />
                    </Pressable>
            }} />

            <Stack.Screen name="ConfirmPasswordSc" component={ConfirmPasswordScreen} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    )
}

export default StackNavigation;