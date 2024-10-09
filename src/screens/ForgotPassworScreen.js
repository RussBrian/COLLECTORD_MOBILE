import { View, Text, TouchableOpacity } from "react-native"
import { LoginInput } from "../components/Login/Inputs"
import LoginButton from "../components/Login/Button"
import { styles } from "../components/Login/ButtonStyle"

const ForgotPasswordScreen = () => {
    return (
        <View style={{ justifyContent: "center" }} className="flex-1 mx-4 space-x-1 space-y-4">

            <Text className="text-4xl text-TitleCollector text-center font-extrabold">Restablece tu contraseña</Text>
            <Text className="text-2xl font-bold text-center">
                No te preocupes.
                Ingresa tu correo electrónico y te enviaremos
                un código de verificación para restablecer tu contraseña.
            </Text>

            <View className="items-center space-y-3">
                <LoginInput placeHolderName={"Email"} />
            </View>

            <View className="items-center">
                <LoginButton
                    TextInput={"Enviar email"}
                    Ustyled={styles.button} />
            </View>
        </View>
    )
}

export default ForgotPasswordScreen