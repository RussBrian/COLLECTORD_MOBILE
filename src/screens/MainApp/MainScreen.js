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
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react"

const MainScreen = () => {
    
    const [volunteer, setVolunteers] = useState([])
    const ref = useRef(null);
    useScrollToTop(ref)

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
                paddingTop: 20,
                marginBottom: 5,
                paddingLeft: 10,
                paddingRight: 10
            }}>

                <Text className="text-black text-xl font-extrabold text-center mb-3">Voluntariados</Text>

                {volunteer.length === 0 ? (
                    <ActivityIndicator color={"#7B885B"} size={"large"} />
                ) : (
                        
                    <FlatList
                        ref={ref}
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