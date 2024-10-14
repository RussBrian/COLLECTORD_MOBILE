import { Text } from "react-native"
import { BaseScreen } from "../components/Shared/BaseScreen"

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
