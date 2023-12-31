import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}   options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Register}   options={{ headerShown: false }}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C5CB3', 
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:700
  },
});
