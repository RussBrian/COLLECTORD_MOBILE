import { View, TextInput } from "react-native"

export function LoginInput({placeHolderName, value , children}){
    return (
        <View style={{backgroundColor:"#cbd5e1"}} 
        className="w-full p-4 mt-3 rounded-md border-black border-b-2">
        <TextInput 
         placeholder={placeHolderName}
         placeholderTextColor={"black"}
         value={value}
         onChange={value}
         {...children}   />
    </View>
    )
}