import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHook'
import { getHomeContent } from './api/action'

const Home = () => {
  const dispatch = useAppDispatch()
  const {data, loading, error} = useAppSelector(state=> state.home)

  useEffect(() => {
    
  dispatch(getHomeContent(1))
  }, [])
  
  
  return (
    
      <View style={[styles.container]}>
        
          <Text>{JSON.stringify(data)}</Text>
        
      </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default Home