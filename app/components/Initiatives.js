import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'

const Initiatives = ({name, image, onPress}) => {
  return (
    <Pressable onPress = {onPress} >
      <ImageBackground style = {[styles.container, styles.shadowProp]} source = {image}>
      <Text style = {styles.programTitle}>{name}</Text>
      {/* <View style = {styles.imageContainer}>
        <Image style = {{width: 50, height: 50}} source = {image}/>
      </View> */}
      </ImageBackground>
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
imageContainer:{
  top: 25,
  flex: 1, 
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
}
})