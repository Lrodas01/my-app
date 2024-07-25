import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FilteredJobs = ({ jobName, jobDescription, image, navigation, route, onPress }) => {
  return (
    <View style = {styles.superContainer}>
    <Pressable style = {[styles.container, styles.shadowProp]} onPress={onPress} >
        <Text style = {[styles.title, {textAlign: 'center', width: 275, left: 50,}]}> {jobName} </Text>
        <Text style = {styles.description}> {jobDescription}</Text>
        <Image style = {styles.image} source={image} />
    </Pressable>
    </View>
  )
}

export default FilteredJobs

const styles = StyleSheet.create({

superContainer:{ 

},

container: {
    width: 376, 
    height: 164,
    backgroundColor: 'white', 
    borderRadius: 7,
    marginVertical: 19,
},
shadowProp:{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
},
title: {
    width: 275, 
    height: 34, 
    top: 4,
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '600', 
    wordWrap: 'break-word'
},
description: {
    width: 244, 
    height: 60, 
    top: 29,
    left: 14,
    textAlign: 'center',
    color: '#808080', 
    fontSize: 10, 
    fontFamily: 'Nunito', 
    fontWeight: '500', 
    lineHeight: 20, 
    wordWrap: 'break-word'
},
image: {
    position: 'absolute',
    width: 88,
    height: 88,
    left: 263,
    top: 52,
}
})