import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const Basics = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerText}>The Basics</Text>
      </View>
      <View style = {[styles.loadingBarContainer, styles.shadowProp]}>
        <View style = {styles.loadingBar}>

        </View>
      </View>
      <View style = {{}}>
        <Text style = {styles.title}>Welcome to Occupi, an App that will help you start your future for the better!</Text>
      </View>
      <View style = {[styles.footer, styles.shadowUp]}>
        <Pressable style = {styles.beginButton} onPress={()=>navigation.navigate('PageOne')}>
          <Text style = {styles.beginText}>Lets Begin</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Basics

const styles = StyleSheet.create({
container:{
  height: '100%',
  backgroundColor: 'white'
},
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
loadingBarContainer:{
  top: 21,
  left: 30,
  width: 370, 
  height: 55, 
  backgroundColor: 'white', 
  borderRadius: 27.50
},
loadingBar:{
  width: 37, 
  height: 55, 
  backgroundColor: '#005FEE', 
  borderRadius: 25.50
},
title:{
  top: 82,
  left: 24,
  width: 382, 
  color: 'black', 
  fontSize: 20, 
  fontFamily: 'Nunito', 
  fontWeight: '700',
  lineHeight: 22, 
  wordWrap: 'break-word'
},
shadowProp:{
  shadowColor: '#171717',
  shadowOffset: { height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 3,
},
shadowUp:{
  shadowColor: '#171717',
  shadowOffset: { height: -12 },
  shadowOpacity: 0.16,
  shadowRadius: 16,
},
footer:{
  top: 556,
  width: 430, 
  height: 118, 
  paddingTop: 16, 
  paddingBottom: 48, 
  paddingLeft: 24, 
  paddingRight: 24, 
  backgroundColor: 'white', 
  flexDirection: 'column', 
  justifyContent: 'flex-start', 
  alignItems: 'flex-start', 
  gap: 10, 
  display: 'inline-flex'
},
beginButton:{
  width: 384, 
  height: 54, 
  paddingLeft: 24, 
  paddingRight: 24, 
  paddingTop: 16, 
  paddingBottom: 16, 
  backgroundColor: '#005FEE', 
  borderRadius: 8, 
  justifyContent: 'center', 
  alignItems: 'center', 
  gap: 10, 
  display: 'inline-flex'
},
beginText:{
  width: 298, 
  textAlign: 'center', 
  color: 'white', 
  fontSize: 16, 
  fontFamily: 'Nunito', 
  fontWeight: '900', 
  wordWrap: 'break-word'
}
})