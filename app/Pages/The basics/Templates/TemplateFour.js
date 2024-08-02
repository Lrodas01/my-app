import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const TemplateFour = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}>The Basics</Text>
        </View>
        <View>
            <Text style = {styles.titleText}>This template is design to help you know the basics of making a resume!</Text>
        </View>
        <Image style = {styles.image} source={require('../../../../assets/templates/template4.png')}/>
    </View>
  )
}

export default TemplateFour

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
titleText:{
    top: 28,
    left: 24,
    width: 380, 
    textAlign: 'center', 
    color: 'black', 
    fontSize: 20, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
},
image:{
    top: 35,
    width: '100%',
    height: 652 
},
})