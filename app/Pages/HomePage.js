import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActualHome = ({navigation}) => {
  return (
    <View>
      <Pressable onPress = {()=> {navigation.goBack('Welcome')}}>
        <Text>Go back, this page is not done</Text>
      </Pressable>
    </View>
  )
}

export default ActualHome

const styles = StyleSheet.create({})