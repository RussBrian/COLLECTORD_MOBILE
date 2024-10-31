import { StatusBar } from "expo-status-bar"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Pressable } from "react-native"
import { ArrowBack } from "../Shared/Icons"
import  ProgessBar from "../../components/Login/ProgressBar"
import { useNavigation } from "expo-router"


export default function RegisterBaseSc({BarPregression , children}) {
   
    return (
        <View className="flex-1 bg-neutral justify-center">
            <StatusBar style="dark" />
            <SafeAreaView style={{
                flex: 1,
                paddingBottom: 5,
                marginRight: 20,
                marginTop: 20,
                marginLeft: 20,
            }}>

                <View className="items-center">
                    <ProgessBar preogression={BarPregression} />
                </View>
                {children}
            </SafeAreaView>
        </View>
    )
}