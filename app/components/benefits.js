import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Benefits = ({ title, description }) => {



  return (
    <View style = {styles.container}>
      <View style = {styles.salaryBox}>
          <View style = {{width: 24, height: 24, position: 'relative'}}>
            <Image source={require('../../assets/images/moneybag.png')}/>
          </View>
          <Text style = {styles.titleSalary}>{title}</Text>
          <Text style = {styles.descriptionSalary}>{description}</Text>
        </View>
    </View>
  )
}

export default Benefits

const styles = StyleSheet.create({
container:{
  marginHorizontal: 10,
},
salaryBox:{
  top: 24,
  width: 122, 
  height: 122,
  paddingLeft: 8, 
  paddingRight: 8, 
  paddingTop: 6, 
  paddingBottom: 6, 
  backgroundColor: 'white', 
  borderRadius: 8,
  flexDirection: 'column', 
  justifyContent: 'flex-start', 
  alignItems: 'flex-start', 
  gap: 24, 
  display: 'inline-flex'
},
descriptionSalary:{
  bottom: 20,
  width: 106, 
  color: '#555555', 
  fontSize: 12,
  fontFamily: 'Nunito', 
  fontWeight: '500', 
  wordWrap: 'break-word'
},
titleSalary:{
  width: 106, 
  height: 22, 
  color: '#005FEE', 
  fontSize: 16, 
  fontFamily: 'Nunito', 
  fontWeight: '500', 
  lineHeight: 25, 
  wordWrap: 'break-word'
},
})