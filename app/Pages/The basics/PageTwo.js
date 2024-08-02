import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageTwo = () => {
  return (
    <View>
            <View style = {styles.header}>
        <Text style = {styles.headerText}>The Basics</Text>
      </View>
    </View>
  )
}

export default PageTwo

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
})