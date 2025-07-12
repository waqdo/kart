import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

interface MenuItemProps {
    item:{ name: string, iconUri: String};
    isFocused: boolean;
    onSelect:()=> void
}

const MenuItem:FC<MenuItemProps> = ({item, isFocused, onSelect}) => {
  return (
    <TouchableOpacity style={[styles.container, isFocused && styles.focused ]} onPress={onSelect}>
      <Image source={item?.iconUri as ImageSourcePropType} style={styles.icon} />
      <Text style={[styles.text,isFocused ? styles.textFocused: styles.textUnFocused]}>
{item.name}
      </Text>
    </TouchableOpacity>
  )
}

export default MenuItem

const styles = StyleSheet.create({
container:{
    padding:5,
    width:'23%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
    backgroundColor:'#D3D3D3',
    
},
focused:{
    backgroundColor:'black'
},
icon:{
    width:RFValue(18),
    height:RFValue(18),
marginVertical:4
},
text:{
    fontWeight:'bold',
    fontStyle:'italic',
    fontSize:RFValue(10)
},
textFocused:{
    color:'white'
},
textUnFocused:{
    color:'black'
}
})