import {
    FlatList,
    Text,
    Pressable
} from "react-native"
import { useEffect, useState } from "react";
import { GetAllVolunteers } from "../../components/Shared/volunteerjson";
import { BaseScreen } from "../../components/Shared/BaseScreen";
import { AnimatedCard } from "../../components/Shared/Cards";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "expo-router";

const MainScreen = () => {

    const [volunteer, setVolunteers] = useState([])

    function RedenerizeVolunnteers() {
        const volunteersData = GetAllVolunteers()
        setVolunteers(volunteersData)
    }

    useEffect(() => {
        RedenerizeVolunnteers()
    }, [])

    return (
        <BaseScreen children={
            <SafeAreaView style={{
                marginTop: 30,
                marginBottom: 5,
                paddingLeft: 10,
                paddingRight: 10
            }}>

                <Text className="font-extrabold text-2xl text-black text-center mb-4">Voluntariados</Text>

                {volunteer.length === 0 ? (
                    <ActivityIndicator color={"#7B885B"} size={"large"} />
                ) : (
                    <FlatList
                        data={volunteer}
                        keyExtractor={(item) => item.FireBaseCode}
                        renderItem={({ item, index }) => (
                            <AnimatedCard volunteer={item} index={index} />
                        )}
                    />
                )}
            </SafeAreaView>
        }>
        </BaseScreen>
    )
}

export default MainScreen