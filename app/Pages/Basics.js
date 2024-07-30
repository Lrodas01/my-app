import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Basics = () => {
  return (
    <View style = {styles.conatiner}>
      <View style = {styles.header}>
            <Text style = {styles.headerText}>The Basics</Text>
      </View>
<ScrollView></ScrollView>
      <View>
        <Text style = {styles.title}>Creating a Resume</Text>
      </View>

      <View style = {[styles.stepsContainer, styles.shadowProp]}>
        <Text style = {styles.stepsTextTitle}>Steps</Text>
        <Text style = {styles.stepsDescription}>Creating a resume involves several key steps to ensure it...</Text>
      </View>

        <Text style = {styles.templateTitle}>Select a template for your resume </Text>
    <View style = {{justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', top: 126}}>
      <Pressable style = {[styles.templateOne]}>
        <Image style = {styles.templateContainer} source={require('../../assets/templates/template1.png')}/>
      </Pressable>
      <Pressable style = {[styles.templateTwo]}>
        <Image style = {styles.templateContainer} source = {require('../../assets/templates/template2.png')}/>
      </Pressable>
      <Pressable style = {[styles.templateThree]}>
        <Image style = {styles.templateContainer} source = {require('../../assets/templates/template3.png')}/>
      </Pressable>
      <Pressable style = {[styles.templateFour]}>
        <Image style = {styles.templateContainer} source = {require('../../assets/templates/template4.png')}/>
      </Pressable>
    </View>
    </View>
  )
}

export default Basics

const styles = StyleSheet.create({
header:{
  width: 430, 
  height: 66, 
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
  display: 'inline-flex'
},
headerText:{
  width: 345, 
  color: 'white', 
  fontSize: 25, 
  fontFamily: 'Nunito', 
  fontWeight: '700', 
  wordWrap: 'break-word'
},
title:{
  top: 20,
  left: 24,
  color: 'black', 
  fontSize: 25, 
  fontFamily: 'Nunito', 
  fontWeight: '700', 
  wordWrap: 'break-word'
},
stepsContainer:{
  left: 35,
  top: 58,
  width: 359, 
  height: 102, 
  backgroundColor: 'white', 
  borderRadius: 8
},
shadowProp:{
  shadowColor: '#171717',
  shadowOffset: { height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 3,
},
stepsTextTitle:{
  width: 65, 
  color: 'black', 
  fontSize: 25, 
  fontFamily: 'Nunito', 
  fontWeight: '400', 
  wordWrap: 'break-word'
},
stepsDescription:{
  left: 7,
  width: 342, 
  height: 68, 
  color: 'black', 
  fontSize: 25, 
  fontFamily: 'Nunito',
  fontWeight: '400', 
  wordWrap: 'break-word'
},  
templateTitle:{
  top: 84,
  left: 64,
  width: 302, 
  textAlign: 'center',
  color: 'black', 
  fontSize: 25, 
  fontFamily: 'Nunito', 
  fontWeight: '700', 
  wordWrap: 'break-word'
},
templateContainer:{
  width: 182,
  height: 236
},
templateOne:{
  marginRight: 27,
  marginBottom: 16,
},
templateThree:{
  marginRight: 27,
},
})