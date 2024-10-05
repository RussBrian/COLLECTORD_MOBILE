import { 
    Text,
     Pressable, 
     View, 
     TouchableOpacity 
} from "react-native";
import { BaseScreen } from "../components/BaseScreen";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { LoginInput } from "../components/Login/Inputs";

const EntryScreen = () => {

    const navegator = useNavigation();

    useEffect(() => {
    }, [navegator]);

    return (
        <BaseScreen>
            <View className="flex-1 justify-center mx-4 space-x-1 space-y-4">

                <Text className="text-4xl text-customBlueGreen text-center font-extrabold">Login here</Text>
                <Text className="text-xl font-bold text-center">Hey welcome back to Collector!</Text>

                <View className="items-center space-y-3">
                    <LoginInput placeHolderName={"Email"}/>
                    <LoginInput placeHolderName={"Password"}/>
                </View>

                <View className="items-end mx-2">
                    <Pressable>
                        <Text className="text-customBlueGreen text-base font-extrabold mt-4 mb-3 items-end ">Forgot your password?</Text>
                    </Pressable>
                </View>

                <View className="items-center">
                    <View className="bg-customBlueGreen p-6 w-72 rounded-3xl">
                        <TouchableOpacity onPress={() => navegator.navigate("TabNav")}>
                            <Text className="text-center text-black font-extrabold text-base">Iniciar Sesion</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text className="text-black text-base">New in the app?</Text>
                    <Pressable onPress={() => navegator.navigate("RegisterSc")}>
                        <Text className="text-customBlueGreen font-bold text-base shadow-lg"> Register here!</Text>
                    </Pressable>
                </View>

            </View>
        </BaseScreen>
    );
};

export default EntryScreen;
