import {
    Text,
    Pressable,
    View
} from "react-native";
import { BaseScreen } from "../components/BaseScreen";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { LoginInput } from "../components/Login/Inputs";
import { ArrowDown } from "../components/Icons";
import LoginButton from "../components/Login/Button";
import { styles } from "../components/Login/ButtonStyle"


const EntryScreen = () => {
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navegator = useNavigation();

    useEffect(() => {
    }, [navegator]);

    return (
        <BaseScreen>
            <View className="flex-1 justify-center mx-4 space-x-1 space-y-4">

                <Text className="text-4xl text-TitleCollector text-center font-extrabold">Inicia Sesión</Text>
                <Text className="text-xl font-bold text-center">Bienvenido de vuelta1q98r a Collector!</Text>

                <View className="items-center space-y-3">
                    <LoginInput placeHolderName={"Email"} />
                    <LoginInput placeHolderName={"Password"} />
                </View>

                <View className="items-end mx-2">
                    <Pressable onPress={() => navegator.navigate("ForgotPasswordSc")}>
                        <Text className="text-collectorGreen text-lg font-extrabold mt-4 mb-3 items-end ">Olvidaste tu contraseña?</Text>
                    </Pressable>
                </View>

                <View className="items-center">
                    <LoginButton
                        onPressed={() => navegator.navigate("TabNav")}
                        TextInput={"Iniciar Sesion"}
                        Ustyled={styles.button} />
                </View>


                <View className="items-center justify-center space-y-3">
                    <Text className="text-black text-base w-40 text-center font-bold">No tienes cuenta? ¡Vamos registrate!</Text>

                    <ArrowDown />

                    <View style={{ flexDirection: "row", marginTop: 20 }}>

                        <LoginButton
                            onPressed={() => navegator.navigate("RegisterSc")}
                            TextInput={"Personas"}
                            Ustyled={styles.smallButton}
                        />

                        <LoginButton
                            onPressed={() => navegator.navigate("RegisterSc")}
                            TextInput={"Institución"}
                            Ustyled={styles.smallButton}
                        />
                    </View>
                </View>
            </View>
        </BaseScreen>
    );
};

export default EntryScreen;