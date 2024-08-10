import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const ResumeBasics = ({navigation}) => {
  return (
<View  style = {styles.container}>
    <View style={styles.header}>
      <Pressable onPress={()=>navigation.goBack('')} style = {styles.backButton}>
        <Ionicons name = 'chevron-back-outline' color={'white'} size={50}/>
      </Pressable>
      <Text style = {styles.headerText}>Resume for Dummies</Text>
    </View>
    <View style = {[styles.loadingBarContainer, styles.shadowProp]}>
        <Text style = {styles.loadingBarText}>resume</Text>
        <View style = {styles.loadingBar}>

        </View>
    </View>

    <Text style = {styles.textDescription}>Creating a resume involves several key steps to effectively showcase your skills, experience, and qualifications. Here's a comprehensive guide:</Text>

    <View style = {[styles.footer, styles.shadowUp]}>
      <Pressable onPress = {() => navigation.navigate('Resume1')} style = {styles.buttonFooter}>
      <Text style = {styles.buttonText}>Lets start this lesson!</Text>
      </Pressable>
    </View>
</View>    
  )
}

export default ResumeBasics

const styles = StyleSheet.create({
container:{
    height: '100%',
    backgroundColor: 'white'
},
header:{
    width: 430, 
    height: 82, 
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
backButton:{
  position: 'absolute',
  left: 0,
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
    top: 5,
    left: 31,
    width: 370, 
    height: 34, 
    backgroundColor: 'white', 
    borderRadius: 27.50
},
shadowProp: {
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
  loadingBarText:{
    position: 'absolute',
    top: 5,
    left: 159,
    textAlign: 'center', 
    color: 'black', 
    fontSize: 17, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    lineHeight: 22, 
    wordWrap: 'break-word'
  },
  loadingBar:{
    width: 111, 
    height: 34, 
    backgroundColor: '#005FEE', 
    borderRadius: 25.50
  },
  buttonFooter:{
    width: 384, 
    height: 65, 
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
  buttonText:{
    textAlign: 'center', 
    color: 'white', 
    fontSize: 24, 
    fontFamily: 'Nunito', 
    fontWeight: '900', 
    wordWrap: 'break-word'
  },
  footer:{
    top: 482,
    width: 430, 
    height: 129, 
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
  textDescription:{
    top: 141,
    left: 23,
    width: 382, 
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    lineHeight: 30, 
    wordWrap: 'break-word'
  }
})