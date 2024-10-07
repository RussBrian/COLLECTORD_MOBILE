import {
    View,
    Text,
    TouchableOpacity,
} from "react-native"
import { BaseScreen } from "../components/BaseScreen"
import { LoginInput } from "../components/Login/Inputs"
import { ArrowFoward } from "../components/Icons"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
import LoginButton from "../components/Login/Button"


const RegisterScreen = () => {

    const navegator = useNavigation()

    return (
        <BaseScreen children={
            <SafeAreaView style={{
                paddingBottom:10, 
                marginRight:20, 
                marginLeft:20
                }}>
                
                <View className="items-center">
                    <Text className="text-collectorGreen text-4xl text-center font-extrabold">Registrate</Text>
                    <Text className="text-xl font-bold text-center mt-2">Crea una nueva cuenta y se parte de nuestra gran comunidad!</Text>
                </View>

                <View className="items-center s mt-5">
                    <LoginInput placeHolderName={"Nombre"} />
                    <LoginInput placeHolderName={"Appellido"} />
                    <LoginInput placeHolderName={"User name"} />
                    <LoginInput placeHolderName={"Email"} />
                </View>


                <View className="items-end mt-4 mb-2">
                    <View className="bg-collectorGreen p-6 w-30 rounded-lg">
                        <TouchableOpacity onPress={() => navegator.navigate("ConfirmPasswordSc")}>
                            <ArrowFoward/>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        }>
        </BaseScreen>
    )
}

export default RegisterScreen
