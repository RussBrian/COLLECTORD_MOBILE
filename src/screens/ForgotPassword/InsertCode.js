import {
    View,
    Text,
    Pressable
} from "react-native"
import { LoginInput } from "../../components/Login/Inputs"
import { buttonStyles } from "../../components/Login/ButtonStyle"
import { ArrowBack } from "../../components/Shared/Icons"
import { useNavigation } from "@react-navigation/native"
import { useForm } from "react-hook-form"
import ModButtonOpacity from "../../components/Login/ModButtonOpacity"
import RegisterBaseSc from "../../components/Register/RegisterBaseSc"


const InserCode = () => {

    const { control, handleSubmit } = useForm()

    const submit = (data) => {
        console.log("Data submited", data)
        navigator.navigate("ResetPasswordSc")
    }

    const navigator = useNavigation();

    return (
        <RegisterBaseSc BarPregression={0.5} children={
            <>
                <View style={{ flexDirection: "row" }}>
                    <View className="mt-3">
                        <Text className="text-slate-600 font-extrabold mx-4">Paso 2-3</Text>
                    </View>
                    <View className="mt-3 mx-20">
                        <Text className="text-collectorGreen text-xl text-start font-extrabold">Restablecer contraseña</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 12 }}>
                    <Pressable onPress={() => navigator.navigate("ForgotPasswordSc")}>
                        <ArrowBack />
                    </Pressable>
                    <Text className="mx-3 text-xl font-extrabold">Paso anterior</Text>
                </View>


                <View className="items-center mt-12">
                    <Text className="text-4xl text-TitleCollector text-center font-extrabold">Ingresa su código</Text>
                </View>

                <View className="items-start space-y-5 mt-10">
                    <LoginInput
                        name={"Password"}
                        control={control}
                    />
                    <Text className="text-normal font-bold text-collectorLightGreen">Tomar en cuenta que su código no puede exceder los 4 dígitos.</Text>
                </View>


                <View className="items-center mt-9">
                    <Text className="text-collectorLightGreen text-base font-extrabold mb-2">
                        <Text className="text-red-600">*</Text> No debe incluir espacios</Text>

                    <ModButtonOpacity
                        onPressed={handleSubmit(submit)}
                        TextInput={"Enviar código"}
                        Ustyled={buttonStyles.button}
                        TextStyle={buttonStyles.textButton} />

                    <ModButtonOpacity
                        onPressed={() => navigator.navigate("LoginSc")}
                        TextInput={"Volver al inicio"}
                        Ustyled={buttonStyles.buttonHome}
                        TextStyle={buttonStyles.textTransparentButton} />
                </View>
            </>
        }>
        </RegisterBaseSc>
    )
}

export default InserCode
