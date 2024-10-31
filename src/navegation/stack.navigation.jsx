import LoginScreen from "../screens/LogIn/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import TabNavigation from "./tab.navegation";
import ForgotPasswordScreen from "../screens/LogIn/ForgotPassworScreen";
import ConfirmPasswordScreen from "../screens/Register/ConfirmPasswordScreen";
import RegisterDetail from "../screens/Register/RegisterDetail";
import UploadImageScreen from "../screens/Register/UploadImgScreen";
import  ResetPassword  from "../screens/ForgotPassword/ResetPassword";
import InserCode from "../screens/ForgotPassword/InsertCode";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const RegisterScreens = () => (
    <>
        <Stack.Screen name="ConfirmPasswordSc" component={ConfirmPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UploadImgSc" component={UploadImageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterDetailSc" component={RegisterDetail} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterSc" component={RegisterScreen} options={{ headerShown: false }} />
    </>
);

const AuthScreens = () => (
    <>
        <Stack.Screen name="LoginSc" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPasswordSc" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordSc" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InsertCodeSc" component={InserCode} options={{ headerShown:false }} />
    </>
);

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="LoginSc" screenOptions={{ headerShown: true, headerTitle: "" }}>
            {AuthScreens()}
            {RegisterScreens()}
            <Stack.Screen name="TabNav" component={TabNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
