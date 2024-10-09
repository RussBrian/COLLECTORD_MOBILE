import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
} from "react-native"
import { BaseScreen } from "../components/BaseScreen"
import { LoginInput } from "../components/Login/Inputs"
import { styles } from "../components/Login/ButtonStyle"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowBack } from "../components/Icons"
import LoginButton from "../components/Login/Button"
import ProgessBar from "../components/Login/ProgressBar"


const RegisterScreen = () => {

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
                    <Pressable onPress={() => navigator.navigate("EntryScreen")}>
                        <ArrowBack />
                    </Pressable>
                    <Text className="mx-3 text-xl font-extrabold">Log In</Text>
                </View>


                <View className="items-start mt-10 space-y-5">
                    <Text className="text-TextCollector text-lg font-extrabold">Nombre</Text>
                    <LoginInput />
                    <Text className="text-TextCollector text-lg font-extrabold">Apellido</Text>
                    <LoginInput />
                    <Text className="text-TextCollector text-lg font-extrabold">Username</Text>
                    <LoginInput />
                </View>

                <View className="items-center mt-20 space-y-4">
                    <LoginButton onPressed={() => navigator.navigate("RegisterDetailSc")}
                        TextInput={"Siguiente"}
                        Ustyled={styles.button} />

                    <LoginButton onPressed={() => navigator.navigate("RegisterDetailSc")}
                        TextInput={"Volver a home"}
                        Ustyled={styles.buttonHome} />
                </View>
            </SafeAreaView>
        }>
        </BaseScreen>
    )
}

export default RegisterScreen
