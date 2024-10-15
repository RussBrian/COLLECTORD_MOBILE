import { View, TextInput } from "react-native"

export function LoginInput({placeHolderName, value , children, onChange}){
    return (
        <View 
        className="bg-InputCollector 
        w-full p-3 mt-3 
        rounded-xl 
        border-2
        border-solid
        border-x-collectorGreen
        ">
        <TextInput 
         placeholder={placeHolderName}
         placeholderTextColor={"black"}
         value={value}
         onChange={onChange}
         {...children}/>
    </View>
    )
}