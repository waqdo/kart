import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React  from 'react'
import Navigation from '@navigation/Navigation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from '@store/store'

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaProvider style={{paddingTop: StatusBar.currentHeight}}>
      
        <Navigation />
      
      
    </SafeAreaProvider>
    </Provider>
       
    
     
    
    
  )
}

export default App

