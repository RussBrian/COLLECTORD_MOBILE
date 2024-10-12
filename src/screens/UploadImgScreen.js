import {
    View,
    Text,
    Pressable,
    StyleSheet
} from "react-native"
import { BaseScreen } from "../components/BaseScreen"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../components/Login/ButtonStyle"
import { ArrowBack } from "../components/Icons"
import { useNavigation } from "@react-navigation/native"
import { ImagePickerService } from "../services/GalleryService"
import ProgessBar from "../components/Login/ProgressBar"
import LoginButton from "../components/Login/Button"

const UploadImageScreen = () => {

    const navigator = useNavigation();

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
                    <ProgessBar preogression={100} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View className="mt-3">
                        <Text className="text-slate-600 font-extrabold mx-4">Paso 4-4</Text>
                    </View>
                    <View className="mt-3 mx-20">
                        <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar persona</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 12 }}>
                    <Pressable onPress={() => navigator.navigate("ConfirmPasswordSc")}>
                        <ArrowBack />
                    </Pressable>
                    <Text className="mx-3 text-xl font-extrabold">Paso anterior</Text>
                </View>

                <View className="items-center">

                    <ImagePickerService />

                    <Text className="text-collectorGreen text-xl font-extrabold">
                        Puedes dar clic en el circulo para seleccionar
                        una imagen o puedes dejar el avatar por defecto.</Text>
                </View>

                <View className="items-center mt-20 mb-2">
                    <LoginButton
                        TextInput={"Registrar"}
                        Ustyled={styles.button} />

                    <LoginButton onPressed={() => navigator.navigate("EntryScreen")}
                        TextInput={"Volver al home"}
                        Ustyled={styles.buttonHome} />
                </View>
            </SafeAreaView>
        }>
        </BaseScreen>
    )
}

export default UploadImageScreen

export const styled = StyleSheet.create({
    image: {
        marginTop: 50,
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 50
    },
})