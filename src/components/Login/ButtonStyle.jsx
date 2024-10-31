import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({

    button: {
        backgroundColor: '#515940',
        padding: 15,
        width: 288,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "#7D7E77"
    },
    buttonHome:{
        marginTop:10,
        backgroundColor:"transparent",
        padding: 13,
        width: 200,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "#7D7E77"
    },
    smallButton: {
        backgroundColor: '#515940',
        padding: 20,
        width: 150,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "#7D7E77"
    },
    text: {
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 16,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
    },
    textButton:{
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        fontSize:16
    },
    textTransparentButton:{
        fontWeight:"bold",
        color:"black",
        textAlign:"center",
        fontSize:16
    }
});