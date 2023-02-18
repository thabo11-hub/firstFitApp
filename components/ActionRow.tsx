import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList,"Home">;

type Props = {
    title: string;
    screens: any;
    color: string;
    requiresPro?: boolean;
    icon?: any;
    vertical?: boolean;
}

const ActionRow = ({ title, screens, color, requiresPro, icon, vertical }: Props) => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <TouchableOpacity className={`flex m-2 flex-1 flex-row justify-center items-center py-6 rounded-lg space-x-2 
        ${vertical ? "flex-col" : "flex-row"}`}
            style={{ backgroundColor: color }}>
            <Ionicons name={icon} size={30} color="white" />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default ActionRow