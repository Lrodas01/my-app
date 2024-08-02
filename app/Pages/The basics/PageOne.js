import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageOne = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerText}>The Basics</Text>
      </View>
      <View style = {[styles.loadingBarContainer, styles.shadowProp]}>
        <View style = {styles.loadingBar}>

        </View>
      </View>

      <Text style = {styles.titleName}>Lets start with the basic nescessities!</Text>

      <Text style = {styles.titleNameName}>Have you ever made a resume?</Text>

      <Pressable style = {styles.buttonNo} onPress={()=>navigation.navigate('No')}>
        <Text style = {styles.buttonText}>No</Text>
      </Pressable>
      <Pressable style = {styles.buttonYes} onPress={()=>navigation.navigate('Home')}>
        <Text style = {styles.buttonText}>Yes</Text>
      </Pressable>
    </View>
  )
}

export default PageOne

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
    width: 74, 
    height: 55,
    backgroundColor: '#005FEE', 
    borderRadius: 25.50
  },
  shadowProp:{
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  buttonNo:{
    top: 560,
    left: 15,
    width: 192, 
    height: 54, 
    paddingLeft: 24, 
    paddingRight: 24, 
    paddingTop: 16, 
    paddingBottom: 16, 
    backgroundColor: '#005FEE', 
    borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'
  },
  buttonYes:{
    top: 506,
    left: 220,
    width: 192, 
    height: 54, 
    paddingLeft: 24, 
    paddingRight: 24, 
    paddingTop: 16, 
    paddingBottom: 16, 
    backgroundColor: '#005FEE', 
    borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'
  },
  buttonText:{
    width: 298, 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 16, 
    fontFamily: 'Nunito', 
    fontWeight: '900', 
    wordWrap: 'break-word'
  },
  titleName:{
    top: 78,
    textAlign: 'center', 
    color: 'black', 
    fontSize: 20, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
  },
  titleNameName:{
    top: 125,
    textAlign: 'center', 
    color: 'black', 
    fontSize: 20, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
  },
})