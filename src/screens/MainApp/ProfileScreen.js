import { Pressable, Text, View } from "react-native";
import { BaseScreen } from "../../components/Shared/BaseScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImagePickerService } from "../../services/GalleryService";
import { EditProfile } from "../../components/Shared/Icons";
import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../../Zustand/LoginZustand";

const ProfileScreen = () => {

    const Logout = useAuthStore((state) => state.logout)
    const UserSession = useAuthStore((state) => state.UserSession)
    const navigator = useNavigation()

    // const LogoutMethod = async () => {
        
    //     await Logout();
    //     console.log("Usuario deslogueado: "+ UserSession)
    //     navigator.replace("LoginSc")
    // }

    return (
        <BaseScreen>
                <SafeAreaView style={{
                    flex: 1,
                    paddingTop:20
                }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text className="text-2xl font-bold mx-8">Perfil</Text>
                        <View className="mt-1 mr-8">
                            <Pressable>
                                <EditProfile />
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
                            <Pressable >
                                <Text className="text-center text-black font-bold border-gray-400 border-solid">Cerrar sesion</Text>
                            </Pressable>
                        </View>
                    </View>
                </SafeAreaView>
        </BaseScreen>
    )
}

export default ProfileScreen;
