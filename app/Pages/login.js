import { View, Text, Image, StyleSheet, Fla } from 'react-native'
import React from 'react'
import Selection from '../components/Selection'

export default function home() {
  return (
    <View style = {styles.contaier}>
        <View style = {styles.welcomePage}>
          <View>
            <Image style = {styles.imageContainer} source={require('../../assets/images/smallIcon.png')}/>
          </View>
            <Text style = {{fontSize: 40, left: 16, top: 70, width: 361, fontWeight: 700, position: 'absolute'}}>
              Welcome to Occupi
            </Text>
            <Text style = {{fontSize: 19, top: 142, width: 396, position: 'absolute', lineHeight: 25.92, fontWeight: 700,}}>
            Lets get started by choosing your interests!
            </Text>
        </View>
        <>
          <Selection titleText={'Computer'} descriptionText={'Descriptionnnn'} image={'../../assets/images/testImage.jpg'} />
          <Selection titleText={'Test'} descriptionText={'Descriptionnnn'} image={'../../assets/images/testImage.jpg'}/>
        </>
    </View>
  )
}

const styles = StyleSheet.create({

container: {
  fontFamily: 'Nunito',
},

imageContainer: {
  width: 55,
  height: 55,
  left: 172,
  top: 16,
  position: 'absolute',
},
})