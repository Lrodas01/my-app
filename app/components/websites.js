import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'

const Websites = ({name, image}) => {
  return (
    <ImageBackground style = {styles.container}  source={image}>
      <Text style = {styles.titleText}>{name}</Text>
    </ImageBackground>
  )
}

export default Websites

const styles = StyleSheet.create({
container:{
    marginHorizontal: 40,
    width: 132, 
    height: 125,
    backgroundColor: 'white', 
    borderRadius: 7,
    
},
titleText:{
    top: 11,
    textAlign: 'center', 
    color: 'black', 
    fontSize: 14, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    wordWrap: 'break-word'
},
imageContainer:{
  top: 8,
  flex: 1, 
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
}
})