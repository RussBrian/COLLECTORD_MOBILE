import {
    View,
    Text,
    Pressable
} from "react-native"
import { BaseScreen } from "../../components/Shared/BaseScreen"
import { LoginInput } from "../../components/Login/Inputs"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../../components/Login/ButtonStyle"
import { ArrowBack } from "../../components/Shared/Icons"
import ProgessBar from "../../components/Login/ProgressBar"
import LoginButton from "../../components/Login/Button"

const RegisterInsitutionDetail = () => {

    const navigator = useNavigation()

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
                    <ProgessBar preogression={0.5} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View className="mt-3">
                        <Text className="text-slate-600 font-extrabold mx-4">Paso 2-4</Text>
                    </View>
                    <View className="mt-3 mx-20">
                        <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar institución</Text>
                    </View>
                </View>


                <View style={{ flexDirection: "row", marginTop: 12 }}>
                    <Pressable onPress={() => navigator.navigate("RegisterSc")}>
                        <ArrowBack />
                    </Pressable>
                    <Text className="mx-3 text-xl font-extrabold">Paso anterior</Text>
                </View>


                <View className="items-start mt-10 space-y-5">
                    <Text className="text-TextCollector text-lg font-extrabold">
                        <Text className="text-red-600">*</Text>RNC</Text>
                    <LoginInput />
                    <Text className="text-TextCollector text-lg font-extrabold">
                        <Text className="text-red-600">*</Text>Telefono</Text>
                    <LoginInput />
                    <Text className="text-TextCollector text-lg font-extrabold">
                        <Text className="text-red-600">*</Text>Dirección</Text>
                    <LoginInput />
                </View>

                <View className="items-center justify-end mt-10 space-y-4">
                    <Text className="text-collectorLightGreen text-base font-extrabold mb-2">
                        <Text className="text-red-600">*</Text> No debe incluir espacios</Text>

                    <LoginButton onPressed={() => navigator.navigate("ConfirmPasswordSc")}
                        TextInput={"Siguiente"}
                        Ustyled={styles.button} />

                    <LoginButton onPressed={() => navigator.navigate("LoginSc")}
                        TextInput={"Volver al inicio"}
                        Ustyled={styles.buttonHome} />
                </View>
            </SafeAreaView>
        }>
        </BaseScreen>
    )
}

export default RegisterInsitutionDetail