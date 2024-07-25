import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Schedule from '../components/schedule'

const Interviews = ({navigation}) => {
  return (

<ScrollView styles={[styles.container, {backgroundColor: 'white',}]}>
    <View style = {styles.header}>
      <Text style = {styles.headerText}>Mock Interview</Text>
      <Ionicons style = {styles.funnel} name = 'funnel-outline' size = {36} color={'white'}></Ionicons>
    </View>
      <Pressable onPress={() => navigation.goBack('SpecificJobs')}>
        <Text>
            WASSUUPPPPP!!!! Press to go back
        </Text>
      </Pressable>
    <Pressable style = {styles.startButton}>
      <Text style= {styles.textButton}>Start</Text>
    </Pressable>
    <Schedule/>
    <Schedule/>
    <Schedule/>
    <Schedule/>
</ScrollView>

  )
}

export default Interviews

const styles = StyleSheet.create({

container: {
    backgroundColor: "white",
},

funnel:{
  position: 'absolute',
  left: 374.5,
},

header:{
    width: 430, 
      height: 68, 
    paddingLeft: 24, 
    paddingRight: 24, 
    paddingTop: 16, 
    paddingBottom: 16, 
    backgroundColor: '#005FEE',
    borderBottomLeftRadius: 8, 
    borderBottomRightRadius: 8,
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    display: 'inline-flex',
    position: "absolute",
},
headerText:{
    width: 345, 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word',
    position: 'absolute',
},
startButton:{
  width: 152, 
  height: 68, 
  backgroundColor: '#005FEE', 
  borderRadius: 8,
  top: 137,
  left: 139,
},
textButton:{
  top: 23,
  textAlign: 'center', 
  color: 'white', 
  fontSize: 13, 
  fontFamily: 'Nunito', 
  fontWeight: '700', 
  lineHeight: 22, 
  wordWrap: 'break-word'
},
scheduleContainer:{
}
})