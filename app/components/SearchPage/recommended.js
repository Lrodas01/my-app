import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Recommended = ( {title, description, image, onPress} ) => {
  return (
    <Pressable onPress = {onPress}style = {[styles.container, styles.shadowProp]}>
      <Text style = {styles.textTitle}>{title}</Text>
      <Text style = {styles.textDescription}>{description}</Text>
      <Image style = {styles.searchFeature} source = {image}/>

    </Pressable>
  )
}

export default Recommended

const styles = StyleSheet.create({
container:{
    width: 384, 
    height: 76.25, 
    backgroundColor: 'white', 
    borderRadius: 8,
    marginBottom: 27.75
},
shadowProp:{
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
},
textTitle:{
    width: 215.44, 
    height: 22, 
    left: 20,
    color: 'black', 
    fontSize: 17, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 22, 
    wordWrap: 'break-word'
},
textDescription:{
    position: 'absolute',
    top: 24,
    left: 6,
    width: 303,
    height: 52, 
    color: '#808080', 
    fontSize: 10, 
    fontFamily: 'Nunito', 
    fontWeight: '400',
    lineHeight: 22, 
    wordWrap: 'break-word',
},
searchFeature:{
  position: 'absolute',
  width: 50,
  height: 50,
  top: 12,
  right: 20,
}
})