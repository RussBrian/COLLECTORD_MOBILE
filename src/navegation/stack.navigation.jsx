import LoginScreen from "../screens/LogIn/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import TabNavigation from "./tab.navegation";
import ForgotPasswordScreen from "../screens/ForgotPassworScreen";
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

const StackNavigation = () => {

    const navigator = useNavigation();

    return (

        <Stack.Navigator initialRouteName="LoginSc" screenOptions={{
            headerShown: true,
            headerTitle: ""
        }}>

            <Stack.Screen name="LoginSc" component={LoginScreen} options={{
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

            <Stack.Screen name="RegisterInstitutionSc" component={RegisterInstitutionScreen} options={{
                headerShown: false
            }} />

            <Stack.Screen name="RegisterInsitutionDetailSc" component={RegisterInsitutionDetail} options={{
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