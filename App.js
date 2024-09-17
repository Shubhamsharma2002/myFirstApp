import { ScrollView, StatusBar, View } from 'react-native';
import Home from './screen/Home.jsx';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
     
     </Stack.Navigator>
      
    </NavigationContainer>
  );
}


