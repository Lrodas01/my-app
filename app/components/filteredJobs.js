import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FilteredJobs = ({ jobName, jobDescription, image, navigation, route, onPress }) => {
  return (
    <View style = {styles.superContainer}>
    <Pressable style = {[styles.container, styles.shadowProp]} onPress={onPress} >
        <Text style = {[styles.title, {textAlign: 'center', width: 275, left: 50,}]}> {jobName} </Text>
        <Image style = {styles.image} source={image} />
    </Pressable>
    </View>
  )
}

export default FilteredJobs

const styles = StyleSheet.create({

container: {
    width: 160, 
    height: 125, 
    backgroundColor: 'white', 
    borderRadius: 7
},
shadowProp:{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
},
title: {
    width: 54, 
    height: 34, 
    textAlign: 'center', 
    color: 'black', 
    fontSize: 12, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    wordWrap: 'break-word'
},

image: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 263,
    top: 52,
}
})