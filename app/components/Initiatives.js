import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Initiatives = ({name, image, onPress}) => {
  return (
    <Pressable onPress = {onPress} style = {[styles.container, styles.shadowProp]}>
      <Text style = {styles.programTitle}>{name}</Text>
      <View>
        <Image style = {styles.image} source = {image}/>
      </View>
    </Pressable>

  )
}

export default Initiatives

const styles = StyleSheet.create({
container:{
  width: 114, 
  height: 103, 
  backgroundColor: 'white',
  borderRadius: 7,
  marginHorizontal: 11,
  left:  10
},
shadowProp:{
  shadowColor: '#171717',
  shadowOffset: { height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 3,
},
programTitle:{
  top: 18,
  textAlign: 'center', 
  color: 'black', 
  fontSize: 8, 
  fontFamily: 'Nunito', 
  fontWeight: '500', 
  lineHeight: 10, 
  wordWrap: 'break-word'
},
image:{
  top: 30,
  left: 20,
  maxWidth: 75,
  height: 34
}
})