import { View, Text, TextInput } from "react-native"
import { BaseScreen } from "../components/BaseScreen"

const MainScreen = () => {
    return (
        <BaseScreen children={
            <Text className="text-white">
                Text for MainScreen
            </Text>}>
        </BaseScreen>
    )
}

export default MainScreen
