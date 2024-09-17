import { View, Text, Platform, SafeAreaView } from 'react-native'
import React from 'react'

const SafeAreaViewAndroid = ({component}) => {
  return (
    <View style={{paddingTop: Platform.OS === 'android' ? statusbar.currentHeight:0}}>
    <SafeAreaView>
    <component/>

    </SafeAreaView>
    
    </View>
  )
}

export default SafeAreaViewAndroid