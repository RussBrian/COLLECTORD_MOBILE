import { StatusBar } from "expo-status-bar";
import { View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgessBar from "../../components/Login/ProgressBar";

const { width, height } = Dimensions.get('window');

export default function RegisterBaseSc({ BarPregression, children }) {
   
    return (
        <View style={{ flex: 1, backgroundColor: '#EDEDED', justifyContent: 'center' }}>
            <StatusBar style="dark" />
            <SafeAreaView style={{
                flex: 1,
                paddingBottom: height * 0.02,  
                marginHorizontal: width * 0.05, 
                marginTop: height * 0.03,
            }}>

                <View style={{ alignItems: 'center', marginBottom: height * 0.02 }}>
                    <ProgessBar Progression={BarPregression} />
                </View>
                
                {children}

            </SafeAreaView>
        </View>
    );
}
