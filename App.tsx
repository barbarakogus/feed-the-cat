import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import CatProfile from './components/CatProfile';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['http://localhost:19007'],
  config: {
    screens: {
      Home: '/',
      Profile: '/profile'
    }
  }
}

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Profile" component={CatProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
