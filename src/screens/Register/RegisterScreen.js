import {
    View,
    Text,
    Pressable,
} from "react-native"
import { BaseScreen } from "../../components/Shared/BaseScreen"
import { LoginInput } from "../../components/Login/Inputs"
import { styles } from "../../components/Login/ButtonStyle"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowBack } from "../../components/Shared/Icons"
import { useForm } from "react-hook-form"
import LoginButton from "../../components/Login/Button"
import ProgessBar from "../../components/Login/ProgressBar"


const RegisterScreen = () => {

    const { control, handleSubmit } = useForm()

    const submit = (data) => {
        console.log("Data submited", data)
        navigator.navigate("RegisterDetailSc")
    }

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
                    <ProgessBar preogression={0.0} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View className="mt-3">
                        <Text className="text-slate-600 font-extrabold mx-4">Paso 1-4</Text>
                    </View>
                    <View className="mt-3 mx-20">
                        <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar persona</Text>
                    </View>
                </View>


                <View style={{ flexDirection: "row", marginTop: 12 }}>
                    <Pressable onPress={() => navigator.navigate("LoginSc")}>
                        <ArrowBack />
                    </Pressable>
                    <Text className="mx-3 text-xl font-extrabold">Inicio de sesion</Text>
                </View>


                <View className="items-start mt-8 space-y-4">
                    <Text className="text-TextCollector text-lg font-extrabold">
                        <Text className="text-red-600">*</Text> Nombre</Text>
                    <LoginInput
                        name={"Name"}
                        control={control}
                    />
                    <Text className="text-TextCollector text-lg font-extrabold">
                        <Text className="text-red-600">*</Text> Apellido</Text>
                    <LoginInput
                        name={"LastName"}
                        control={control} />
                    <Text className="text-TextCollector text-lg font-extrabold">
                        <Text className="text-red-600">*</Text> Nombre de usuario</Text>
                    <LoginInput
                        name={"UserName"}
                        control={control} />
                </View>

                <View className="ms-1 mt-1">
                    <Text className="text-collectorLightGreen text-base font-extrabold">No debe de iniciar con un numero</Text>
                    <Text className="text-collectorLightGreen text-base font-extrabold">No debe incluir espacios</Text>
                </View>

                <View className="items-center mt-10 space-y-4">

                    <Text className="text-collectorLightGreen text-base font-extrabold mb-2">
                        <Text className="text-red-600">*</Text> No debe incluir espacios</Text>

                    <LoginButton onPressed={handleSubmit(submit)}
                        TextInput={"Siguiente"}
                        Ustyled={styles.button} />

                    <LoginButton onPressed={() => navigator.navigate("LoginSc")}
                        TextInput={"Volver a inicio"}
                        Ustyled={styles.buttonHome} />
                </View>
            </SafeAreaView>
        }>
        </BaseScreen>
    )
}

export default RegisterScreen
