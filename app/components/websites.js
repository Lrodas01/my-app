import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Websites = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.titleText}>Website Name</Text>
    <View>
    <View style = {styles.imageContainer}>
        <Text>Temporary Image container</Text>
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