import { useState } from 'react';
import {
    Image,
    View,
    StyleSheet,
    Pressable,
    ActivityIndicator
} 
from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export function ImagePickerService() {
    const [image, setImage] = useState(null);
    const [loading, SetLoading] = useState(true)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
                    
        
    }
        return (
            <View className="items-center">
                {loading && <ActivityIndicator size="large" color="#0000ff"/>}
                <Pressable onPress={pickImage}>
                    {image == null ? 
                    
                    <Image
                        style={styles.image}
                        source={require('../images/ImagenCollector.jpg')}
                        onLoad={() => SetLoading(false)} /> 
                        
                        : 
                        
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                        onLoad={() => SetLoading(false)} />}
                </Pressable>
            </View>
        )
}

export const styles = StyleSheet.create({
    image: {
        marginTop: 50,
        width: 200,
        height: 200,
        borderRadius: 30,
        marginBottom: 50
    },
})

