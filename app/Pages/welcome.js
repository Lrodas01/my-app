import { View, Text, StyleSheet, Image, Pressable, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'


const Welcome = ( { selectedOptions, navigation} ) => {

  return (
    <>


    <View style = {styles.container}>
    <StatusBar style="light" translucent={false} backgroundColor="#005FEE" />
        <View style = {styles.logoContainer}>
            <Image source={require('../../assets/images/logo.png')} style = {styles.iconImage}/>
        </View>
        <View>
            <Text style = {styles.companyName}>Occupi</Text>
        </View>

        <Pressable style = {styles.buttonContainer} onPress={() => navigation.navigate('Basics')}>
            <Text style = {styles.textButton}>Lets start with the basics!</Text>
        </Pressable>
        <Pressable style = {styles.buttonContainer2} onPress={() => navigation.navigate('Home')}>
            <Text style = {styles.textButton}>I already know what to do!</Text>
        </Pressable>
    </View>
 
</>
  )
}

const styles = StyleSheet.create ({
phoneBezel:{
    bottom: 30,
    height: 100,
    backgroundColor: 'red',
    },
container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
},
companyName:{
    color: 'black', 
    fontSize: 55, 
    fontFamily: 'Futura', 
    fontWeight: '500', 
    wordWrap: 'break-word'
},
buttonContainer:{
    top: 98,
    width: 346, 
    height: 54, 
    paddingLeft: 24, 
    paddingRight: 24, 
    paddingTop: 16, 
    paddingBottom: 16, 
    borderRadius: 8, 
    backgroundColor: '#005FEE',
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    display: 'inline-flex'
},
buttonContainer2:{
    width: 346, 
    height: 54, 
    top: 128,
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
textButton:{
    width: 298, 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 16, 
    fontFamily: 'Nunito', 
    fontWeight: '900', 
    wordWrap: 'break-word'
},
});

export default Welcome