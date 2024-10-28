import LoginScreen from "../screens/LogIn/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import TabNavigation from "./tab.navegation";
import ForgotPasswordScreen from "../screens/LogIn/ForgotPassworScreen";
import ConfirmPasswordScreen from "../screens/Register/ConfirmPasswordScreen";
import RegisterInstitutionScreen from "../screens/Register/RegisterInstitutionScreen";
import RegisterInsitutionDetail from "../screens/Register/RegisterInstitutionDetail";
import RegisterDetail from "../screens/Register/RegisterDetail";
import UploadImageScreen from "../screens/Register/UploadImgScreen";
import { Pressable } from "react-native";
import { ArrowBack } from "../components/Shared/Icons";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const RegisterScreens = () => {
    return (
        <>
            <Stack.Screen name="ConfirmPasswordSc" component={ConfirmPasswordScreen} options={{ headerShown: false }} />

            <Stack.Screen name="UploadImgSc" component={UploadImageScreen} options={{ headerShown: false }} />

            <Stack.Screen name="RegisterDetailSc" component={RegisterDetail} options={{ headerShown: false }} />

            <Stack.Screen name="RegisterInstitutionSc" component={RegisterInstitutionScreen} options={{ headerShown: false }} />

            <Stack.Screen name="RegisterInsitutionDetailSc" component={RegisterInsitutionDetail} options={{ headerShown: false }} />

            <Stack.Screen name="RegisterSc" component={RegisterScreen} options={{
                headerShown: false,
            }} />
        </>
    )
}

const AuthScreens = (navigator) => (
    <>
        <Stack.Screen name="LoginSc" component={LoginScreen} options={{
            headerShown: false
        }} />

        <Stack.Screen name="ForgotPasswordSc" component={ForgotPasswordScreen} options={{
            headerLeft: () =>
                <Pressable onPress={() => navigator.navigate("LoginSc")}>
                    <ArrowBack />
                </Pressable>
        }} />
    </>
)

const StackNavigation = () => {
    const navigator = useNavigation()
    return (
        <Stack.Navigator initialRouteName="LoginSc" screenOptions={{
            headerShown: true,
            headerTitle: ""
        }}>

            {AuthScreens(navigator)}
            {RegisterScreens()}

            <Stack.Screen name="TabNav" component={TabNavigation} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default StackNavigation;