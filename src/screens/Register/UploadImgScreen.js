import {
    View,
    Text,
    Pressable,
    StyleSheet
} from "react-native"

import { buttonStyles } from "../../components/Login/ButtonStyle"
import { ArrowBack } from "../../components/Shared/Icons"
import { useNavigation } from "@react-navigation/native"
import { ImagePickerService } from "../../services/GalleryService"
import ModButtonOpacity from "../../components/Login/ModButtonOpacity"
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react"
import RegisterBaseSc from "../../components/Register/RegisterBaseSc"

const UploadImageScreen = ({route}) => {

    const {IsButtonInsitutionPress} = route.params
    const navigator = useNavigation();
    const ref = useRef(null);
    useScrollToTop(ref);

    return (
        <RegisterBaseSc BarPregression={1} children={
            <>

            <View style={{ flexDirection: "row" }}>
                <View className="mt-3">
                    <Text className="text-slate-600 font-extrabold mx-4">Paso 4-4</Text>
                </View>
                <View className="mt-3 mx-20">
                    {
                        IsButtonInsitutionPress == false ? <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar persona</Text>
                        : <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar Institución</Text>
                    }
                </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 12 }}>
                <Pressable onPress={() => navigator.navigate("ConfirmPasswordSc",{IsButtonInsitutionPress})}>
                    <ArrowBack />
                </Pressable>
                <Text className="mx-3 text-xl font-extrabold">Paso anterior</Text>
            </View>

            <View className="items-center">
                <ImagePickerService />
                <Text className="text-collectorLightGreen text-lg font-extrabold">
                    Puedes dar clic en el circulo para seleccionar
                    una imagen o puedes dejar el avatar por defecto.</Text>
            </View>

            <View className="items-center mt-14 mb-2">
                <ModButtonOpacity
                    onPressed={() => navigator.navigate("LoginSc")}
                    TextInput={"Registrar"}
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