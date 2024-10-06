import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native"
import { BaseScreen } from "../components/BaseScreen"
import { LoginInput } from "../components/Login/Inputs"
import { ArrowFoward } from "../components/Icons"

const RegisterScren = () => {
    return (
        <BaseScreen children={
            <ScrollView contentContainerStyle={{
                paddingBottom:10, 
                marginRight:20, 
                marginLeft:20
                }}>
                
                <View className="items-center">
                    <Text className="text-customBlueGreen text-4xl text-center font-extrabold">Create an account</Text>
                    <Text className="text-xl font-bold text-center mt-2">Create an account be part of out big comunity!</Text>
                </View>

                <View className="items-center s mt-5">
                    <LoginInput placeHolderName={"Nombre"} />
                    <LoginInput placeHolderName={"Appellido"} />
                    <LoginInput placeHolderName={"User name"} />
                    {/* <LoginInput placeHolderName={"Telefono"} /> */}
                    <LoginInput placeHolderName={"Email"} />
                    {/* <LoginInput placeHolderName={"Identificacion"} />
                    <LoginInput placeHolderName={"Genero"} />
                    <LoginInput placeHolderName={"Dirección"} /> */}
                    <LoginInput placeHolderName={"Contraseña"} />
                </View>


                <View className="items-end mt-4 mb-2">
                    <View className="bg-customBlueGreen p-6 w-30 rounded-lg">
                        <TouchableOpacity>
                            <Text className="text-center text-black">
                                <ArrowFoward/>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        }>
        </BaseScreen>
    )
}

export default RegisterScren

// const styled = StyleSheet.create({
    
// })