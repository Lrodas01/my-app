import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const JobInfo = ({ navigation, route, jobImage, titleJob, descriptionJob }) => {
  return (
    <View style = {styles.container}>
    <Pressable style = {{backgroundColor:'#fff'}} onPress={() => navigation.navigate('Details')}>
        <Image style = {{position: 'absolute', left: 12}} source={require('../../assets/images/back.png')} />
    </Pressable>
    <Image style = {{position: 'absolute'}} source={require('../../assets/images/temporary2.png')} />
    </View>
  )
}

export default JobInfo

const styles = StyleSheet.create({
container: {
    backgroundColor: '#D8DEE9'
},

})