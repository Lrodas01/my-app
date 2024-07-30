import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Initiatives = () => {
  return (
    <View style = {[styles.container, styles.shadowProp]}>
      <Text style = {styles.programTitle}>Programs</Text>
    </View>
  )
}

export default Initiatives

const styles = StyleSheet.create({
container:{
  width: 114, 
  height: 103, 
  backgroundColor: 'white',
  borderRadius: 7,
  marginHorizontal: 11,
  left:  10
},
shadowProp:{
  shadowColor: '#171717',
  shadowOffset: { height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 3,
},
programTitle:{
  top: 18,
  textAlign: 'center', 
  color: 'black', 
  fontSize: 8, 
  fontFamily: 'Nunito', 
  fontWeight: '500', 
  lineHeight: 10, 
  wordWrap: 'break-word'
},
})