import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../App'

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Demo">;

const DemoScreens = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={50} color="white" />
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>DemoScreens</Text>
    </SafeAreaView>
  );
};

export default DemoScreens;