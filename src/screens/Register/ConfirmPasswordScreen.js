import {
    View,
    Text,
    Pressable
} from "react-native"
import { LoginInput } from "../../components/Login/Inputs"
import { buttonStyles } from "../../components/Login/ButtonStyle"
import { ArrowBack } from "../../components/Shared/Icons"
import { useNavigation } from "@react-navigation/native"
import LoginButton from "../../components/Login/ModButtonOpacity"
import { useForm } from "react-hook-form"
import RegisterBaseSc from "../../components/Register/RegisterBaseSc"


const ConfirmPasswordScreen = ({route}) => {

    const { control, handleSubmit } = useForm()
    const { IsButtonInsitutionPress } = route.params

    const submit = (data) => {
        console.log("Data submited", data)
        navigator.navigate("UploadImgSc",{IsButtonInsitutionPress})
    }

    const navigator = useNavigation();

    return (
        <RegisterBaseSc BarPregression={0.6} children={
            <>
                <View style={{ flexDirection: "row" }}>
                    <View className="mt-3">
                        <Text className="text-slate-600 font-extrabold mx-4">Paso 3-4</Text>
                    </View>
                    <View className="mt-3 mx-20">
                        {IsButtonInsitutionPress == false ?                         
                        <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar persona</Text> 
                        :
                        <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar Institución</Text> 
                        }
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 12 }}>
                    <Pressable onPress={() => navigator.navigate("RegisterDetailSc",{IsButtonInsitutionPress})}>
                        <ArrowBack />
                    </Pressable>
                    <Text className="mx-3 text-xl font-extrabold">Paso anterior</Text>
                </View>

                <View className="items-start space-y-5 mt-20">
                    <Text className="text-TextCollector text-lg font-extrabold">
                        <Text className="text-red-600">*</Text> Contraseña</Text>
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


                <View className="items-center mt-10">
                    <Text className="text-collectorLightGreen text-base font-extrabold mb-2">
                        <Text className="text-red-600">*</Text> No debe incluir espacios</Text>

                    <LoginButton onPressed={handleSubmit(submit)}
                        TextInput={"Siguiente"}
                        Ustyled={buttonStyles.button}
                        TextStyle={buttonStyles.textButton} />

                    <LoginButton onPressed={() => navigator.navigate("LoginSc")}
                        TextInput={"Volver al inicio"}
                        Ustyled={buttonStyles.buttonHome}
                        TextStyle={buttonStyles.textTransparentButton} />
                </View>
            </>
        }>
        </RegisterBaseSc>
    )
}

export default ConfirmPasswordScreen
