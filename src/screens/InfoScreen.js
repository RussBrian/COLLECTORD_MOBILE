import { View, Text, Image } from "react-native"
import { BaseScreen } from "../components/BaseScreen"


const InfoScreen = () => {

    return (
        <BaseScreen children={
            <Text className="text-black">
                More Info Screen
                <Image source={{uri:"assets\splash.png"}}/>
            </Text>}>
        </BaseScreen>
    )
}

export default InfoScreen
