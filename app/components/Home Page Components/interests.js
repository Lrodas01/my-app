import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'

const Interests = ({jobName, onPress}) => {

  return (
    <Pressable onPress = {onPress} style = {[styles.container, styles.shadowProp]}>
      <Text style = {styles.name}>{jobName}</Text>
      <Image style = {styles.image} source = {require('../../../assets/images/icon.png')}></Image>
    </Pressable>
  )
}

export default Interests

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
    name:{
      top: 0,
      width: 130, 
      textAlign: 'center', 
      color: 'black', 
      fontSize: 14, 
      fontFamily: 'Nunito', 
      fontWeight: '400', 
      wordWrap: 'break-word'
    },
    image:{
      position: 'absolute',
      width:  50,
      height: 50,
      top: 42,
      left: 41,
    }

})