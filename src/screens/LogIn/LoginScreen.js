import {
    Text,
    Pressable,
    View,
    Alert
} from "react-native";
import { BaseScreen } from "../../components/Shared/BaseScreen";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { LoginInput } from "../../components/Login/Inputs";
import { ArrowDown } from "../../components/Shared/Icons";
import { buttonStyles } from "../../components/Login/ButtonStyle"
import { useForm } from "react-hook-form";
import { LogInService } from "../../services/LogInService";
import ModButtonOpacity from "../../components/Login/ModButtonOpacity";
import { useAuthStore } from "../../Zustand/LoginZustand";

const LoginScreen = () => {

    const navigator = useNavigation();
    const StorageLogin = useAuthStore(state => state.login)
    const UserSession = useAuthStore(state => state.UserSession)
    const { control, handleSubmit } = useForm();
    const [IsButtonInsitutionPress, setButtonInsitution] = useState(false);
    const EMIAL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    useEffect(() => {
    }, [navigator]);

    const NavigateTo = () => {
        setButtonInsitution(true);
        navigator.navigate("RegisterSc", {
            IsButtonInsitutionPress: true
        });
    }

    const NavigateToPerson = () => {
        setButtonInsitution(false);
        navigator.navigate("RegisterSc", {
            IsButtonInsitutionPress: false
        });
    }

    const onSubmit = async (data) => {
        console.log("Datos de formulario:", data);
        const responseObject = await LogInService(data);
        console.log("Session antes de guardar:", responseObject);
        await StorageLogin(responseObject);
        console.log("Session guardada:", UserSession);
    
        navigator.replace("TabNav");
    };
    return (
        <BaseScreen>
            <View className="flex-1 justify-center mx-4 space-x-1 space-y-4">

                <Text className="text-4xl text-TitleCollector text-center font-extrabold">Inicia Sesión</Text>
                <Text className="text-xl font-bold text-center">¡Bienvenido a CollectoRD! Si aún no tienes una cuenta, regístrate hoy y únete a nuestra comunidad para hacer una diferencia.</Text>

                <View className="items-center space-y-3">

                    <LoginInput
                        placeHolderName={"Correo electrónico"}
                        name={"email"}
                        rules={{
                            required:"El correo electrónico es requirdo",
                            pattern:{
                                value:EMIAL_REGEX, 
                                message:"Debe ingresar un correo valido"}
                        }}
                        control={control}
                    />
                    <LoginInput
                        placeHolderName={"Contraseña"}
                        name={"password"}
                        rules={{ required: "La contraseña es requerida" }}
                        secureTextEntry={true}
                        control={control}
                    />
                </View>

                <View className="items-end mx-2">
                    <Pressable onPress={() => navigator.navigate("ForgotPasswordSc")}>
                        <Text className="text-collectorGreen text-lg font-extrabold mt-4 mb-3 items-end ">Olvidaste tu contraseña?</Text>
                    </Pressable>
                </View>

                <View className="items-center">
                    <ModButtonOpacity
                        onPressed={handleSubmit(onSubmit)}
                        TextInput={"Iniciar Sesion"}
                        Ustyled={buttonStyles.button}
                        TextStyle={buttonStyles.textButton} />
                </View>


                <View className="items-center justify-center space-y-3">
                    <Text className="text-black text-base w-40 text-center font-bold">No tienes cuenta? ¡Vamos registrate!</Text>
                    <ArrowDown />
                    <View style={{ flexDirection: "row", marginTop: 20 }}>

                        <ModButtonOpacity
                            onPressed={() => NavigateToPerson()}
                            TextInput={"Personas"}
                            Ustyled={buttonStyles.smallButton}
                            TextStyle={buttonStyles.textButton}
                        />

                        <ModButtonOpacity
                            onPressed={() => NavigateTo()}
                            TextInput={"Insitutcion"}
                            Ustyled={buttonStyles.smallButton}
                            TextStyle={buttonStyles.textButton}
                        />
                    </View>
                </View>
            </View>
        </BaseScreen>
    );
};

export default LoginScreen;