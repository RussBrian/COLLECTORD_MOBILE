import { StatusBar } from "expo-status-bar"
import { View, Text } from "react-native"

export function BaseScreen({children}){
    return (
        <View className="flex-1 bg-neutral justify-center">
            <StatusBar style="dark"/>
            {children}
        </View>
    )
}