import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { BaseScreen } from "../components/BaseScreen"
import { LoginInput } from "../components/Login/Inputs"

const RegisterScren = () => {
    return (
        <BaseScreen children={
            <ScrollView contentContainerStyle={{
                paddingBottom:10, 
                marginRight:14, 
                marginLeft:14
                }}>
                
                <View className="items-center">
                    <Text className="text-customBlueGreen text-4xl text-center font-extrabold">Create an account</Text>
                    <Text className="text-xl font-bold text-center mt-2">Create an account be part of out big comunity!</Text>
                </View>

                <View className="items-center s mt-5">
                    <LoginInput placeHolderName={"Nombre"} />
                    <LoginInput placeHolderName={"Appellido"} />
                    <LoginInput placeHolderName={"User name"} />
                    <LoginInput placeHolderName={"Telefono"} />
                    <LoginInput placeHolderName={"Email"} />
                    <LoginInput placeHolderName={"Identificacion"} />
                    <LoginInput placeHolderName={"Genero"} />
                    <LoginInput placeHolderName={"Dirección"} />
                    <LoginInput placeHolderName={"Contraseña"} />
                </View>


                <View className="items-center mt-4 mb-2">
                    <View className="bg-customBlueGreen p-6 w-72 rounded-3xl">
                        <TouchableOpacity>
                            <Text className="text-center text-black  font-extrabold text-base">Register account</Text>
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