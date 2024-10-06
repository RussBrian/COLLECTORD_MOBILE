import { View , Text, TouchableOpacity} from "react-native"
import { LoginInput } from "../components/Login/Inputs"

const ForgotPasswordScreen = () => {
    return (
            <View style={{justifyContent:"center"}} className="flex-1 mx-4 space-x-1 space-y-4">

                <Text className="text-4xl text-customBlueGreen text-center font-extrabold">Reset your password</Text>
                <Text className="text-2xl font-bold text-center">
                    Don´t worry. 
                    Enter your email and we´ll send your 
                    a verification code to reset your password.
                </Text>

                <View className="items-center space-y-3">
                    <LoginInput placeHolderName={"Email"} />
                </View>

                <View className="items-center">
                    <View className="bg-customBlueGreen p-6 w-72 rounded-lg">
                        <TouchableOpacity onPress={() => navegator.navigate("TabNav")}>
                            <Text className="text-center text-black font-extrabold text-base">Sent Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}

export default ForgotPasswordScreen