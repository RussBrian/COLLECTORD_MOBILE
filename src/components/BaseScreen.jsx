import { View, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export function BaseScreen({children}){
    return (
        <View className="flex-1 bg-neutral justify-center">
            {children}
        </View>
    )
}