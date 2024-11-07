import { Alert } from "react-native"

const ModAlert = ({Tittle , Message}) => {
    return (
        Alert.alert(Tittle , Message)
    )
}

export default ModAlert;