import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'

const Artificial = ({onPress}) => {
  return (
    <Pressable style={styles.container} onPress = {onPress}>
      <ImageBackground style={styles.image} source = {require('../../assets/icons-black/ai.png')}>
      <Text style={styles.text}>AI</Text>
      </ImageBackground>
      <ImageBackground style={{height: 64.83, width: 101.94,}} source={require('../../assets/images/chat.png')}>
        <Text style = {[styles.helpText, {left: 29}]}>do you</Text>
        <Text style = {[styles.helpText, {left: 17}]}>need help?</Text>
      </ImageBackground>
    </Pressable>
  )
}

export default Artificial

const styles = StyleSheet.create({
    image: {
        left: 110,
        top: 65,
        width: 50,
        height: 40
    },
    text:{
        top: 2,
        textAlign: 'center', 
        color: 'white', 
        fontSize: 16, 
        fontFamily: 'Nunito', 
        fontWeight: '500', 
        lineHeight: 22.40, 
        wordWrap: 'break-word'
    },
    helpText:{
        top: 15,
        left: 10,
    }
})