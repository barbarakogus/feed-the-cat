import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import CatProfile from './components/CatProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: true}} >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name="Profile" component={CatProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
