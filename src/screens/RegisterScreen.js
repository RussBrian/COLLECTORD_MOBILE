import { View, Text } from "react-native"
import { BaseScreen } from "../components/BaseScreen"

const RegisterScren = () => {
    return (
        <BaseScreen children={
            <View className="justify-center">
                <Text className="text-white">
                    Text for RegisterScreens
                </Text>
            </View>
        }>
        </BaseScreen>
    )
}

export default RegisterScren
