import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Available = ({title, description}) => {
  return (
    <Pressable style = {[styles.container, styles.shadowProp]} onPress={()=>console.log('test')}>
      <Text style = {styles.title}>{title}</Text>
      <Text style = {styles.description}>{description}</Text>
    </Pressable>
  )
}

export default Available

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
title:{
    left: 20,
    width: 215.44, 
    height: 22, 
    color: 'black', 
    fontSize: 17, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 22, 
    wordWrap: 'break-word'
},
description:{
    left: 6,
    width: 303, 
    height: 52, 
    color: '#808080', 
    fontSize: 10, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 22, 
    wordWrap: 'break-word'
}
})