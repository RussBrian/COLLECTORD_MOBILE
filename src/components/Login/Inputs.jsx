import { Controller } from "react-hook-form"
import { View, TextInput, Text } from "react-native"
import { styles } from "../../services/GalleryService"

export function LoginInput({
    placeHolderName,
    name,
    control,
    rules = {},
    secureTextEntry }) {

    return (

        <Controller
            rules={rules}
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <>
                <View
                    className="bg-InputCollector 
                        w-full p-4 mt-3 
                        rounded-xl 
                        border-2
                        border-solid
                        border-collectorLightGreen">
                    <TextInput
                        value={value || ""}
                        placeholder={placeHolderName}
                        placeholderTextColor={"black"}
                        onChangeText={onChange}
                        secureTextEntry={secureTextEntry} />
                </View>
                    {
                        error ? <View className="justify-start items-start my-2"><Text className="text-red-500 text-base">{error.message}</Text></View>  : <></>
                    }
                </>
            )} />
    )
}