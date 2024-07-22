import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FilteredJobs = ({ jobName, jobDescription, image }) => {
  return (
    <Pressable style = {styles.container}>
        <Text style = {styles.title}>{jobName}</Text>
        <Text style = {styles.description}> {jobDescription}</Text>
        <Image style = {styles.image} source={image} />
    </Pressable>
  )
}

export default FilteredJobs

const styles = StyleSheet.create({

container: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#000',
    margin: 8,
    height: 164,
    width: 376,
    backgroundColor: '#88CCF1',
},
title: {
    top: 4,
    fontSize: 25,
    textAlign: 'center',
},
description: {
    width: 200,
    fontSize: 10,
    textAlign: 'center',
    top: 25,
},
image: {
    position: 'absolute',
    width: 88,
    height: 88,
    left: 263,
    top: 52,
}
})