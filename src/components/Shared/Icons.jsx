import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const BookIcon = (props) => {
    return <AntDesign name="book" size={24} color="black" {...props} />;
};

export const ArrowBack = (props) => {
    return <AntDesign name="arrowleft" size={24} color="black" {...props}/>
}

export const HomeIcon = (props) => (
    <AntDesign name="home" size={24} color="black" {...props}/>
);

export const InfoIcon = (props) => (
    <Feather name="info" size={24} color="black" {...props}/>
);

export const PersonIcon  = (props) => (
    <AntDesign name="user" size={24} color="black" {...props} />
)

export const ArrowFoward = (props) => (
    <AntDesign name="arrowright" size={24} color="white" {...props}/>
)

export const ArrowDown = (props) =>  {
    return <AntDesign name="arrowdown" size={28} color="black" {...props}/>
}

export const EditProfile = (props) => {
    return<MaterialCommunityIcons name="pencil" size={28} color="black" {...props}/>
}