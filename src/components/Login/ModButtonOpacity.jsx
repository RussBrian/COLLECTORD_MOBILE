import { Pressable, Text, StyleSheet } from "react-native"

const ModButtonOpacity = ({ onPressed, TextInput, Ustyled, TextStyle}) => {
    return (
        <Pressable
            style={({ pressed }) => [
                Ustyled, 
                { opacity: pressed ? 0.9 : 1 }
            ]}
            onPress={onPressed}
        >
            <Text style={TextStyle}>{TextInput}</Text>
        </Pressable>
    )
} 
export default ModButtonOpacity;


