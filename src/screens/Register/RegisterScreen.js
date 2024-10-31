import {
    View,
    Text,
    Pressable,
} from "react-native"
import { LoginInput } from "../../components/Login/Inputs"
import { buttonStyles } from "../../components/Login/ButtonStyle"
import { useNavigation } from "@react-navigation/native"
import { ArrowBack } from "../../components/Shared/Icons"
import { useForm } from "react-hook-form"
import ModButtonOpacity from "../../components/Login/ModButtonOpacity"
import RegisterBaseSc from "../../components/Register/RegisterBaseSc"


const RegisterScreen = ({ route }) => {

    const { IsButtonInsitutionPress } = route.params
    const { control, handleSubmit } = useForm()

    const submit = (data) => {
        console.log("Data submited", data)
        navigator.navigate("RegisterDetailSc",{IsButtonInsitutionPress})
    }

    const navigator = useNavigation()

    return (
        <RegisterBaseSc BarPregression={0.0} children={
            <>
                {IsButtonInsitutionPress == false ?
                    //REGISTER FOR PERSON
                    <>
                        <View style={{ flexDirection: "row" }}>
                            <View className="mt-3">
                                <Text className="text-slate-600 font-extrabold mx-4">Paso 1-4</Text>
                            </View>
                            <View className="mt-3 mx-20">
                                <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar persona</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 12 }}>
                            <Pressable onPress={() => navigator.navigate("LoginSc",{IsButtonInsitutionPress})}>
                                <ArrowBack />
                            </Pressable>
                            <Text className="mx-3 text-xl font-extrabold">Inicio de sesion</Text>
                        </View>


                        <View className="items-start mt-8 space-y-4">
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Nombre</Text>
                            <LoginInput
                                name={"Name"}
                                control={control}
                            />
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Apellido</Text>
                            <LoginInput
                                name={"LastName"}
                                control={control} />
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Nombre de usuario</Text>
                            <LoginInput
                                name={"UserName"}
                                control={control} />
                        </View>

                        <View className="ms-1 mt-1">
                            <Text className="text-collectorLightGreen text-base font-extrabold">No debe de iniciar con un numero</Text>
                            <Text className="text-collectorLightGreen text-base font-extrabold">No debe incluir espacios</Text>
                        </View>

                        <View className="items-center mt-5 space-y-4">

                            <Text className="text-collectorLightGreen text-base font-extrabold mb-2">
                                <Text className="text-red-600">*</Text> No debe incluir espacios</Text>

                            <ModButtonOpacity onPressed={handleSubmit(submit)}
                                TextInput={"Siguiente"}
                                Ustyled={buttonStyles.button}
                                TextStyle={buttonStyles.textButton} />

                            <ModButtonOpacity onPressed={() => navigator.navigate("LoginSc",{IsButtonInsitutionPress})}
                                TextInput={"Volver a inicio"}
                                Ustyled={buttonStyles.buttonHome}
                                TextStyle={buttonStyles.textTransparentButton} />
                        </View>
                    </>

                    :

                    //REGISTER FOR INSITUTION
                    <>
                        <View style={{ flexDirection: "row" }}>
                            <View className="mt-3">
                                <Text className="text-slate-600 font-extrabold mx-4">Paso 1-4</Text>
                            </View>
                            <View className="mt-3 mx-20">
                                <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar institución</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 12 }}>
                            <Pressable onPress={() => navigator.navigate("LoginSc")}>
                                <ArrowBack />
                            </Pressable>
                            <Text className="mx-3 text-xl font-extrabold">Inicio de sesion</Text>
                        </View>

                        <View className="items-start mt-8 space-y-4">
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> RNC</Text>
                            <LoginInput
                                name={"RNC"}
                                control={control}
                            />
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Telefono</Text>
                            <LoginInput
                                name={"Telefono"}
                                control={control} />
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Dirección </Text>
                            <LoginInput
                                name={"Dirección"}
                                control={control} />
                        </View>

                        <View className="ms-1 mt-1">
                            <Text className="text-collectorLightGreen text-base font-extrabold">No debe de iniciar con un numero</Text>
                            <Text className="text-collectorLightGreen text-base font-extrabold">No debe incluir espacios</Text>
                        </View>

                        <View className="items-center mt-5 space-y-4">

                            <Text className="text-collectorLightGreen text-base font-extrabold mb-2">
                                <Text className="text-red-600">*</Text> No debe incluir espacios</Text>

                            <ModButtonOpacity onPressed={handleSubmit(submit)}
                                TextInput={"Siguiente"}
                                Ustyled={buttonStyles.button}
                                TextStyle={buttonStyles.textButton} />

                            <ModButtonOpacity onPressed={() => navigator.navigate("LoginSc")}
                                TextInput={"Volver a inicio"}
                                Ustyled={buttonStyles.buttonHome}
                                TextStyle={buttonStyles.textTransparentButton} />
                        </View>
                    </>
                }
            </>
        }>
        </RegisterBaseSc>
    )
}
export default RegisterScreen
