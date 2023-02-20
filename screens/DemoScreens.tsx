import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, Text, SafeAreaView } from 'react-native'
import { RootStackParamList } from '../App'

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Demo">;

const DemoScreens = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView>
      <Text>DemoScreens</Text>
    </SafeAreaView>
  )
}

export default DemoScreens