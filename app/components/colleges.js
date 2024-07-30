import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CardSheet from '@react-navigation/stack/src/views/Stack/CardSheet'

const Colleges = ({ collegeName, collegeImage }) => {
  return (
    <View style = {[styles.container, styles.shadowProp]}>

      <View>
        <Image style = {styles.image} source={collegeImage}/>
      </View>
      <View>
      <Text style = {styles.text}>{collegeName}</Text>
      </View>
      
    </View>

  )
}

export default Colleges

const styles = StyleSheet.create({

container:{
  bottom: 70,
  width: 114, 
  height: 103, 
  backgroundColor: '#FFFFFF', 
  marginHorizontal: 15,
  borderRadius: 7
},
shadowProp:{
  shadowColor: '#171717',
  shadowOffset: { height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 3,
},
text:{
  position: 'absolute',
  left: 40,
  top: 18,
  textAlign: 'center', 
  color: 'black', 
  fontSize: 8, 
  fontFamily: 'Nunito', 
  fontWeight: '500', 
  lineHeight: 10, 
  wordWrap: 'break-word'
},
image:{
  position: 'absolute',
  left: 19,
  top: 19,
  width: 75, 
  height: 75
},
})