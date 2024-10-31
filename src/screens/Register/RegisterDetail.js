import {
    View,
    Text,
    Pressable
} from "react-native"
import { LoginInput } from "../../components/Login/Inputs"
import { useNavigation } from "@react-navigation/native"
import { buttonStyles } from "../../components/Login/ButtonStyle"
import { ArrowBack } from "../../components/Shared/Icons"
import { useForm } from "react-hook-form"
import ModButtonOpacity from "../../components/Login/ModButtonOpacity"
import RegisterBaseSc from "../../components/Register/RegisterBaseSc"

const RegisterDetail = ({route}) => {

    const { control, handleSubmit } = useForm()
    const { IsButtonInsitutionPress } = route.params

    const submit = (data) => {
        console.log("Data submited", data)
        navigator.navigate("ConfirmPasswordSc", {IsButtonInsitutionPress})
    }

    const navigator = useNavigation()

    return (
        <RegisterBaseSc BarPregression={0.3} children={
            <>

                {IsButtonInsitutionPress == false ?

                    //REGISTER DETAILS PERSON
                    <>
                        <View style={{ flexDirection: "row" }}>
                            <View className="mt-3">
                                <Text className="text-slate-600 font-extrabold mx-4">Paso 2-4</Text>
                            </View>
                            <View className="mt-3 mx-20">
                                <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar persona</Text>
                            </View>
                        </View>


                        <View style={{ flexDirection: "row", marginTop: 12 }}>
                            <Pressable onPress={() => navigator.navigate("RegisterSc",{IsButtonInsitutionPress})}>
                                <ArrowBack />
                            </Pressable>
                            <Text className="mx-3 text-xl font-extrabold">Paso anterior</Text>
                        </View>


                        <View className="items-start mt-10 space-y-5">
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Correo electrónico</Text>
                            <LoginInput
                                name={"Email"}
                                control={control}
                            />
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Identificacion</Text>
                            <LoginInput
                                name={"Identification"}
                                control={control}
                            />
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Dirección</Text>
                            <LoginInput
                                name={"Address"}
                                control={control}
                            />
                        </View>

                        <View className="items-center justify-end mt-10 space-y-4">
                            <Text className="text-collectorLightGreen text-base font-extrabold mb-2">
                                <Text className="text-red-600">*</Text> No debe incluir espacios</Text>

                            <ModButtonOpacity onPressed={handleSubmit(submit)}
                                TextInput={"Siguiente"}
                                Ustyled={buttonStyles.button}
                                TextStyle={buttonStyles.textButton} />

                            <ModButtonOpacity onPressed={() => navigator.navigate("LoginSc")}
                                TextInput={"Volver al inicio"}
                                Ustyled={buttonStyles.buttonHome}
                                TextStyle={buttonStyles.textTransparentButton} />
                        </View>
                    </>

                    :

                    //REGISTER DETAILS INSTUTION
                    <>

                        <View style={{ flexDirection: "row" }}>
                            <View className="mt-3">
                                <Text className="text-slate-600 font-extrabold mx-4">Paso 2-4</Text>
                            </View>
                            <View className="mt-3 mx-20">
                                <Text className="text-collectorGreen text-xl text-start font-extrabold">Registrar Insitutcion</Text>
                            </View>
                        </View>


                        <View style={{ flexDirection: "row", marginTop: 12 }}>
                            <Pressable onPress={() => navigator.navigate("RegisterSc",{IsButtonInsitutionPress})}>
                                <ArrowBack />
                            </Pressable>
                            <Text className="mx-3 text-xl font-extrabold">Paso anterior</Text>
                        </View>


                        <View className="items-start mt-10 space-y-5">
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Correo electrónico</Text>
                            <LoginInput
                                name={"Email"}
                                control={control}
                            />
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Identificacion</Text>
                            <LoginInput
                                name={"Identification"}
                                control={control}
                            />
                            <Text className="text-TextCollector text-lg font-extrabold">
                                <Text className="text-red-600">*</Text> Dirección</Text>
                            <LoginInput
                                name={"Address"}
                                control={control}
                            />
                        </View>

                        <View className="items-center justify-end mt-10 space-y-4">
                            <Text className="text-collectorLightGreen text-base font-extrabold mb-2">
                                <Text className="text-red-600">*</Text> No debe incluir espacios</Text>

                            <ModButtonOpacity onPressed={handleSubmit(submit)}
                                TextInput={"Siguiente"}
                                Ustyled={buttonStyles.button}
                                TextStyle={buttonStyles.textButton} />

                            <ModButtonOpacity onPressed={() => navigator.navigate("LoginSc")}
                                TextInput={"Volver al inicio"}
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

export default RegisterDetail
