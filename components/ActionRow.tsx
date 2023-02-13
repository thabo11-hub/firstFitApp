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
        <TouchableOpacity>
            <Ionicons name='person-circle' size={24} color="black" />
            <Text>ActionRow</Text>
        </TouchableOpacity>
    )
}

export default ActionRow