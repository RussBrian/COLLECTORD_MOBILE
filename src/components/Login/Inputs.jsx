import { Controller } from "react-hook-form"
import { View, TextInput } from "react-native"

export function LoginInput({ placeHolderName, name, control, secureTextEntry }) {
    return (

        <View
            className="bg-InputCollector 
                w-full p-4 mt-3 
                rounded-xl 
                border-2
                border-solid
                border-borderCollectorGreen
            ">
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange } }) => (
                    <TextInput
                        value={value || ""}
                        placeholder={placeHolderName}
                        placeholderTextColor={"black"}
                        onChangeText={onChange}
                        secureTextEntry={secureTextEntry} />
                )}/>
        </View>
    )
}