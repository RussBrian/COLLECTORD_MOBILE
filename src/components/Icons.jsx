import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

export const BookIcon = (props) => {
    return <AntDesign name="book" size={24} color="black" {...props} />;
};

export const HomeIcon = (props) => (
    <AntDesign name="home" size={24} color="black" {...props}/>
);

export const InfoIcon = (props) => (
    <Feather name="info" size={24} color="black" {...props}/>
);

