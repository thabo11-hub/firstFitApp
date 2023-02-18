import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    title: string;
    screens: any;
    color: string;
    requiresPro?: boolean;
    icon?: any;
    vertical?: boolean;
}

const ActionRow = ({ title, screens, color, requiresPro, icon, vertical }: Props) => {
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