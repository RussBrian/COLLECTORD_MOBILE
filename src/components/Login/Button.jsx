import { Pressable, Text, StyleSheet } from "react-native"

const LoginButton = ({ onPressed, TextInput, Ustyled}) => {
    return (
        <Pressable
            style={({ pressed }) => [
                Ustyled, 
                { opacity: pressed ? 0.9 : 1 }
            ]}
            onPress={onPressed}
        >
            <Text className="text-white font-bold text-base text-center">{TextInput}</Text>
        </Pressable>
    )
}
export default LoginButton;
