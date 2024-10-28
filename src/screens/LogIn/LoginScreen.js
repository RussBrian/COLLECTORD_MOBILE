import {
    Text,
    Pressable,
    View
} from "react-native";
import { BaseScreen } from "../../components/Shared/BaseScreen";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { LoginInput } from "../../components/Login/Inputs";
import { ArrowDown } from "../../components/Shared/Icons";
import { styles } from "../../components/Login/ButtonStyle"
import { useForm } from "react-hook-form";
import { LogInService } from "../../services/LogInService";
import LoginButton from "../../components/Login/Button";

const LoginScreen = () => {
    const navigator = useNavigation();
    const { control, handleSubmit } = useForm();

    useEffect(() => {
    }, [navigator]);

    const onSubmit = (data) => {
        console.log("Datos de formulario:", data)
        const response = LogInService(data.password, data.email);
        {
            response === 400 ? console.log("No pude iniciar sesion") : navigator.navigate("TabNav")
        }
    }

    return (
        <BaseScreen>
            <View className="flex-1 justify-center mx-4 space-x-1 space-y-4">

                <Text className="text-4xl text-TitleCollector text-center font-extrabold">Inicia Sesión</Text>
                <Text className="text-xl font-bold text-center">¡Bienvenido a CollectoRD! Si aún no tienes una cuenta, regístrate hoy y únete a nuestra comunidad para hacer una diferencia.</Text>

                <View className="items-center space-y-3">
                    
                    <LoginInput
                        placeHolderName={"Email"}
                        name={"email"}
                        control={control} />

                    <LoginInput
                        placeHolderName={"Contraseña"}
                        name={"password"}
                        secureTextEntry={true}
                        control={control} />
                </View>

                <View className="items-end mx-2">
                    <Pressable onPress={() => navigator.navigate("ForgotPasswordSc")}>
                        <Text className="text-collectorGreen text-lg font-extrabold mt-4 mb-3 items-end ">Olvidaste tu contraseña?</Text>
                    </Pressable>
                </View>

                <View className="items-center">
                    <LoginButton
                        onPressed={handleSubmit(onSubmit)}
                        TextInput={"Iniciar Sesion"}
                        Ustyled={styles.button} />
                </View>


                <View className="items-center justify-center space-y-3">
                    <Text className="text-black text-base w-40 text-center font-bold">No tienes cuenta? ¡Vamos registrate!</Text>
                    <ArrowDown />
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        
                        <LoginButton
                            onPressed={handleSubmit(() => navigator.navigate("RegisterSc"))}
                            TextInput={"Personas"}
                            Ustyled={styles.smallButton}
                        />

                        <LoginButton
                            onPressed={handleSubmit(() => navigator.navigate("RegisterInstitutionSc"))}
                            TextInput={"Institución"}
                            Ustyled={styles.smallButton}
                        />
                    </View>
                </View>
            </View>
        </BaseScreen>
    );
};

export default LoginScreen;