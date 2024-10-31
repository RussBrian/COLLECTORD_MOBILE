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


const ResetPassword = () => {

    const { control, handleSubmit } = useForm()

    const submit = (data) => {
        console.log("Data submited", data)
    }

    const navigator = useNavigation();

    return (
        <RegisterBaseSc BarPregression={1} children={
            <>
                <View style={{ flexDirection: "row" }}>
                    <View className="mt-3">
                        <Text className="text-slate-600 font-extrabold mx-4">Paso 3-3</Text>
                    </View>
                    <View className="mt-3 mx-20">
                        <Text className="text-collectorGreen text-xl text-start font-extrabold">Restablecer contraseña</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 12 }}>
                    <Pressable onPress={() => navigator.navigate("InsertCodeSc")}>
                        <ArrowBack />
                    </Pressable>
                    <Text className="mx-3 text-xl font-extrabold">Paso anterior</Text>
                </View>

                <View className="items-start space-y-5 mt-10">

                    <Text className="text-TextCollector text-lg font-extrabold">
                        <Text className="text-red-600">*</Text> Nueva Contraseña</Text>
                    <LoginInput
                        name={"Password"}
                        control={control}
                    />
                    <Text className="text-normal font-extrabold text-collectorLightGreen"> La contraseña debe contener al menos:
                        1 letra, 8 caracteres, 1 número y 1 carácter
                        especial (“@”,”!”,”#”,”.”)</Text>

                    <Text className="text-TextCollector text-lg font-extrabold">
                        <Text className="text-red-600">*</Text> Confirmar contraseña</Text>
                    <LoginInput
                        name={"ConfirmPassword"}
                        control={control}
                    />
                </View>


                <View className="items-center mt-3">
                    <Text className="text-collectorLightGreen text-base font-extrabold mb-2">
                        <Text className="text-red-600">*</Text> No debe incluir espacios</Text>

                    <ModButtonOpacity   
                        onPressed={handleSubmit(submit)}
                        TextInput={"Cambiar contraseña"}
                        Ustyled={buttonStyles.button} 
                        TextStyle={buttonStyles.textButton}/>

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

export default ResetPassword
