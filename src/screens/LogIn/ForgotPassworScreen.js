import { View, Text, Pressable } from "react-native"
import { LoginInput } from "../../components/Login/Inputs"
import ModButtonOpacity from "../../components/Login/ModButtonOpacity"
import { buttonStyles } from "../../components/Login/ButtonStyle"
import { useForm } from "react-hook-form"
import { ArrowBack } from "../../components/Shared/Icons"
import RegisterBaseSc from "../../components/Register/RegisterBaseSc"
import { useNavigation } from "@react-navigation/native"

const ForgotPasswordScreen = () => {

    const { control, handleSubmit } = useForm()
    const navigator = useNavigation()

    function SendEmailService() {
        navigator.navigate("InsertCodeSc")
     }

    return (
        <RegisterBaseSc
            children={
                <>

                    <View style={{ flexDirection: "row" }}>
                        <View className="mt-3">
                            <Text className="text-slate-600 font-extrabold mx-4">Paso 1-3</Text>
                        </View>
                        <View className="mt-3 mx-20">
                            <Text className="text-collectorGreen text-xl text-start font-extrabold">Restablecer constaseña</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 12 }}>
                        <Pressable onPress={() => navigator.navigate("LoginSc")}>
                            <ArrowBack />
                        </Pressable>
                        <Text className="mx-3 text-xl font-extrabold">Inicio de sesion</Text>
                    </View>

                    <View className="mt-20 space-y-4">
                        <Text className="text-4xl text-TitleCollector text-center font-extrabold">Restablece tu contraseña</Text>
                        <Text className="text-2xl font-bold text-center">
                            No te preocupes.
                            Ingresa tu correo electrónico y te enviaremos
                            un código de verificación para restablecer tu contraseña.
                        </Text>


                        <View className="items-center space-y-3">
                            <LoginInput
                                placeHolderName={"Email"}
                                control={control}
                                name={"Email"} />
                        </View>

                        <View className="items-center">
                            <ModButtonOpacity
                                onPressed={() => handleSubmit(SendEmailService())}
                                TextInput={"Enviar email"}
                                Ustyled={buttonStyles.button}
                                TextStyle={buttonStyles.textButton} />
                        </View>
                    </View>
                </>
            }>

        </RegisterBaseSc>
    )
}

export default ForgotPasswordScreen