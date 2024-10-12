import { View, TextInput } from "react-native"

export function LoginInput({placeHolderName, value , children}){
    return (
        <View 
        className="bg-InputCollector 
        w-full p-4 mt-3 
        rounded-xl 
        border-2
        border-solid
        border-x-collectorGreen
        ">
        <TextInput 
         placeholder={placeHolderName}
         placeholderTextColor={"black"}
         value={value}
         onChange={value}
         {...children}/>
    </View>
    )
}