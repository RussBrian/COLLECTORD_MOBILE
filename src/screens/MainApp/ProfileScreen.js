import { Pressable, Text, View } from "react-native";
import { BaseScreen } from "../../components/Shared/BaseScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImagePickerService } from "../../services/GalleryService";
import { LogOutIcon } from "../../components/Shared/Icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {

    const navigator = useNavigation()

    return (
        <BaseScreen>
                <SafeAreaView style={{
                    flex: 1,
                    marginTop:15
                }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text className="text-2xl font-bold mx-8">Perfil</Text>
                        <View className="mt-1 mr-8">
                            <Pressable onPress={() => navigator.navigate("LoginSc")}>
                                <LogOutIcon />
                            </Pressable>
                        </View>
                    </View>

                    <View className="justify-center items-center">
                        <ImagePickerService />
                        <Text className="text-2xl font-extrabold">David Smith</Text>
                        <Text className="text-normal">example@gmail.com</Text>
                    </View>

                    <View className="items-center mt-7">
                        <View className="bg-transparent p-5 rounded-md border-collectorLightGreen border-2 w-36">
                            <Pressable>
                                <Text className="text-center text-black font-bold border-gray-400 border-solid">Editar perfil</Text>
                            </Pressable>
                        </View>
                    </View>
                </SafeAreaView>
        </BaseScreen>
    )
}

export default ProfileScreen;
