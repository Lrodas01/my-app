import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Interships = () => {
  return (
    <View style = {[styles.container, styles.shadowProp]}>
      <Text>interships</Text>
    </View>
  )
}

export default Interships

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 18,
        top: 210,
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