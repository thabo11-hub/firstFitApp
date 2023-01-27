import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home'  component={HomeScreens}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
