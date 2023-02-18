import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import DemoScreens from './screens/DemoScreens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false
        }} name='Home' component={HomeScreens} />

        <Stack.Screen options={{
          headerShown: false
        }} name='Demo' component={DemoScreens} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
