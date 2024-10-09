import { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';


const ProgessBar = ({preogression}) => {
    const [pregress , setProgress] = useState('');

    useEffect(() => {
        setProgress(pregress)
    },[preogression])
    
    return (
        <Progress.Bar progress={preogression} 
        width={300}
        color="green" 
        animated="true" 
        borderColor='black'
        height={12} 
        animationType="spring"/>
    )
}

export default ProgessBar;