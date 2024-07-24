import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Colleges = () => {
  return (
    <View style = {styles.container}>
      <Text>colleges</Text>
    </View>
  )
}

export default Colleges

const styles = StyleSheet.create({

    container:{
        width: 114,
        height: 103,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
    },

})