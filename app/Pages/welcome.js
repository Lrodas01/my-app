import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import {router} from 'expo-router'

const Welcome = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.logoContainer}>
        <Image source={require('../../assets/images/icon.png')} style = {styles.iconImage}/>
        <Text style = {styles.companyName}>
            Occupi
        </Text>
        </View>
        <View style = {styles.descriptor}>
            <Text style = {styles.descriptorText}>Welcome! Lets get to know you</Text>
        </View>
        <Pressable style = {styles.buttonContainer} onPress={() => router.replace('../Pages/login')}>
            <Text style = {styles.textButton}>Start finding your interest</Text>
        </Pressable>
        <Pressable style = {styles.buttonContainer2} onPress={() => router.replace('../Pages/missing')}>
            <Text style = {styles.textButton2}>I already know what to do!</Text>
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create ({
container: {
    },
iconImage: {
    position: 'absolute',
    left: 71,
    top: 226,
    width: 250,
    height: 200,
    },
logoContainer: {
    bottom: 30,
    },
companyName: {
    position: 'absolute',
    fontFamily: 'Futura',
    fontSize: 55,
    left: 107,
    top: 386,
    },
descriptor: {
    position: 'absolute',
    top: 482,
    left: 54,
},
descriptorText:{
    fontSize: 20,
},
buttonContainer:{
    position: 'absolute',
    top: 550,
    backgroundColor: '#16BF82',
    width: 300,
    height: 50,
    margin: 50,
    borderRadius: '100%',
},
buttonContainer2:{
    position: 'absolute',
    top: 620,
    backgroundColor: '#88CCF1',
    width: 300,
    height: 50,
    margin: 50,
    borderRadius: '100%',
},
textButton:{
    top: 12,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Nunito',
    textAlign: 'center',
},
textButton2:{
    top: 12,
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontFamily: 'Nunito',
    textAlign: 'center',

},
});

export default Welcome