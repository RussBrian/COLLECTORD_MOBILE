import { View, Text } from "react-native"

export function BaseScreen({children}){
    return (
        <View className="flex-1 bg-neutral justify-center">
            <Text className="text-white/"></Text>
            {children}
        </View>
    )
}