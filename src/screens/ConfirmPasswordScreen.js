import {
    View,
    Text,
    Pressable
} from "react-native"
import { BaseScreen } from "../components/BaseScreen"
import { LoginInput } from "../components/Login/Inputs"
import { ArrowFoward } from "../components/Icons"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../components/Login/ButtonStyle"
import { ArrowBack } from "../components/Icons"
import { useNavigation } from "@react-navigation/native"
import ProgessBar from "../components/Login/ProgressBar"
import LoginButton from "../components/Login/Button"


const ConfirmPasswordScreen = () => {

    const navigator = useNavigation();

    return (
        <BaseScreen children={
            <SafeAreaView style={{
                flex: 1,
                paddingBottom: 5,
                marginRight: 20,
                marginTop: 50,
                marginLeft: 20
            }}>

                <View className="items-center">
                    <ProgessBar preogression={0.7} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View className="mt-3">
                        <Text className="text-slate-600 font-extrabold mx-4">Paso 3-4</Text>
                    </View>
                    <View className="mt-3 mx-20">
                        <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar persona</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 12 }}>
                    <Pressable onPress={() => navigator.navigate("RegisterDetailSc")}>
                        <ArrowBack />
                    </Pressable>
                    <Text className="mx-3 text-xl font-extrabold">Paso anterior</Text>
                </View>

                <View className="items-start space-y-10 mt-20">
                    <Text className="text-TextCollector text-lg font-extrabold">Contraseña</Text>
                    <LoginInput />
                    <Text className="text-TextCollector text-lg font-extrabold">Confirmar contraseña</Text>
                    <LoginInput />
                </View>


                <View className="items-center mt-20 mb-2">
                    <LoginButton TextInput={"Siguiente"} Ustyled={styles.button} >
                        <ArrowFoward />
                    </LoginButton>

                    <LoginButton onPressed={() => navigator.navigate("EntryScreen")}
                        TextInput={"Volver al home"}
                        Ustyled={styles.buttonHome} />
                </View>
            </SafeAreaView>
        }>
        </BaseScreen>
    )
}

export default ConfirmPasswordScreen
