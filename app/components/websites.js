import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Websites = ({name, image}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.titleText}>{name}</Text>
    <View>
    <View style = {styles.imageContainer}>
        <Text>{image}</Text>
    </View>

    <Image/>
    </View>
    </View>
  )
}

export default Websites

const styles = StyleSheet.create({
container:{
    marginHorizontal: 40,
    width: 132, 
    height: 125,
    backgroundColor: 'white', 
    borderRadius: 7
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
    position: 'absolute',
    top: 29,
    left: 16,
}
})