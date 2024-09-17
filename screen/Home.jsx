
import React from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-paper';
 


const Main = ({navigation}) => {
  return (
    <View>
        
        <Text>Lets  build something rock</Text>

         <Button textColor="white" style={{backgroundColor:"red"}} >Click me</Button>
        
        
      
    </View>
    
  )
}

const Home = ({navigation}) =>{
    return <SafeAreaViewAndroid  Component={Main}/>
}

export default Main