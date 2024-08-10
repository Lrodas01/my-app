import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Internships = ({internshipsName, internshipsImage, onPress}) => {
  return (
    <Pressable style = {[styles.container, styles.shadowProp]} onPress={onPress}>
      <Text style = {styles.text}>{internshipsName}</Text>
      <View style = {styles.image}>
      <Image source = {internshipsImage}/>
      </View>
    </Pressable>
  )
}

export default Internships

const styles = StyleSheet.create({
        container:{
        marginLeft: 18,
        top: 0,
        left: 28,
        width: 130, 
        height: 125, 
        backgroundColor: 'white', 
        borderRadius: 7
    },
    shadowProp:{
        shadowColor: '#171717',
        shadowOffset: { height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    text:{
      width: 140,
      top: 10, 
      textAlign: 'center', 
      color: 'black', 
      fontSize: 14, 
      fontFamily: 'Nunito', 
      fontWeight: '400', 
      wordWrap: 'break-word'
    },
    image:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})