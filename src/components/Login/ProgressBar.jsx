import { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';


const ProgessBar = ({Progression}) => {
    const [pregress , setProgress] = useState('');

    useEffect(() => {
        setProgress(pregress)
    },[Progression])
    
    return (
        <Progress.Bar progress={Progression} 
        width={300}
        color="green" 
        animated={true} 
        borderColor='black'
        borderRadius={30}
        borderWidth={3}
        height={12} 
        animationType="spring"/>
    )
}

export default ProgessBar;