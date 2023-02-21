import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import DemoScreens from './screens/DemoScreens';
import Paywall from './screens/Paywall';

export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreens} />

        <Stack.Screen options={{ headerShown: false }} name='Demo' component={DemoScreens} />

        <Stack.Screen options={{ headerShown: false }} name='Paywall' component={Paywall} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
