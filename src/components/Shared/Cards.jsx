import { 
    Pressable, 
    Image , 
    Animated, 
    View, 
    Text, 
    StyleSheet
} from "react-native"
import { useEffect } from "react"
import { useRef } from "react"

export const Card = ({ volunteer }) => {
    return (
        <Pressable>
            <View className="flex-1 active:opacity-70 border border-black
             active:border-white/50 mb-5 bg-WhiteCards rounded-xl p-4">
                <View className="flex-row gap-4" key={volunteer.FireBaseCode}>
                    <Image style={styles.image} source={{ uri: volunteer.Image }} />
                    <View className="flex-shrink space-y-3">
                        <Text className="text-xl font-bold">A random tittle</Text>
                        <Text className="text-normal text-black">{volunteer.Description}</Text>
                        <Text className="text-normal text-black">{volunteer.Location}</Text>
                        <Text className="text-base font-bold text-borderCollectorGreen">
                            {new Date(volunteer.VolunteerDate).toLocaleString()}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export function AnimatedCard({ volunteer, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true
        }).start();
    }, [opacity, index])

    return (
        <Animated.View style={{ opacity }}>
            <Card volunteer={volunteer} />
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 135,
        height: 135,
        borderRadius: 10,
        marginTop: 10
      },
})