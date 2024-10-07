import {
    View,
    Text,
} from "react-native"
import { BaseScreen } from "../components/BaseScreen"
import { LoginInput } from "../components/Login/Inputs"
import { ArrowFoward } from "../components/Icons"
import { SafeAreaView } from "react-native-safe-area-context"
import LoginButton from "../components/Login/Button"
import { styles } from "../components/Login/ButtonStyle"

const ConfirmPasswordScreen = () => {

    return (
        <BaseScreen children={
            <SafeAreaView style={{
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
            }}>

                <View className="items-center">
                    <Text className="text-collectorGreen text-4xl text-center font-extrabold">Ingrese su contraseña</Text>
                    <Text className="text-base font-bold text-center mt-2">
                         Nota: Utilice mayusculas, numeros,
                         caracteres especiales y asegurese de que la contraseña contenga un minimo de 8 caracters.
                         Velamos por su seguridad gracias!</Text>
                </View>

                <View className="items-center s mt-5">
                    <LoginInput placeHolderName={"Password"} />
                    <LoginInput placeHolderName={"Confirm Password"} />
                </View>


                <View className="items-center mt-4 mb-2">
                    <LoginButton TextInput={"Crear cuenta"} Ustyled={styles.button} >
                        <ArrowFoward />
                    </LoginButton>
                </View>
            </SafeAreaView>
        }>
        </BaseScreen>
    )
}

export default ConfirmPasswordScreen
