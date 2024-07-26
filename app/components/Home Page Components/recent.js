import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Recent = () => {
  return (
    <View style = {[styles.container, styles.shadowProp]}>
      <Text>recent</Text>
    </View>
  )
}

export default Recent

const styles = StyleSheet.create({
    container:{
        marginLeft: 18,
        top: 0,
        left: 28,
        width: 130, 
        height: 125, 
        backgroundColor: 'white', 
        borderRadius: 7
    },
    shadowProp:{
        shadowColor: '#171717',
        shadowOffset: { height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },

})